import { Hash, Emitter, TagToken, Context, TagImplOptions, evalToken } from '../../types'
import { Tokenizer } from '../../parser/tokenizer'
import { evalQuotedToken } from '../../render/expression'
import { toEnumerable } from '../../util/collection'
import { set } from 'lodash'

export default {
  parse: function (tagToken: TagToken, remainTokens) {
    const tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie)
    this.templates = []

    this.products = tokenizer.readValue() // 读变量 collection.p1.products 的值
    tokenizer.skipBlank()

    this.byStr = tokenizer.readIdentifier().content // "by"

    tokenizer.skipBlank()
    this.byParams = tokenizer.readValue() // by的参数

    const stream = this.liquid.parser.parseStream(remainTokens)
    stream
      .on('tag:endpaginate', () => stream.stop())
      .on('template', (tpl) => {
        this.templates.push(tpl)
      })
      .on('end', () => {
        throw new Error(`tag ${tagToken.getText()} not closed`)
      })
    stream.start()
  },

  render: function * (ctx: Context, emitter: Emitter) {
    let products = toEnumerable(yield evalToken(this.products, ctx)) // collection.p1.products 中products的值
    const limit = (yield evalToken(this.byParams, ctx))
    products = products.slice(0, limit)

    // 读出第一次变量的值 collection.p1.products 中的collection的值
    const _tokennizer = new Tokenizer(this.products.variable.content, this.liquid.options.operatorsTrie)
    const oldScopeValue = yield evalToken(_tokennizer.readValue(), ctx) // collection的值

    const scope = {}
    scope[this.products.variable.content] = oldScopeValue
    const propPath = this.products.getText()// getText()获取readValue时的真实路径,对象路径,a.b.c.d
    // eslint-disable-next-line no-eval
    set(scope, propPath, products)

    // console.log(scope, 'ccccc')

    ctx.push(scope)

    const r = this.liquid.renderer
    const html: any = yield r.renderTemplates(this.templates, ctx)

    return html
  }
} as TagImplOptions
