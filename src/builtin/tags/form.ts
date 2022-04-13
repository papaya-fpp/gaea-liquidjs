import { Emitter, TagToken, evalToken, Context, TagImplOptions, Hash } from '../../types'
import { Tokenizer } from '../../parser/tokenizer'
import { joinJsonToStr, getLiquidValue } from '../../util/underscore'
import { evalQuotedToken } from '../../render/expression'

/******
 * 不同类型自定义参数配置
 * 自定义参数优先级低于标签应用层传入的变量
 * 自定义参数可以使用环境变量，如 id: '{{ product.id }}-1234'
 */

const formTypeMapper = {
  product: {
    action: '/cart/add'
  }
}

interface IArgsJson {
  enctype: string;
  method: string;
  'accept-charset': string;
  type?: string;
}

// 将args解析成 json,并添加form默认属性
function parseArgsToFormJson (args: string): object {
  const argsList = args.split(',').map((i) => i.replace(/\s/g, ''))
  const defaultArgsJson: IArgsJson = {
    enctype: 'multipart/form-data',
    method: 'post',
    'accept-charset': 'UTF-8'
    // type: ''
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

  return result
}

function parseToForm (args: string) {
  const argsJson: any = parseArgsToFormJson(args)
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
    const value = tokenizer.readValue()
    // const formTypeString = value.getText()
    // this.formTagStart = `<form type=${formTypeString}>` // <form type='product'>
    this.formTagStart = parseToForm(tagToken.args)
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
    emitter.write(this.formTagStart + innerHtml + '</form>')
  }
} as TagImplOptions
