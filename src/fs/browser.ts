import { last } from '../util/underscore'
import ThemeDataScope from './ThemeDataScope'

export function resolve (root: string, filepath: string, ext: string) {
  return filepath
}

export async function readFile (file: string): Promise<string> {
  const themeScope = new ThemeDataScope()

  if (themeScope.rootData) {
    const template = themeScope.getTpl(file)
    if (template !== undefined) {
      return Promise.resolve(template)
    }
  }
  return Promise.resolve(`没有你的模板: ${file}`)
}

export function readFileSync (url: string): string {
  return url
}

export async function exists (filepath: string) {
  return true
}

export function existsSync (filepath: string) {
  return true
}
