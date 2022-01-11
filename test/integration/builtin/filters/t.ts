import { Liquid } from '../../../../src/liquid'
import { expect, use } from 'chai'
import { THEME_DIR } from '../../../../src/types'
import * as chaiAsPromised from 'chai-as-promised'
import { mockThemeDataInLocalstorage } from '../../../stub/mockbrowser'
use(chaiAsPromised)

describe('/tags/t', function () {
  const liquid = new Liquid()
  before(function () {
    mockThemeDataInLocalstorage()
  })
  it('should render the variable in zh-CN', async function () {
    const src = "{{ 'sections.header.announcement' | t}}"
    const html = await liquid.parseAndRender(src)
    return expect(html).to.equal('公告')
  })
})
