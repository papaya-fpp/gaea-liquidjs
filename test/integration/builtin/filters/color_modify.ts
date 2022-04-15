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
            const product_for_id = "999999"

            const src = `
        
            color: {{ '#7ab55c' | color_modify: 'red', 255 }} 
        
        `

            const result = await liquid.parseAndRender(src)
            console.log(result)
            // expect(result).to.equal('<form  enctype="multipart/form-data" method="post" accept-charset="UTF-8" type="product" action="/cart/add" id="999999" uid="20220410" class="self-class">\n    <input type="hidden" value="product" name="form_type">\n    <input type="hidden" name="utf8" value="✓">\n  <input type="hidden" ></form>')
        })

    })
})