import { Emitter, TagToken, Context, TagImplOptions } from '../../types'
import { Tokenizer } from '../../parser/tokenizer'

export default {
  parse: function (tagToken: TagToken) {
    const args = ` {{ ${tagToken.args} }} `
    const tokenizer = new Tokenizer(args, this.liquid.options.operatorsTrie)
    const tokens = tokenizer.readTopLevelTokens(this.liquid.options)

    this.templates = this.liquid.parser.parse(tokens)
  },

  render: function * (ctx: Context, emitter: Emitter) {
    for (const tpl of this.templates) {
      try {
        const html = yield tpl.render(ctx, emitter)
        html && emitter.write(html)
      } catch (err) {
        console.error('liquid tag parseError', err)
      }
    }
  }
} as TagImplOptions
