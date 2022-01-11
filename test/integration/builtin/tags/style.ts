import { Liquid } from '../../../../src/liquid'
import { expect, use } from 'chai'
import * as chaiAsPromised from 'chai-as-promised'

use(chaiAsPromised)

describe('tags/style',  function () {
  const liquid = new Liquid()

  it('should support empty content ', async function () {
    const src = `
    {% style %}
    {% endstyle %}
    `
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('\n    <style>\n    \n    \n    </style>\n    ')
  })

  it('should support style code ', async function () {
    const src = `
    {% style %}
      body {
        display: grid;
        grid-template-rows: auto auto 1fr auto;
        grid-template-columns: 100%;
        min-height: 100%;
        margin: 0;
        font-size: 1.5rem;
        letter-spacing: 0.06rem;
        line-height: calc(1 + 0.8 / var(--font-body-scale));
        font-family: var(--font-body-family);
        font-style: var(--font-body-style);
        font-weight: var(--font-body-weight);
      }
    {% endstyle %}
    `
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('\n    <style>\n    \n      body {\n        display: grid;\n        grid-template-rows: auto auto 1fr auto;\n        grid-template-columns: 100%;\n        min-height: 100%;\n        margin: 0;\n        font-size: 1.5rem;\n        letter-spacing: 0.06rem;\n        line-height: calc(1 + 0.8 / var(--font-body-scale));\n        font-family: var(--font-body-family);\n        font-style: var(--font-body-style);\n        font-weight: var(--font-body-weight);\n      }\n    \n    </style>\n    ')
  })

  it('should support assgn variable ', async function () {
    const src = `
    {% assign str="red" %}
    {% style %}
      body{
        color: {{ str }};
      }
    {% endstyle %}
    `
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('\n    \n    <style>\n    \n      body{\n        color: red;\n      }\n    \n    </style>\n    ')
  })



  
})
