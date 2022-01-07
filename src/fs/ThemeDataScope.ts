
interface DOMAIN_THEME_ROOT_DATA {
  [key: string]: THEME_DIR
}

interface THEME_DIR {
  type: 'folder' | 'file';
  name: string;
  data: Array<THEME_DIR>;
}

interface THEME__FILE__SCHEMA {
  id: string;
  public_url: string;
  value: string;
  checksum: string;
}

const pickUniqueTpl = (tplPath: string, rootData: DOMAIN_THEME_ROOT_DATA): string => {
  const data = rootData;

  const findDir = (data: Array<THEME_DIR>, dirName: string): THEME_DIR => {
    // 遍历所有目录,取数据
    let result: THEME_DIR;

    for (let i = 0; i < data.length; i++) {
      if (data[i].type === 'folder') {
        if (data[i].name === dirName) {
          result = data[i];
          break;
        } else {
          findDir(data[i].data, dirName);
        }
      }
    }
    return result;
  };

  const getFileValue = (data: Array<THEME_DIR>, dirName: string) => {
    const __data = data;
    let result: THEME__FILE__SCHEMA;

    for (let i = 0; i < __data.length; i++) {
      if (__data[i].type === 'file') {
        if (
          __data[i].name === dirName ||
          __data[i].name === `${dirName}.liquid` ||
          __data[i].name === `${dirName}.json`
        ) {
          // 'templates/home' 或者 'templates/home.liquid'
          // console.log('---layout', __data[i], dirName)
          result = <THEME__FILE__SCHEMA>(<unknown>__data[i].data);
          break;
        }
      }
    }
    return result && result.value;
  };

  let result;

  const pathArr = tplPath.split('/');

  const findValue = (pathArr) => {
    let currentDir = data;
    let result;

    for (let i = 0; i < pathArr.length; ) {
      // ['templates', 'home.liqud'] or ['home.liquid']

      if (i !== pathArr.length - 1) {
        // 如果不是最后一个,说明当前索引的是文件夹
        const dir = findDir(currentDir, pathArr[i]);
        if (dir) {
          currentDir = dir.data;
        }
      }
      if (currentDir) {
        i++;
      } else {
        return;
      }
    }

    // console.log(currentDir, '---end')

    if (currentDir) {
      result = getFileValue(currentDir, pathArr[pathArr.length - 1]);
    }
    return result;
  };

  if (pathArr.length > 1) {
    result = findValue(pathArr);
  } else {
    if (!result) {
      // 可能是直接从sections或者snippets里面找
      const newPathArr = ['sections'].concat(pathArr);
      result = findValue(newPathArr);
    }

    if (!result) {
      // 可能是直接从sections或者snippets里面找
      const newPathArr = ['snippets'].concat(pathArr);
      result = findValue(newPathArr);
    }
  }

  return result;
};

class ThemeDataScope {
  rootData: DOMAIN_THEME_ROOT_DATA;

  constructor() {
    let themeData = localStorage.getItem('themeData')
    if (themeData) {
      this.rootData = JSON.parse(themeData)
    } else {
      throw new Error("没有获取到 themeData");
    }
  }
  getTpl(tplPath: string): string {
    // "layout/themes"
    const result = pickUniqueTpl(tplPath, this.rootData);
    return <string>(<unknown>result);
  }
}

export default ThemeDataScope;
