import { assert } from '../../util/assert'
import { ForloopDrop } from '../../drop/forloop-drop'
import { toEnumerable } from '../../util/collection'
import { evalQuotedToken, TypeGuards, Tokenizer, evalToken, Hash, Emitter, TagToken, Context, TagImplOptions } from '../../types'

export default {
  parse: function (token: TagToken) {
    const args = token.args
    const tokenizer = new Tokenizer(args, this.liquid.options.operatorsTrie)
    this.file = this.liquid.options.dynamicPartials
        ? tokenizer.readValue()
        : tokenizer.readFileName()
    assert(this.file, () => `illegal argument "${token.args}"`)
    while (!tokenizer.end()) {
        tokenizer.skipBlank()
        const begin = tokenizer.p
        const keyword = tokenizer.readIdentifier()
        if (keyword.content === 'with' || keyword.content === 'for') {
            tokenizer.skipBlank()
            if (tokenizer.peek() !== ':') {
                const value = tokenizer.readValue()
                if (value) {
                    const beforeAs = tokenizer.p
                    const asStr = tokenizer.readIdentifier()
                    let alias
                    if (asStr.content === 'as') alias = tokenizer.readIdentifier()
                    else tokenizer.p = beforeAs

                    this[keyword.content] = { value, alias: alias && alias.content }
                    tokenizer.skipBlank()
                    if (tokenizer.peek() === ',') tokenizer.advance()
                    continue
                }
            }
        }
        tokenizer.p = begin
        break
    }
    this.hash = new Hash(tokenizer.remaining())
    },
    render: function* (ctx: Context, emitter: Emitter) {
        const { liquid, file, hash } = this
        
        const { renderer } = liquid;
        let filepath: any = '';
        let fileName = ctx.opts.dynamicPartials
            ? (TypeGuards.isQuotedToken(file)
                ? yield renderer.renderTemplates(liquid.parse(evalQuotedToken(file)), ctx)
                : evalToken(file, ctx))
            : file.getText()

        const filepathIsObj = (typeof (filepath) == 'object')

        if (!filepathIsObj && fileName.indexOf('snippets') < 0) {
            filepath = `snippets/${fileName}` // render只從snippets目錄下找文件
        } else {
          filepath = fileName
        }

        assert(filepath, () => `illegal filename "${file.getText()}":"${filepath}"`)
        let config = {}
        try {
            const { sections, ...settings } = ctx.environments.themeConfig || { sections: [] }
            config = {
                ...ctx.environments, settings
            }
        } catch (err) {
            console.error('ctx.environments.themeConfig 解构失败', err)
        }

        const childCtx = new Context(config, ctx.opts, ctx.sync)
        const scope = yield hash.render(ctx)

        if (this['with']) {
            const { value, alias } = this['with']
            scope[alias || fileName] = evalToken(value, ctx)
        }
        childCtx.push(ctx.getAll()) // 这里需要把所有的scope扔进去,不然那不到sectionBatcher里传入的全局settings
        childCtx.push(scope) // 这个两个scope的顺序不能颠倒,不然 getAll的scopes会覆盖掉scope


        if (this['for']) {
            console.log('fffffff===>>>>')
            const { value, alias } = this['for']
            let collection = evalToken(value, ctx)
            collection = toEnumerable(collection)
            scope['forloop'] = new ForloopDrop(collection.length)
            for (const item of collection) {
                scope[alias] = item
                // if (typeof (filepath) == 'object') { // 说明是直接给render传入了一个大对象,需要特殊处理
                //     const templates = yield liquid.parse(filepath.tplHtml)
                //     yield renderer.renderTemplates(templates, childCtx, emitter)
                // } else {
                    const templates = yield liquid._parseFile(filepath, childCtx.opts, childCtx.sync)
                    yield renderer.renderTemplates(templates, childCtx, emitter)
                // }
                scope["forloop"].next()
            }
        } else {
            if (filepathIsObj) { // 说明是直接给render传入了一个大对象,需要特殊处理
                const blockObj = filepath
                const blockStylesheet = `{{ '${blockObj.stylesheet}' | asset_url | stylesheet_tag }}`

                if (blockObj.javascript){
                    const blockJavascript = `{{ '${blockObj.javascript}' | asset_url }}` 
                    const appsAssetsJavascript = yield liquid.parseAndRender(blockJavascript, childCtx.opts)
                    liquid.options.globals.ctrl.updateScriptsOfEmbedApp(appsAssetsJavascript)
                }

                const blockLiquid = `<div class="apps_block-wrapper">
                    ${blockStylesheet} 
                    ${blockObj.tplHtml}
                </div>`
                const templates = yield liquid.parse(blockLiquid, childCtx.opts, childCtx.sync)

                childCtx.push({
                    block: blockObj
                })
                yield renderer.renderTemplates(templates, childCtx, emitter)
            }else {
                const templates = yield liquid._parseFile(filepath, childCtx.opts, childCtx.sync)
                yield renderer.renderTemplates(templates, childCtx, emitter)
            }
        }
    }
} as TagImplOptions
