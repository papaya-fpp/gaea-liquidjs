"use strict";
exports.__esModule = true;
var pickUniqueTpl = function (tplPath, rootData) {
    var data = rootData;
    var findDir = function (data, dirName) {
        // 遍历所有目录,取数据
        var result;
        for (var i = 0; i < data.length; i++) {
            if (data[i].type === 'folder') {
                if (data[i].name === dirName) {
                    result = data[i];
                    break;
                }
                else {
                    findDir(data[i].data, dirName);
                }
            }
        }
        return result;
    };
    var getFileValue = function (data, dirName) {
        var __data = data;
        var result;
        for (var i = 0; i < __data.length; i++) {
            if (__data[i].type === 'file') {
                if (__data[i].name === dirName ||
                    __data[i].name === dirName + ".liquid" ||
                    __data[i].name === dirName + ".json") {
                    // 'templates/home' 或者 'templates/home.liquid'
                    // console.log('---layout', __data[i], dirName)
                    result = __data[i].data;
                    break;
                }
            }
        }
        return result && result.value;
    };
    var result;
    var pathArr = tplPath.split('/');
    var findValue = function (pathArr) {
        var currentDir = data;
        var result;
        for (var i = 0; i < pathArr.length;) {
            // ['templates', 'home.liqud'] or ['home.liquid']
            if (i !== pathArr.length - 1) {
                // 如果不是最后一个,说明当前索引的是文件夹
                var dir = findDir(currentDir, pathArr[i]);
                if (dir) {
                    currentDir = dir.data;
                }
            }
            if (currentDir) {
                i++;
            }
            else {
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
    }
    else {
        if (!result) {
            // 可能是直接从sections或者snippets里面找
            var newPathArr = ['sections'].concat(pathArr);
            result = findValue(newPathArr);
        }
        if (!result) {
            // 可能是直接从sections或者snippets里面找
            var newPathArr = ['snippets'].concat(pathArr);
            result = findValue(newPathArr);
        }
    }
    return result;
};
var ThemeDataScope = /** @class */ (function () {
    function ThemeDataScope() {
        var themeData = localStorage.getItem('themeData');
        if (themeData) {
            this.rootData = JSON.parse(themeData);
        }
        else {
            throw new Error("没有获取到 themeData");
        }
    }
    ThemeDataScope.prototype.getTpl = function (tplPath) {
        // "layout/themes"
        var result = pickUniqueTpl(tplPath, this.rootData);
        return result;
    };
    return ThemeDataScope;
}());
exports["default"] = ThemeDataScope;
