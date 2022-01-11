import { FilterImpl } from '../../template/filter/filter-impl'
import { THEME_DIR } from '../../types'

import { isPlainObject, isArray, isString } from 'lodash'
import ThemeDataScope from '../../fs/ThemeDataScope'

const quoted = /^'[^']*'|"[^"]*"$/

let currentLanguageJsonObj = {}

function getI18nLabel (nameString: string, currentLanguageJsonObj: object, args: Array<any>) {
  // let nameString = 't:sections.image-with-text.settings.image.label'
  let node: object | string = currentLanguageJsonObj

  const labelTreeList = nameString.split('.')

  for (let i = 0; i < labelTreeList.length; i++) {
    const currentNode = labelTreeList[i]
    if (node && isPlainObject(node)) {
      node = node[currentNode]
    }
  }

  /**
     * 如果使用该 filter 时传入了两个参数，则认为当前翻译中有变量，需要进行变量替换
     */
  if (isArray(args) && args.length === 2 && isString(node)) {
    const [variableKey, variableValue] = args
    const regexp = new RegExp(`{{\\s?${variableKey}\\s?}}`, 'g')
    node = node.replace(regexp, variableValue)
  }

  return node
}

export function t (this: FilterImpl, variable: string, args: Array<any>) {
  if (quoted.test(variable)) {
    return variable
  }
  const language = 'zh-CN'
  const domainFiles = (new ThemeDataScope()).rootData
  const locales = domainFiles.filter((item: THEME_DIR) => item.name === 'locales')[0].data
  let currentLanguageJson: any
  try {
    currentLanguageJson = (locales as Array<THEME_DIR>).filter((item: THEME_DIR) => item.name === `${language}.json`)[0].data
  } catch (error) {
    console.log(`该模板C端没有适配该语言: ${language}, 使用默认语言包 en.default.json`)
    currentLanguageJson = (locales as Array<THEME_DIR>).filter((item: THEME_DIR) => item.name === `en.default.json`)[0].data
  }

  currentLanguageJsonObj = JSON.parse(currentLanguageJson.value)

  const i18nLabel = getI18nLabel(variable, currentLanguageJsonObj, args)

  return i18nLabel
}
