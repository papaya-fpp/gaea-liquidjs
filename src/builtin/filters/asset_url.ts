import ThemeDataScope from '../../fs/ThemeDataScope'

const getPublicUrlOfAsset = (array, assetName) => {
  let rst = ''
  function deep (_array) {
    if (!_array) return
    for (let i = 0; i < _array.length; i++) {
      if (_array[i].type === 'file' && _array[i].name === assetName) {
        rst = _array[i].data.public_url
        break
      }

      if (_array[i].type === 'folder') {
        deep(_array[i].data)
      }
    }
  }
  deep(array)

  return rst
}

export function assetUrl (variable: string) {
  const domainFiles = (new ThemeDataScope()).rootData

  const assetsPublicUrl = getPublicUrlOfAsset(domainFiles, variable)

  return assetsPublicUrl
}
