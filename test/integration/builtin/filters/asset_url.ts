import { test } from '../../../stub/render'
import { mockThemeDataInLocalstorage } from '../../../stub/mockbrowser'
import * as fs from '../../../../src/fs/browser'
import { Liquid } from '../../../../src/liquid'

describe('filters/asset_url', function () {
    let liquid: Liquid
    before(function () {
        liquid = new Liquid({
            fs
        })
    })
    describe('render url of js', function () {
        mockThemeDataInLocalstorage({
            assets: [{
                name: 'demose.js',
                type: 'file',
                data: {
                    value: '',
                    public_url: "http://cdn.fpp.com/assets/demose.js"
                },
            }]
        })

        it('should render asset_url in uri pattern',
            () => test('{{ "demose.js" | asset_url }}', `http://cdn.fpp.com/assets/demose.js`))
    })
})