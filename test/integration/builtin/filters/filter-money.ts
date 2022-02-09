import { test } from '../../../stub/render'

describe('filters/filter-money', function () {
  describe('filter-money', function () {
    it('should support money filter',
      () => test(
        '{{ 322 | money }}',
        '$ 322'
      )
    )
  })
})
