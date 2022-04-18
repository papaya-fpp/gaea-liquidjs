import { test } from '../../../stub/render'
import { mockThemeDataInLocalstorage } from '../../../stub/mockbrowser'
import * as fs from '../../../../src/fs/browser'
import { expect, use } from 'chai'

import { Liquid } from '../../../../src/liquid'

describe('filters/asset_url', function () {
    let liquid: Liquid
    before(function () {
        liquid = new Liquid({
            fs
        })
    })
    describe('color_modify', function () {
        
        it('转换alpha', async function () {
            const settings= {
                color: '#ff00ff'
            }

            const src = `color1: {{ settings.color | color_modify: 'alpha', 0.23 }}`

            const result = await liquid.parseAndRender(src, {settings})
            console.log(result)
            expect(result).to.equal('color1: rgba(255, 0, 255,0.23)')
        })

    })
})