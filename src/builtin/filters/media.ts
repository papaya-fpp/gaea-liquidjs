export function imageUrl (v: string, ...arg: Array<[]>) {
  arg.forEach((item: Array<number|string>) => {
    const existQuery = v.indexOf('?') > -1
    const prefix = existQuery ? '&' : '?'
    v += (prefix + item[0] + '=' + item[1])
  })
  return v
}
