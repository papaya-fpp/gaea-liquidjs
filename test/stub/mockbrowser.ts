import { THEME_DIR } from "../../src/types"

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


const settingsData = {
    "current": {
        "sections": [
            {
                "type": "header",
                "settings": {
                    "color_scheme": "background-1",
                    "logo_width": 100,
                    "logo_position": "middle-left",
                    "menu": 1639979074908,
                    "show_line_separator": true,
                    "enable_sticky_header": true
                }
            },
            {
                "type": "footer",
                "settings": {
                    "color_scheme": "background-1",
                    "newsletter_enable": true,
                    "newsletter_heading": "Subscribetoouremails",
                    "enable_country_selector": true,
                    "enable_language_selector": true,
                    "payment_enable": true
                }
            }
        ],
        "colors_solid_button_labels": "#FFFFFF",
    }
}

export function mockThemeDataInLocalstorage(props:{
    sections: Array<THEME_DIR>
}) {
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
        },
        {
            name: 'sections',
            type: 'folder',
            data: props && props.sections
        },
        {
            name: 'config',
            type: 'folder',
            data: [
                {
                    name: 'settings_data.json',
                    type: 'file',
                    data: {
                        value: JSON.stringify(settingsData)
                    }
                }
            ]
        },
        
    ]


    global.window.localStorage.setItem('themeData', JSON.stringify(themeData))

}
