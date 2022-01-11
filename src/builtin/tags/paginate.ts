import { Emitter, TagToken, Context, TagImplOptions } from '../../types'

export default {
  parse: function (tagToken: TagToken, remainTokens) {
    this.tokens = []
    const stream = this.liquid.parser.parseStream(remainTokens)
    stream
      .on('token', (tagToken) => {
        if (tagToken.name === 'endpaginate') stream.stop()
        else this.tokens.push(tagToken)
      })
      .on('end', () => {
        throw new Error(`tag ${tagToken.raw} not closed`)
      })
    stream.start()
  },

  render: function * (ctx: Context, emitter: Emitter) {
    return ''
  }
} as TagImplOptions
