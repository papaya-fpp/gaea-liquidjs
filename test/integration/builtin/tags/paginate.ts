import { Liquid } from '../../../../src/liquid'
import { expect, use } from 'chai'
import * as chaiAsPromised from 'chai-as-promised'

use(chaiAsPromised)

describe('tags/paginate',  function () {
  const liquid = new Liquid()

  it('should support empty content ', async function () {
    const src = `{% paginate %}{% endpaginate %}`
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('')
  })

  it('should support not empty ', async function () {
    const src = `{% paginate %}
    {
      "name": "name",
      "max_blocks": 12,
      "blocks": []
    }
    {% endpaginate %}`
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('')
  })
})
