import { Liquid } from '../../../../src/liquid'
import { expect, use } from 'chai'
import * as chaiAsPromised from 'chai-as-promised'

use(chaiAsPromised)


const testData = {
  collection: {
    p1: {
      products: [
        { name: '产品1' },
        { name: '产品2' },
        { name: '产品3' },
        { name: '产品4' },
        { name: '产品5' },
      ],
    },

    users: [
      { name: 'user1' }
    ]
  },
  section: {
    settings: {
      products_number: 2
    }
  }
}


describe('tags/paginate',  async function () {
  const liquid = new Liquid()

  it('it should support by ', async function () {
    const src = `
    {%- paginate collection.p1.products by section.settings.products_number -%}
      {%- for product in collection.p1.products -%}
        {{product | json}}
      {%- endfor -%}
    {%- endpaginate -%}
    `
    const result = await liquid.parseAndRender(src, {...testData})
    expect(result).to.equal('{"name":"产品1"}{"name":"产品2"}')
  })



  // return

  // it('should support empty content ', async function () {
  //   const src = `{% paginate %}{% endpaginate %}`
  //   const result = await liquid.parseAndRender(src)
  //   expect(result).to.equal('')
  // })

  // it('should support not empty ', async function () {
  //   const src = `{% paginate %}
  //   {
  //     "name": "name",
  //     "max_blocks": 12,
  //     "blocks": []
  //   }
  //   {% endpaginate %}`
  //   const result = await liquid.parseAndRender(src)
  //   expect(result).to.equal('')
  // })
})
