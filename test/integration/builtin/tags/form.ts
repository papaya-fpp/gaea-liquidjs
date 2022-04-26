import { Liquid } from '../../../../src/liquid'
import { expect, use } from 'chai'
import * as chaiAsPromised from 'chai-as-promised'

use(chaiAsPromised)


const user = {
  name: "王二",
  age: "40",
  id: 20220410
}

describe('tags/form',  function () {
  const liquid = new Liquid()

  it('应该支持: class传入两个类名', async function () {
    const product_for_id = "999999"

    const src = `
      {%- form 'product', id: product_for_id, uid: user.id ,class:'class1 class2' -%}
        <input type="hidden" >
      {%- endform -%}
    `

    const result = await liquid.parseAndRender(src, { user, product_for_id })
    expect(result).to.equal('<form  enctype="multipart/form-data" method="post" accept-charset="UTF-8" type="product" action="/cart/add" id="999999" uid="20220410" class="class1 class2">\n    <input type="hidden" value="product" name="form_type">\n    <input type="hidden" name="utf8" value="✓">\n  <input type="hidden" ></form>')
  })

  it('应该支持: 可以把外部变量 赋值 给 form标签 的自定义属性', async function () {
    const product_for_id="999999"

    const src = `
      {%- form 'product', id: product_for_id, uid: user.id ,class: 'self-class' -%}
        <input type="hidden" >
      {%- endform -%}
    `

    const result = await liquid.parseAndRender(src, { user, product_for_id })
    expect(result).to.equal('<form  enctype="multipart/form-data" method="post" accept-charset="UTF-8" type="product" action="/cart/add" id="999999" uid="20220410" class="self-class">\n    <input type="hidden" value="product" name="form_type">\n    <input type="hidden" name="utf8" value="✓">\n  <input type="hidden" ></form>')
  })


  it('should support pure form ', async function () {
    const src = `
      {%- form 'product' -%}
        <input type="hidden" name="id" >
      {%- endform -%}
    `

    const result = await liquid.parseAndRender(src, {user})

    expect(result).to.equal('<form  enctype="multipart/form-data" method="post" accept-charset="UTF-8" type="product" action="/cart/add">\n    <input type="hidden" value="product" name="form_type">\n    <input type="hidden" name="utf8" value="✓">\n  <input type="hidden" name="id" ></form>')
  })


  it('should support id and class, [只] 传入hash参数 ', async function () {
    const src = `
      {%- form 'product', id: 'product-form-installment', class: 'installment caption-large' -%}
        <input type="hidden" name="id" >
      {%- endform -%}
    `
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('<form  enctype="multipart/form-data" method="post" accept-charset="UTF-8" type="product" action="/cart/add" id="product-form-installment" class="installment caption-large">\n    <input type="hidden" value="product" name="form_type">\n    <input type="hidden" name="utf8" value="✓">\n  <input type="hidden" name="id" ></form>')
  })

  it('should support content dom ', async function () {
    const src = `
      {%- form 'product', id: 'product-form-installment', class: 'installment caption-large' -%}
        <input type="hidden" name="id" >
        <div id="123">id123</div>
      {%- endform -%}
    `
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('<form  enctype="multipart/form-data" method="post" accept-charset="UTF-8" type="product" action="/cart/add" id="product-form-installment" class="installment caption-large">\n    <input type="hidden" value="product" name="form_type">\n    <input type="hidden" name="utf8" value="✓">\n  <input type="hidden" name="id" >\n        <div id="123">id123</div></form>')
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



  it('user 应该被赋值给内部scope的form', async function () {
    const src = `
      {%- form 'product', user-%}
        <input type="hidden" name="{{form.name}}"  id={{form.id}}>
      {%- endform -%}
    `

    const result = await liquid.parseAndRender(src, { user })

    expect(result).to.equal('<form  enctype="multipart/form-data" method="post" accept-charset="UTF-8" type="product" action="/cart/add">\n    <input type="hidden" value="product" name="form_type">\n    <input type="hidden" name="utf8" value="✓">\n  <input type="hidden" name="王二"  id=20220410></form>')
  })
  


  
})
