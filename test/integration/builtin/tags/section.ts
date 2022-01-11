import { Liquid, Drop } from '../../../../src/liquid'
import { expect } from 'chai'
import { mock, restore } from '../../../stub/mockfs'
import { mockThemeDataInLocalstorage } from '../../../stub/mockbrowser'
import * as fs from '../../../../src/fs/browser'

describe('tags/section_in_browser', function () {
    let liquid: Liquid
    before(function () {
        liquid = new Liquid({
            fs 
        }) 
    })

    afterEach(restore)
    it('should support section', async function () {
        mockThemeDataInLocalstorage({
            sections: [{
                name: 'demose.liquid',
                type: 'file',
                data: {
                    value: `bar in section`
                },
            }]
        })

        const src = `{% section "demose" %}`

        const html = await liquid.parseAndRender(src)
        expect(html).to.equal('bar in section')
    })
    
    it('should support template string', async function () {
        mockThemeDataInLocalstorage({
            sections: [{
                name: 'foo.liquid',
                type: 'file',
                data: {
                    value: `content of foo`
                },
            }]
        })
        const src = `bar {% section "{{name}}" %} bar`
        const html = await liquid.parseAndRender(src, { name: 'foo' })
        expect(html).to.equal('bar content of foo bar')
    })

    it.skip('should throw when not specified', function () {
        const src = `bar {% section %} bar`

        return liquid.parseAndRender(src).catch(function (e) {
            expect(e.name).to.equal('ParseError')
            expect(e.message).to.match(/illegal argument ""/)
        })
    })

    it.skip('should throw when not exist', function () {
    
        const src = `bar {% section not-exist %} bar`

        return liquid.parseAndRender(src).catch(function (e) {
            expect(e.name).to.equal('RenderError')
            expect(e.message).to.match(/illegal filename "not-exist":"undefined"/)
        })
    })

    it('should support render: hash list', async function () {
        mockThemeDataInLocalstorage({
            sections: [{
                name: 'user.liquid',
                type: 'file',
                data: {
                    value: '{{role}} : {{alias}}'
                },
            }]
        })
        const src = '{% assign name="harttle" %}{% section "user.liquid", role: "admin", alias: name %}'
        const html = await liquid.parseAndRender(src)
        expect(html).to.equal('admin : harttle')
    })

    it('should not bleed into child template', async function () {
        mockThemeDataInLocalstorage({
            sections: [{
                name: 'user.liquid',
                type: 'file',
                data: {
                    value: 'InChild: {{name}}'
                },
            }]
        })
        const src = '{% assign name="harttle" %}InParent: {{name}} {% section "user.liquid" %}'
        const html = await liquid.parseAndRender(src)
        expect(html).to.equal('InParent: harttle InChild: ')
    })


    it('should be able to access globals', async function () {
        mockThemeDataInLocalstorage({
            sections: [{
                name: 'user.liquid',
                type: 'file',
                data: {
                    value: 'InChild: {{name}}'
                },
            }]
        })
        const html = await liquid.parseAndRender('InParent: {{name}} {% section "user.liquid" %}', {
            name: 'harttle'
        }, {
            globals: { name: 'Harttle' }
        })
        expect(html).to.equal('InParent: harttle InChild: Harttle')
    })

    return

    it('should support with', async function () {
        mock({
            '/with.liquid': '{% section "color" with "red", shape: "rect" %}',
            '/color.liquid': 'color:{{color}}, shape:{{shape}}'
        })
        const html = await liquid.parseAndRender('with.liquid')
        expect(html).to.equal('color:red, shape:rect')
    })
    it('should support with...as', async function () {
        mock({
            '/with.liquid': '{% section "color" with color as c %}',
            '/color.liquid': 'color:{{c}}'
        })
        const html = await liquid.parseAndRender('with.liquid', { color: 'red' })
        expect(html).to.equal('color:red')
    })
    it('should support with...as and other parameters', async function () {
        mock({
            '/index.liquid': '{% section "item" with color as c, s: shape %}',
            '/item.liquid': 'color:{{c}}, shape:{{s}}'
        })
        const scope = { color: 'red', shape: 'rect' }
        const html = await liquid.parseAndRender('index.liquid', scope)
        expect(html).to.equal('color:red, shape:rect')
    })
    it('should support for...as', async function () {
        mock({
            '/index.liquid': '{% section "item" for colors as color %}',
            '/item.liquid': '{{forloop.index}}: {{color}}\n'
        })
        const html = await liquid.parseAndRender('index.liquid', { colors: ['red', 'green'] })
        expect(html).to.equal('1: red\n2: green\n')
    })
    it('should support for <non-array> as', async function () {
        mock({
            '/index.liquid': '{% section "item" for "green" as color %}',
            '/item.liquid': '{{forloop.index}}: {{color}}\n'
        })
        const html = await liquid.parseAndRender('index.liquid')
        expect(html).to.equal('1: green\n')
    })
    it('should support for without as', async function () {
        mock({
            '/index.liquid': '{% section "item" for colors %}',
            '/item.liquid': '{{forloop.index}}: {{color}}\n'
        })
        const html = await liquid.parseAndRender('index.liquid', { colors: ['red', 'green'] })
        expect(html).to.equal('1: \n2: \n')
    })
    it('should support for...as with other parameters', async function () {
        mock({
            '/index.liquid': '{% section "item" for colors as color with ".\n" as tail sep: ". "%}',
            '/item.liquid': '{{forloop.index}}{{sep}}{{color}}{{tail}}'
        })
        const html = await liquid.parseAndRender('index.liquid', { colors: ['red', 'green'] })
        expect(html).to.equal('1. red.\n2. green.\n')
    })
    it('should support for...as with other parameters (comma separated)', async function () {
        mock({
            '/index.liquid': '{% section "item" for colors as color, with ".\n" as tail, sep: ". "%}',
            '/item.liquid': '{{forloop.index}}{{sep}}{{color}}{{tail}}'
        })
        const html = await liquid.parseAndRender('index.liquid', { colors: ['red', 'green'] })
        expect(html).to.equal('1. red.\n2. green.\n')
    })
    it('should support render: with as Drop', async function () {
        class ColorDrop extends Drop {
            public valueOf(): string {
                return 'red!'
            }
        }
        mock({
            '/with.liquid': '{% section "color" with color %}',
            '/color.liquid': 'color:{{color}}'
        })
        const html = await liquid.parseAndRender('with.liquid', { color: new ColorDrop() })
        expect(html).to.equal('color:red!')
    })
    it('should support render: with passed as Drop', async function () {
        class ColorDrop extends Drop {
            public valueOf(): string {
                return 'red!'
            }
        }
        liquid.registerFilter('name', x => x.constructor.name)
        mock({
            '/with.liquid': '{% section "color" with color %}',
            '/color.liquid': '{{color | name}}'
        })
        const html = await liquid.parseAndRender('with.liquid', { color: new ColorDrop() })
        expect(html).to.equal('ColorDrop')
    })

    it('should support nested renders', async function () {
        mock({
            '/personInfo.liquid': 'This is a person {% section "card.liquid", person: person%}',
            '/card.liquid': '<p>{{person.firstName}} {{person.lastName}}<br/>{% section "address", address: person.address %}</p>',
            '/address.liquid': 'City: {{address.city}}'
        })
        const ctx = {
            person: {
                firstName: 'Joe',
                lastName: 'Shmoe',
                address: {
                    city: 'Dallas'
                }
            }
        }
        const html = await liquid.parseAndRender('personInfo.liquid', ctx)
        expect(html).to.equal('This is a person <p>Joe Shmoe<br/>City: Dallas</p>')
    })

    describe('static partial', function () {
        it('should support filename with extention', async function () {
            mock({
                '/parent.liquid': 'X{% section child.liquid color:"red" %}Y',
                '/child.liquid': 'child with {{color}}'
            })
            const staticLiquid = new Liquid({ dynamicPartials: false, root: '/' })
            const html = await staticLiquid.parseAndRender('parent.liquid')
            expect(html).to.equal('Xchild with redY')
        })

        it('should support parent paths', async function () {
            mock({
                '/parent.liquid': 'X{% section bar/./../foo/child.liquid %}Y',
                '/foo/child.liquid': 'child'
            })
            const staticLiquid = new Liquid({ dynamicPartials: false, root: '/' })
            const html = await staticLiquid.parseAndRender('parent.liquid')
            expect(html).to.equal('XchildY')
        })

        it('should support subpaths', async function () {
            mock({
                '/parent.liquid': 'X{% section foo/child.liquid %}Y',
                '/foo/child.liquid': 'child'
            })
            const staticLiquid = new Liquid({ dynamicPartials: false, root: '/' })
            const html = await staticLiquid.parseAndRender('parent.liquid')
            expect(html).to.equal('XchildY')
        })

        it('should support comma separated arguments', async function () {
            mock({
                '/parent.liquid': 'X{% section child.liquid, color:"red" %}Y',
                '/child.liquid': 'child with {{color}}'
            })
            const staticLiquid = new Liquid({ dynamicPartials: false, root: '/' })
            const html = await staticLiquid.parseAndRender('parent.liquid')
            expect(html).to.equal('Xchild with redY')
        })
    })
    describe('sync support', function () {
        it('should support quoted string', function () {
            mock({
                '/current.liquid': 'bar{% section "bar/foo.liquid" %}bar',
                '/bar/foo.liquid': 'foo'
            })
            const html = liquid.parseAndRenderSync('/current.liquid')
            expect(html).to.equal('barfoobar')
        })
        it('should support value string', function () {
            mock({
                '/current.liquid': 'bar{% section name %}bar',
                '/bar/foo.liquid': 'foo'
            })
            const html = liquid.parseAndRenderSync('/current.liquid', { name: '/bar/foo.liquid' })
            expect(html).to.equal('barfoobar')
        })
        it('should support template string', function () {
            mock({
                '/current.liquid': 'bar{% section "/bar/{{name}}" %}bar',
                '/bar/foo.liquid': 'foo'
            })
            const html = liquid.parseAndRenderSync('/current.liquid', { name: '/foo.liquid' })
            expect(html).to.equal('barfoobar')
        })
        it('should support with', function () {
            mock({
                '/with.liquid': '{% section "color" with "red", shape: "rect" %}',
                '/color.liquid': 'color:{{color}}, shape:{{shape}}'
            })
            const html = liquid.parseAndRenderSync('with.liquid')
            expect(html).to.equal('color:red, shape:rect')
        })
        it('should support filename with extention', function () {
            mock({
                '/parent.liquid': 'X{% section child.liquid color:"red" %}Y',
                '/child.liquid': 'child with {{color}}'
            })
            const staticLiquid = new Liquid({ dynamicPartials: false, root: '/' })
            const html = staticLiquid.parseAndRenderSync('parent.liquid')
            expect(html).to.equal('Xchild with redY')
        })
    })
})
