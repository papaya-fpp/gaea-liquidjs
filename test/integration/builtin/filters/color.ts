import { test } from '../../../stub/render'

describe('filters/color', function () {
  describe('color', function () {
    it('should support color filter',
      () => {
        const colorValue = {r: 1, g: 2, b: 3, a: 0.4};
        return test('{{ colorValue | color}}', { colorValue },'rgba(1,2,3,0.4)')
      }
    )
  })
})
