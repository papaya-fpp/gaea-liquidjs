import { Liquid } from '../../../../src/liquid'
import { expect, use } from 'chai'
import * as chaiAsPromised from 'chai-as-promised'

use(chaiAsPromised)

describe('tags/echo',  function () {
  const liquid = new Liquid()

  it('should support pure string ', async function () {
    const src = '{% echo "abcd" %}'
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal(' abcd ')
  })

  it('should support assign variable', async function () {
    const src = '{% assign str="bar" %}{% echo str %}'
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal(' bar ')
  })

  it('should support pure dom string ', async function () {
    const src = '{% echo "<div>abcd</div>" %}'
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal(' <div>abcd</div> ')
  })
  
  it(' should support template string ', async function () {
    const src = '{% assign str="bar" %}bar{% echo str %}bar'
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('bar bar bar')
  })

  it(' should echo empty string when not exist ', async function () {
    const src = '{% echo %}'
    const result = await liquid.parseAndRender(src)
    expect(result).to.equal('  ')
  })
  
})
