import { Liquid } from '../../../../src/liquid'
import { mock } from '../../../stub/mockfs'
import { expect, use } from 'chai'
import * as chaiAsPromised from 'chai-as-promised'

use(chaiAsPromised)

describe('tags/liquid',  function () {
  const liquid = new Liquid()


  it('should support for in liquid ', async function () {
    const src = `
    {% liquid
      for item in arr
          echo item
      endfor
     %}
    `
    const result = await liquid.parseAndRender(src, {arr: [1,2,3,4]})
    expect(result).to.equal('\n     \n 1  \n \n 2  \n \n 3  \n \n 4  \n\n    ')
  })

  it('should support empty ', async function () {
    const src = `{%- liquid-%}`
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('')
  })

  it('should support assgin ', async function () {
    const src = `{%- assign count = 1 -%}
    {%- liquid
      if count == 1
        assign newCount = 2
      else
        assign newCount = 3
      endif
    -%}
    <span>{{newCount}}</span>`
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal(' \n \n<span>2</span>')
  })

  it('should support assgin ', async function () {
    const src = `{%- assign count = 1 -%}
    {%- liquid
      if count == 1
        assign newCount = 2
      else
        assign newCount = 3
      endif
    -%}
    <span>{{newCount}}</span>`
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal(' \n \n<span>2</span>')
  })

  it('should support render ', async function () {
    mock({ 'page1.html': 'page1' })
    const src = `
      {%- liquid
        render 'page1.html'
      -%}
    `
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('page1')
  })

  it('should support for outside liquid ', async function () {
    const src = `
    {%- for item in (1..3) -%}
      {% liquid
        if forloop.first
          echo item
        elsif forloop.last
          echo item
        endif
      %}
    {%- endfor -%}
    `
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal(' \n 1  \n \n 3  \n')
  })

  
})
