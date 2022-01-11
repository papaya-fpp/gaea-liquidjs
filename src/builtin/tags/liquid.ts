import { TagToken, Context, TagImplOptions } from '../../types'
import { Tokenizer } from '../../parser/tokenizer'

/**
 * 自定义 liquid 标签
 * 方案是在liquid 里面 每行 两边添加 {%  %} 然后重新渲染
 * 示例：
 * {%- liquid
      assign columns = section.blocks.size
      if columns > 3
        assign columns = 3
      endif
    -%}
 */

// 将liquid标签 转为 两边添加 {%%}
function parseLiquidToNormal (args: string) {
  const list = args.split(/\n/).map(str => {
    if (/[\S]/g.test(str)) {
      const trimedStr = str.replace(/(^\s*)|(\s*$)/g, '')
      return `{% ${trimedStr} %}`
    }
    return ''
  })
  const notEmptyList = list.filter(item => !!item)
  return notEmptyList.join(' \n')
}

export default {
  parse: function (tagToken: TagToken) {
    const args = parseLiquidToNormal(tagToken.args)
    const tokenizer = new Tokenizer(args, this.liquid.options.operatorsTrie)
    const tokens = tokenizer.readTopLevelTokens(this.liquid.options)

    this.templates = this.liquid.parser.parse(tokens)
    this.key = tokenizer.readIdentifier().content
  },

  render: function * (ctx: Context, emitter) {
    ctx.bottom()[this.key] = yield this.liquid.renderer.renderTemplates(this.templates, ctx, emitter)
  }
} as TagImplOptions
