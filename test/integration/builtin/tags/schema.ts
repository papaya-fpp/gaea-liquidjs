import { Liquid } from '../../../../src/liquid'
import { expect, use } from 'chai'
import * as chaiAsPromised from 'chai-as-promised'

use(chaiAsPromised)

describe('tags/schema',  function () {
  const liquid = new Liquid()

  it('should support empty content ', async function () {
    const src = `{% schema %}{% endschema %}`
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('')
  })

  it('should support not empty ', async function () {
    const src = `{% schema %}
    {
      "name": "name",
      "max_blocks": 12,
      "blocks": []
    }
    {% endschema %}`
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('')
  })
})
