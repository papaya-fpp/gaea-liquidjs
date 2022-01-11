import { Liquid } from '../../../../src/liquid'
import { expect, use } from 'chai'
import * as chaiAsPromised from 'chai-as-promised'

use(chaiAsPromised)

describe('tags/javascript',  function () {
  const liquid = new Liquid()

  it('should support empty content ', async function () {
    const src = `
    {% javascript %}
    {% endjavascript %}
    `
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('\n    <script>\n        window.addEventListener(\'load\',function(){\n    })\n    </script>\n    ')
  })

  it('should support javascript code ', async function () {
    const src = `
    {% javascript %}
      console.log(123)
    {% endjavascript %}
    `
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('\n    <script>\n        window.addEventListener(\'load\',function(){\n      console.log(123)\n    })\n    </script>\n    ')
  })

  it('should support assgn variable ', async function () {
    const src = `
    {% assign str="bar" %}
    {% javascript %}
      console.log({{str}})
    {% endjavascript %}
    `
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('\n    \n    <script>\n        window.addEventListener(\'load\',function(){\n      console.log(bar)\n    })\n    </script>\n    ')
  })



  
})
