import { test } from '../../../stub/render'

describe('filters/money_with_currency', function () {
  describe('money_with_currency', function () {
    it('should support money_with_currency filter',
      () => test(
        '{{ 3214 | money_with_currency }}',
        '$ 3214 USD'
      )
    )
  })
})
