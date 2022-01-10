import { Liquid } from '../../../../src/liquid'
import { expect, use } from 'chai'
import { THEME_DIR } from '../../../../src/types'
import * as chaiAsPromised from 'chai-as-promised'

use(chaiAsPromised)

describe('/tags/t', function () {
  const liquid = new Liquid()
  const lsBulk = {}

  global.window = {
    localStorage: {
      setItem: function (key: string, v: string) {
        lsBulk[key] = v
      },
      getItem: function (key: string) {
        return lsBulk[key]
      }
    }
  }

  const languageStrcture = {
    'general': {
      'password_page': {
        'login_form_heading': '使用密码进入商店：'
      }
    },
    'sections': {
      'header': {
        'announcement': '公告',
        'menu': '菜单',
        'cart_count': {
          'one': '{{ count }} 件产品',
          'other': '{{ count }} 件产品'
        }
      }
    }
  }

  const themeData: Array<THEME_DIR> = [
    {
      name: 'locales',
      type: 'folder',
      data: [
        {
          name: 'zh-CN.json',
          type: 'file',
          data: {
            value: JSON.stringify(languageStrcture)
          }
        }
      ]
    }
  ]

  global.window.localStorage.setItem('themeData', JSON.stringify(themeData))

  it('should render the variable in zh-CN', async function () {
    const src = "{{ 'sections.header.announcement' | t}}"
    const html = await liquid.parseAndRender(src)
    return expect(html).to.equal('公告')
  })
})
