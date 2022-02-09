export const transformThemeConfig = (themeConfig) => {
  if (!themeConfig) return {}

  const config = JSON.parse(themeConfig)

  // 将blocks 改为数组
  Object.keys(config.current.sections).forEach((key) => {
    const item = config.current.sections[key]
    const blocks = []
    if (item.blocks) {
      Object.keys(item.blocks).forEach((k) => {
        blocks.push(item.blocks[k])
      })
    }
    item.blocks = blocks
  })
  return config
}
