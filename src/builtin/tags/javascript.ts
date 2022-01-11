import { Emitter, TagToken, Context, TagImplOptions } from '../../types'
import { Tokenizer } from '../../parser/tokenizer'
import { evalQuotedToken } from '../../render/expression'

export default {
  parse: function (tagToken: TagToken, remainTokens) {
    const tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie)
    this.variable = readVariableName(tokenizer)
    this.templates = []
    const stream = this.liquid.parser.parseStream(remainTokens)
    stream.on('tag:endjavascript', () => stream.stop())
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
    const html = yield r.renderTemplates(this.templates, ctx)
    const str = `<script>
        window.addEventListener('load',function(){${html}})
    </script>`
    return str
  }
} as TagImplOptions

function readVariableName (tokenizer: Tokenizer) {
  const word = tokenizer.readIdentifier().content
  if (word) return word
  const quoted = tokenizer.readQuoted()
  if (quoted) return evalQuotedToken(quoted)
}
