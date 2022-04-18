export function colorModify (variable, ...args) {
  let color = variable || 'rgba(255, 255, 255, 1)'
  const reg = /^#([0-9a-fA-f]{6}|[0-9a-fA-f]{3})$/
  // 如果是16进制颜色
  if (variable && reg.test(variable)) {
    if (variable.length === 4) {
      let colorNew = '#'
      for (let i = 1; i < 4; i += 1) {
        colorNew += variable.slice(i, i + 1).concat(variable.slice(i, i + 1))
      }
      variable = colorNew
    }
    // 处理六位的颜色值
    const colorChange = []
    for (let i = 1; i < 7; i += 2) {
      colorChange.push(parseInt('0x' + variable.slice(i, i + 2)))
    }
    const rgba = {
      red: colorChange[0],
      green: colorChange[1],
      blue: colorChange[2],
      alpha: 1
    }
    color = `rgba(${rgba.red}, ${rgba.green}, ${rgba.blue}, ${rgba.alpha})`
  }
  const rgb_str = color.match(/rgba?\((\d+\,\s?\d+\,\s?\d+\,?\s?\d*)\)/)
  if (rgb_str) {
    if (args && args[0] == 'alpha' && args[1]) {
      color = color.replace(/(rgb)a?(\(\d+\,\s?\d+\,\s?\d+)\,?\s?\d*(\))/, function ($0, $1, $2, $3) {
        return $1 + 'a' + $2 + `,${args[1]}` + $3
      })
    }
  }
  return color
}
