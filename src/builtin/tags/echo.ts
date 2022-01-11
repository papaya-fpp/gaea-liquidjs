import { Emitter, TagToken, Context, TagImplOptions } from '../../types'
import { Tokenizer } from '../../parser/tokenizer'

export default {
  parse: function (tagToken: TagToken) {
    const args = ` {{ ${tagToken.args} }} `
    this.tokenizer = new Tokenizer(args, this.liquid.options.operatorsTrie)
  },

  render: function * (ctx: Context, emitter: Emitter) {
    const { liquid, tokenizer } = this
    const tokens = tokenizer.readTopLevelTokens(liquid.options)
    const templates = liquid.parser.parse(tokens)
    for (const tpl of templates) {
      try {
        const html = yield tpl.render(ctx, emitter)
        html && emitter.write(html)
      } catch (err) {
        console.error('liquid 标签 parseError', err)
      }
    }
  }
} as TagImplOptions
