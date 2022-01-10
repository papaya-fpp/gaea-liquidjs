import { test } from '../../../stub/render'

describe('filters/media', function () {
  describe('image_url', function () {
    it('should format image url with given params',
      () => test(
        '{{ "https://cdn.shopify.com/s/files/1/1183/1048/products/boat-shoes.jpeg" | image_url: with: 500, height: 500 }}',
        'https://cdn.shopify.com/s/files/1/1183/1048/products/boat-shoes.jpeg?with=500&height=500'
      ))
  })
})
