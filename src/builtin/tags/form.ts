import { Emitter, TagToken, Context, TagImplOptions } from '../../types'
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

// 将args解析成 json,并添加form默认属性
function parseArgsToFormJson (args: string): object {
  const argsList = args.split(',').map((i) => i.replace(/\s/g, ''))
  const defaultArgsJson = {
    enctype: 'multipart/form-data',
    method: 'post',
    'accept-charset': 'UTF-8',
    type: ''
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
  parse: function (tagToken: TagToken, remainTokens) {
    const tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie)
    this.variable = readVariableName(tokenizer)
    this.templates = []
    const stream = this.liquid.parser.parseStream(remainTokens)
    this.args = parseToForm(tagToken.args)
    stream.on('tag:endform', () => stream.stop())
      .on('template', (tpl) => {
        this.templates.push(tpl)
      })
      .on('end', () => {
        throw new Error(`tag ${tagToken.getText()} not closed`)
      })
    stream.start()
  },

  render: function * (ctx: Context, emitter: Emitter) {
    const r = this.liquid.renderer
    const html: any = yield r.renderTemplates(this.templates, ctx)
    const str = `${this.args}${html}</form>`
    return str
  }
} as TagImplOptions

function readVariableName (tokenizer: Tokenizer) {
  const word = tokenizer.readIdentifier().content
  if (word) return word
  const quoted = tokenizer.readQuoted()
  if (quoted) return evalQuotedToken(quoted)
}
