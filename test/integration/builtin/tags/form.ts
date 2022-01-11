import { Liquid } from '../../../../src/liquid'
import { expect, use } from 'chai'
import * as chaiAsPromised from 'chai-as-promised'

use(chaiAsPromised)

describe('tags/form',  function () {
  const liquid = new Liquid()

  it('should support pure form ', async function () {
    const src = `
      {%- form 'product' -%}
        <input type="hidden" name="id" >
      {%- endform -%}
    `
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('<form  enctype="multipart/form-data" method="post" accept-charset="UTF-8" type="product" action="/cart/add">\n    <input type="hidden" value="product" name="form_type">\n    <input type="hidden" name="utf8" value="✓">\n  <input type="hidden" name="id" ></form>')
  })

  it('should support id and class ', async function () {
    const src = `
      {%- form 'product', id: 'product-form-installment', class: 'installment caption-large' -%}
        <input type="hidden" name="id" >
      {%- endform -%}
    `
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('<form  enctype="multipart/form-data" method="post" accept-charset="UTF-8" type="product" action="/cart/add" id="product-form-installment" class="installmentcaption-large">\n    <input type="hidden" value="product" name="form_type">\n    <input type="hidden" name="utf8" value="✓">\n  <input type="hidden" name="id" ></form>')
  })

  it('should support content dom ', async function () {
    const src = `
      {%- form 'product', id: 'product-form-installment', class: 'installment caption-large' -%}
        <input type="hidden" name="id" >
        <div id="123">id123</div>
      {%- endform -%}
    `
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('<form  enctype="multipart/form-data" method="post" accept-charset="UTF-8" type="product" action="/cart/add" id="product-form-installment" class="installmentcaption-large">\n    <input type="hidden" value="product" name="form_type">\n    <input type="hidden" name="utf8" value="✓">\n  <input type="hidden" name="id" >\n        <div id="123">id123</div></form>')
  })

  it('should support custom attribute ', async function () {
    const src = `
      {%- form 'product', action: '/aaa' -%}
        <input type="hidden" name="id" >
      {%- endform -%}
    `
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('<form  enctype="multipart/form-data" method="post" accept-charset="UTF-8" type="product" action="/aaa">\n    <input type="hidden" value="product" name="form_type">\n    <input type="hidden" name="utf8" value="✓">\n  <input type="hidden" name="id" ></form>')
  })

  it('should support type not exist ', async function () {
    const src = `
      {%- form action: '/aaa', id: 'id123' -%}
        <input type="hidden" name="id" >
      {%- endform -%}
    `
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('<form  enctype="multipart/form-data" method="post" accept-charset="UTF-8" action="/aaa" id="id123">\n    <input type="hidden" value="" name="form_type">\n    <input type="hidden" name="utf8" value="✓">\n  <input type="hidden" name="id" ></form>')
  })

  it('should support attributes is empty ', async function () {
    const src = `
      {%- form  -%}
      {%- endform -%}
    `
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('<form  enctype="multipart/form-data" method="post" accept-charset="UTF-8">\n    <input type="hidden" value="" name="form_type">\n    <input type="hidden" name="utf8" value="✓">\n  </form>')
  })

  it('should support template string ', async function () {
    const src = `
    <div>
      <span class="aaa"></span>
      {%- form 'product' -%}
        <input type="hidden" name="id" >
      {%- endform -%}
      <div id="bbb">bbb</div>
    </div>
    `
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('\n    <div>\n      <span class="aaa"></span><form  enctype="multipart/form-data" method="post" accept-charset="UTF-8" type="product" action="/cart/add">\n    <input type="hidden" value="product" name="form_type">\n    <input type="hidden" name="utf8" value="✓">\n  <input type="hidden" name="id" ></form><div id="bbb">bbb</div>\n    </div>\n    ')
  })

  it('should support assign variable ', async function () {
    const src = `
    {% assign str="bar" %}
    {%- form 'product' -%}
      {{ str }}
    {%- endform -%}
    `
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('\n    <form  enctype="multipart/form-data" method="post" accept-charset="UTF-8" type="product" action="/cart/add">\n    <input type="hidden" value="product" name="form_type">\n    <input type="hidden" name="utf8" value="✓">\n  bar</form>')
  })


  
})
