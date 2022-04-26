/* eslint-disable @typescript-eslint/camelcase */
import { Emitter, TagToken, evalToken, Context, TagImplOptions, Hash } from '../../types'
import { Tokenizer } from '../../parser/tokenizer'
import { trim } from 'lodash'
// 将json合并为字符串
export function joinJsonToStr (json: object): string {
  let str = ''
  Object.keys(json).forEach(key => {
    const val = `"${json[key]}"`
    // 过滤重复 '" | '"
    const regVal = val.replace(/"'|'"/g, '"')
    str += ` ${key}=${regVal}`
  })
  return str
}

// 获取值，如果不饱和'/" ，按照变量处理，返回 {{ value }}
export function getLiquidValue (str: string): string {
  let value = str
  if (!/['"]/g.test(str)) {
    value = `{{ ${str} }}`
  }
  return trim(value.replace(/['"]/g, ''))
}

/******
 * 不同类型自定义参数配置
 * 自定义参数优先级低于标签应用层传入的变量
 * 自定义参数可以使用环境变量，如 id: '{{ product.id }}-1234'
 */

const formTypeMapper = {
  product: {
    action: '/cart/add'
  },
  contact: {
    action: '/contact'
  },
  customer: {
    action: '/contact'
  },
  customer_login: {
    action: '/account/login'
  },
  create_customer: {
    action: '/account/register'
  },
  recover_customer_password: {
    // action: '/account/recover'
    action: '/account/login#recover'
  },
  reset_customer_password: {
    action: '/account/reset'
  },
  customer_address: {
    action: '/account/addresses'
  },
  localization: {
    action: '/localization'
  }
}
interface IArgsJson {
  enctype: string;
  method: string;
  'accept-charset': string;
  type?: string;
}

// 将args解析成 json,并添加form默认属性
function parseArgsToFormJson (args: string, formShadow): object {
  const argsList = args.split(',').map((i) => trim(i))
  const defaultArgsJson: IArgsJson = {
    enctype: 'multipart/form-data',
    method: 'post',
    'accept-charset': 'UTF-8'
  }
  if (!argsList.length) {
    return defaultArgsJson
  }
  const first = argsList[0]
  // 第一条数据认为是 类型
  const type = first.replace(/['"]/g, '')
  const isValidateType = type.indexOf(':') === -1 && !!type
  let result = defaultArgsJson
  if (isValidateType) {
    result.type = type
    argsList.shift()
  }
  result = {
    ...result,
    ...formTypeMapper[type]
  }

  argsList.forEach((item) => {
    const arr = item.split(':')
    if (!arr[1]) return
    result[arr[0]] = getLiquidValue(arr[1])
  })

  if (type === 'customer_address' && formShadow && formShadow.url) {
    result['action'] = formShadow.url
  }

  return result
}

function parseToForm (args, formShadow) {
  const argsJson = parseArgsToFormJson(args, formShadow)

  const defaultFormStr = `<form ${joinJsonToStr(argsJson)}>
    <input type="hidden" value="${argsJson.type || ''}" name="form_type">
    <input type="hidden" name="utf8" value="✓">
  `
  return defaultFormStr
}

export default {
  parse: function (tagToken, remainTokens) {
    const tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie)

    this.templates = []
    this.formArgs = tagToken.args

    tokenizer.readTo(',')
    tokenizer.skipBlank()

    this.valueShouldBePassedToForm = tokenizer.readValue() // kind 128
    const stream = this.liquid.parser.parseStream(remainTokens)
    stream
      .on('tag:endform', () => stream.stop())
      .on('template', (tpl) => {
        this.templates.push(tpl)
      })
      .on('end', () => {
        throw new Error(`tag ${tagToken.getText()} not closed`)
      })
    stream.start()

    this.hash = new Hash(tokenizer.remaining())
  },
  render: function * (ctx, emitter) {
    const { liquid, hash, templates, valueShouldBePassedToForm } = this
    const formShadow = evalToken(valueShouldBePassedToForm, ctx)

    const { renderer } = liquid

    const childCtx = new Context({ form: formShadow }, ctx.opts, ctx.sync)
    const scope = yield hash.render(ctx)

    childCtx.push(ctx.getAll())
    childCtx.push(scope)

    const innerHtml = yield renderer.renderTemplates(templates, childCtx)
    const formTagStart = parseToForm(this.formArgs, formShadow)

    const forTagStartHtml = yield liquid.parseAndRender(formTagStart, childCtx.getAll())
    emitter.write(forTagStartHtml + innerHtml + '</form>')
  }
} as TagImplOptions
