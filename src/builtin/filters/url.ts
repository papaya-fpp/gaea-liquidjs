export const urlDecode = (x: string) => x.split('+').map(decodeURIComponent).join(' ')
export const urlEncode = (x: string) => x.split(' ').map(encodeURIComponent).join('+')
export const urlEscape = (x: string) => encodeURIComponent(x)
