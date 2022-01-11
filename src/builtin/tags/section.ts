import { Tokenizer, TagToken, evalQuotedToken, TagImplOptions, TypeGuards, evalToken, Hash } from '../../types'
import ThemeDataScope, { THEME_DIR } from '../../fs/ThemeDataScope'
import { transformThemeConfig } from '../../util/fpp'

// 不同模块 容器添加默认dom
const wrapperMapper = {
  header: '<div id="shopify-section-header" class="shopify-section" data-shopify-editor-section="{"id":"announcement-bar","type":"announcement-bar","disabled":false}">'
}

export default {
  parse: function (tagToken: TagToken) {
    const tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie)
    this.file = tokenizer.readValue()

    // const domain = this.liquid.options.root;
    const themeScope = new ThemeDataScope()
    this.domainFiles = themeScope.rootData
    // console.log(domainFiles[1].data, 'ddd')
    const settingData = themeScope.getTpl('config/settings_data.json')
    this.themeConfig = transformThemeConfig(settingData).current
    this.hash = new Hash(tokenizer.remaining())
  },
  render: function * (ctx) {
    const { liquid, file, hash } = this
    const { renderer } = liquid
    // 对 指定模块 添加 全局配置的作用域
    const { sections, ...settings } = this.themeConfig

    let filePath = TypeGuards.isQuotedToken(this.file) ? yield renderer.renderTemplates(liquid.parse(evalQuotedToken(file)), ctx) : evalToken(file, ctx)
    // const templates = getSectionLiquid(this.domainFiles, filePath)

    if(filePath.indexOf('sections/') < 0) {
      filePath = `sections/${filePath}`
    }


    let section: any = {}
    if (Array.isArray(sections)) {
      section = sections && sections.find((item) => item.type === filePath)
    } else {
      section = sections[filePath]
    }

    const scope = yield hash.render(ctx)
    // ctx.push(scope)
    const childCtx = { ...ctx.environments, section, settings, ...scope,...ctx.globals }

    // 官方在这里用的是 renderer.renderTemplates
    let html = yield this.liquid.renderFile(filePath, childCtx)
    if (wrapperMapper[filePath]) {
      html = `${wrapperMapper[filePath]} ${html} </div>`
    }
    return html
  }
} as TagImplOptions
