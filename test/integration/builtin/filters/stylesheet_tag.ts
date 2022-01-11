import { test } from '../../../stub/render'

describe('filters/stylesheet_tag', function () {
    describe('stylesheet_tag', function () {
        it('should render stylesheet in link+href +',
            () => test('{{ "funpinpin.com/a.js" | stylesheet_tag }}', `<link href="funpinpin.com/a.js" rel="stylesheet" type="text/css" media="all">`))
    })
})