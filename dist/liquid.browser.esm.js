/*
 * liquidjs@9.25.1, https://github.com/harttle/liquidjs
 * (c) 2016-2022 harttle
 * Released under the MIT License.
 */
class Drop {
    valueOf() {
        return undefined;
    }
    themeConfig() {
        return undefined;
    }
    liquidMethodMissing(key) {
        return undefined;
    }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

const toStr = Object.prototype.toString;
const toLowerCase = String.prototype.toLowerCase;
/*
 * Checks if value is classified as a String primitive or object.
 * @param {any} value The value to check.
 * @return {Boolean} Returns true if value is a string, else false.
 */
function isString(value) {
    return toStr.call(value) === '[object String]';
}
function isFunction(value) {
    return typeof value === 'function';
}
function stringify(value) {
    value = toValue(value);
    return isNil(value) ? '' : String(value);
}
function toValue(value) {
    return value instanceof Drop ? value.valueOf() : value;
}
function isNumber(value) {
    return typeof value === 'number';
}
function toLiquid(value) {
    if (value && isFunction(value.toLiquid))
        return toLiquid(value.toLiquid());
    return value;
}
function isNil(value) {
    return value === null || value === undefined;
}
function isArray(value) {
    // be compatible with IE 8
    return toStr.call(value) === '[object Array]';
}
/*
 * Iterates over own enumerable string keyed properties of an object and invokes iteratee for each property.
 * The iteratee is invoked with three arguments: (value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning false.
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @return {Object} Returns object.
 */
function forOwn(object, iteratee) {
    object = object || {};
    for (const k in object) {
        if (object.hasOwnProperty(k)) {
            if (iteratee(object[k], k, object) === false)
                break;
        }
    }
    return object;
}
function last(arr) {
    return arr[arr.length - 1];
}
/*
 * Checks if value is the language type of Object.
 * (e.g. arrays, functions, objects, regexes, new Number(0), and new String(''))
 * @param {any} value The value to check.
 * @return {Boolean} Returns true if value is an object, else false.
 */
function isObject(value) {
    const type = typeof value;
    return value !== null && (type === 'object' || type === 'function');
}
function range(start, stop, step = 1) {
    const arr = [];
    for (let i = start; i < stop; i += step) {
        arr.push(i);
    }
    return arr;
}
function padStart(str, length, ch = ' ') {
    return pad(str, length, ch, (str, ch) => ch + str);
}
function padEnd(str, length, ch = ' ') {
    return pad(str, length, ch, (str, ch) => str + ch);
}
function pad(str, length, ch, add) {
    str = String(str);
    let n = length - str.length;
    while (n-- > 0)
        str = add(str, ch);
    return str;
}
function identify(val) {
    return val;
}
function snakeCase(str) {
    return str.replace(/(\w?)([A-Z])/g, (_, a, b) => (a ? a + '_' : '') + b.toLowerCase());
}
function changeCase(str) {
    const hasLowerCase = [...str].some(ch => ch >= 'a' && ch <= 'z');
    return hasLowerCase ? str.toUpperCase() : str.toLowerCase();
}
function ellipsis(str, N) {
    return str.length > N ? str.substr(0, N - 3) + '...' : str;
}
function isPlainObject(value) {
    return isObject(value) && !isArray(value) && !isFunction(value);
}
// compare string in case-insensitive way, undefined values to the tail
function caseInsensitiveCompare(a, b) {
    if (a == null && b == null)
        return 0;
    if (a == null)
        return 1;
    if (b == null)
        return -1;
    a = toLowerCase.call(a);
    b = toLowerCase.call(b);
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
}
// 将json合并为字符串
function joinJsonToStr(json) {
    let str = '';
    Object.keys(json).forEach(key => {
        const val = `"${json[key]}"`;
        // 过滤重复 '" | '"
        const regVal = val.replace(/"'|'"/g, '"');
        str += ` ${key}=${regVal}`;
    });
    return str;
}
// 获取值，如果不饱和'/" ，按照变量处理，返回 {{ value }}
function getLiquidValue(str) {
    let value = str;
    if (!/['"]/g.test(str)) {
        value = `{{ ${str} }}`;
    }
    return value;
}

class Node {
    constructor(key, value, next, prev) {
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}
class LRU {
    constructor(limit, size = 0) {
        this.limit = limit;
        this.size = size;
        this.cache = {};
        this.head = new Node('HEAD', null, null, null);
        this.tail = new Node('TAIL', null, null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    write(key, value) {
        if (this.cache[key]) {
            this.cache[key].value = value;
        }
        else {
            const node = new Node(key, value, this.head.next, this.head);
            this.head.next.prev = node;
            this.head.next = node;
            this.cache[key] = node;
            this.size++;
            this.ensureLimit();
        }
    }
    read(key) {
        if (!this.cache[key])
            return;
        const { value } = this.cache[key];
        this.remove(key);
        this.write(key, value);
        return value;
    }
    remove(key) {
        const node = this.cache[key];
        node.prev.next = node.next;
        node.next.prev = node.prev;
        delete this.cache[key];
        this.size--;
    }
    clear() {
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
        this.cache = {};
    }
    ensureLimit() {
        if (this.size > this.limit)
            this.remove(this.tail.prev.key);
    }
}

/* eslint-disable */
const pickUniqueTpl = (tplPath, rootData) => {
    const data = rootData;
    const findDir = (data, dirName) => {
        // 遍历所有目录,取数据
        let result = {
            type: 'folder',
            name: '',
            data: []
        };
        for (let i = 0; i < data.length; i++) {
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
    const getFileValue = (data, dirName) => {
        const __data = data;
        let result = {};
        for (let i = 0; i < __data.length; i++) {
            if (__data[i].type === 'file') {
                if (__data[i].name === dirName ||
                    __data[i].name === `${dirName}.liquid` ||
                    __data[i].name === `${dirName}.json`) {
                    // 'templates/home' 或者 'templates/home.liquid'
                    // console.log('---layout', __data[i], dirName)
                    result = __data[i].data;
                    break;
                }
            }
        }
        return result && result.value;
    };
    let result = {};
    const pathArr = tplPath.split('/');
    const findValue = (pathArr) => {
        let currentDir = data;
        let result;
        for (let i = 0; i < pathArr.length;) {
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
    constructor() {
        let themeData = window.localStorage.getItem('themeData');
        if (themeData) {
            this.rootData = JSON.parse(themeData);
        }
        else {
            throw new Error("没有获取到 themeData");
        }
    }
    getTpl(tplPath) {
        // "layout/themes"
        const result = pickUniqueTpl(tplPath, this.rootData);
        return result;
    }
}

function resolve(root, filepath, ext) {
    return filepath;
}
async function readFile(file) {
    const themeScope = new ThemeDataScope();
    if (themeScope.rootData) {
        const template = themeScope.getTpl(file);
        if (template !== undefined) {
            return Promise.resolve(template);
        }
    }
    return Promise.resolve(`没有你的模板: ${file}`);
}
function readFileSync(url) {
    return url;
}
async function exists(filepath) {
    return true;
}
function existsSync(filepath) {
    return true;
}

var fs = /*#__PURE__*/Object.freeze({
  resolve: resolve,
  readFile: readFile,
  readFileSync: readFileSync,
  exists: exists,
  existsSync: existsSync
});

function isComparable(arg) {
    return arg && isFunction(arg.equals);
}

function isTruthy(val, ctx) {
    return !isFalsy(val, ctx);
}
function isFalsy(val, ctx) {
    if (ctx.opts.jsTruthy) {
        return !val;
    }
    else {
        return val === false || undefined === val || val === null;
    }
}

const defaultOperators = {
    '==': (l, r) => {
        if (isComparable(l))
            return l.equals(r);
        if (isComparable(r))
            return r.equals(l);
        return l === r;
    },
    '!=': (l, r) => {
        if (isComparable(l))
            return !l.equals(r);
        if (isComparable(r))
            return !r.equals(l);
        return l !== r;
    },
    '>': (l, r) => {
        if (isComparable(l))
            return l.gt(r);
        if (isComparable(r))
            return r.lt(l);
        return l > r;
    },
    '<': (l, r) => {
        if (isComparable(l))
            return l.lt(r);
        if (isComparable(r))
            return r.gt(l);
        return l < r;
    },
    '>=': (l, r) => {
        if (isComparable(l))
            return l.geq(r);
        if (isComparable(r))
            return r.leq(l);
        return l >= r;
    },
    '<=': (l, r) => {
        if (isComparable(l))
            return l.leq(r);
        if (isComparable(r))
            return r.geq(l);
        return l <= r;
    },
    'contains': (l, r) => {
        return l && isFunction(l.indexOf) ? l.indexOf(r) > -1 : false;
    },
    'and': (l, r, ctx) => isTruthy(l, ctx) && isTruthy(r, ctx),
    'or': (l, r, ctx) => isTruthy(l, ctx) || isTruthy(r, ctx)
};

// **DO NOT CHANGE THIS FILE**
//
// This file is generated by bin/character-gen.js
// bitmask character types to boost performance
const TYPES = [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 4, 4, 4, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 8, 0, 0, 0, 0, 8, 0, 0, 0, 64, 0, 65, 0, 0, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 0, 0, 2, 2, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
const IDENTIFIER = 1;
const BLANK = 4;
const QUOTE = 8;
const INLINE_BLANK = 16;
const NUMBER = 32;
const SIGN = 64;
TYPES[160] = TYPES[5760] = TYPES[6158] = TYPES[8192] = TYPES[8193] = TYPES[8194] = TYPES[8195] = TYPES[8196] = TYPES[8197] = TYPES[8198] = TYPES[8199] = TYPES[8200] = TYPES[8201] = TYPES[8202] = TYPES[8232] = TYPES[8233] = TYPES[8239] = TYPES[8287] = TYPES[12288] = BLANK;

function createTrie(operators) {
    const trie = {};
    for (const [name, handler] of Object.entries(operators)) {
        let node = trie;
        for (let i = 0; i < name.length; i++) {
            const c = name[i];
            node[c] = node[c] || {};
            if (i === name.length - 1 && (TYPES[name.charCodeAt(i)] & IDENTIFIER)) {
                node[c].needBoundary = true;
            }
            node = node[c];
        }
        node.handler = handler;
        node.end = true;
    }
    return trie;
}

const defaultOptions = {
    root: ['.'],
    cache: undefined,
    extname: '',
    fs: fs,
    dynamicPartials: true,
    jsTruthy: false,
    trimTagRight: false,
    trimTagLeft: false,
    trimOutputRight: false,
    trimOutputLeft: false,
    greedy: true,
    tagDelimiterLeft: '{%',
    tagDelimiterRight: '%}',
    outputDelimiterLeft: '{{',
    outputDelimiterRight: '}}',
    preserveTimezones: false,
    strictFilters: false,
    strictVariables: false,
    lenientIf: false,
    globals: {},
    keepOutputType: false,
    operators: defaultOperators,
    operatorsTrie: createTrie(defaultOperators)
};
function normalize(options) {
    options = options || {};
    if (options.hasOwnProperty('root')) {
        options.root = normalizeStringArray(options.root);
    }
    if (options.hasOwnProperty('cache')) {
        let cache;
        if (typeof options.cache === 'number')
            cache = options.cache > 0 ? new LRU(options.cache) : undefined;
        else if (typeof options.cache === 'object')
            cache = options.cache;
        else
            cache = options.cache ? new LRU(1024) : undefined;
        options.cache = cache;
    }
    if (options.hasOwnProperty('operators')) {
        options.operatorsTrie = createTrie(options.operators);
    }
    return options;
}
function applyDefault(options) {
    return Object.assign({}, defaultOptions, options);
}
function normalizeStringArray(value) {
    if (isArray(value))
        return value;
    if (isString(value))
        return [value];
    return [];
}

class LiquidError extends Error {
    constructor(err, token) {
        super(err.message);
        this.originalError = err;
        this.token = token;
        this.context = '';
    }
    update() {
        const err = this.originalError;
        this.context = mkContext(this.token);
        this.message = mkMessage(err.message, this.token);
        this.stack = this.message + '\n' + this.context +
            '\n' + this.stack + '\nFrom ' + err.stack;
    }
}
class TokenizationError extends LiquidError {
    constructor(message, token) {
        super(new Error(message), token);
        this.name = 'TokenizationError';
        super.update();
    }
}
class ParseError extends LiquidError {
    constructor(err, token) {
        super(err, token);
        this.name = 'ParseError';
        this.message = err.message;
        super.update();
    }
}
class RenderError extends LiquidError {
    constructor(err, tpl) {
        super(err, tpl.token);
        this.name = 'RenderError';
        this.message = err.message;
        super.update();
    }
    static is(obj) {
        return obj.name === 'RenderError';
    }
}
class UndefinedVariableError extends LiquidError {
    constructor(err, token) {
        super(err, token);
        this.name = 'UndefinedVariableError';
        this.message = err.message;
        super.update();
    }
}
// only used internally; raised where we don't have token information,
// so it can't be an UndefinedVariableError.
class InternalUndefinedVariableError extends Error {
    constructor(variableName) {
        super(`undefined variable: ${variableName}`);
        this.name = 'InternalUndefinedVariableError';
        this.variableName = variableName;
    }
}
class AssertionError extends Error {
    constructor(message) {
        super(message);
        this.name = 'AssertionError';
        this.message = message + '';
    }
}
function mkContext(token) {
    const [line] = token.getPosition();
    const lines = token.input.split('\n');
    const begin = Math.max(line - 2, 1);
    const end = Math.min(line + 3, lines.length);
    const context = range(begin, end + 1)
        .map(lineNumber => {
        const indicator = (lineNumber === line) ? '>> ' : '   ';
        const num = padStart(String(lineNumber), String(end).length);
        const text = lines[lineNumber - 1];
        return `${indicator}${num}| ${text}`;
    })
        .join('\n');
    return context;
}
function mkMessage(msg, token) {
    if (token.file)
        msg += `, file:${token.file}`;
    const [line, col] = token.getPosition();
    msg += `, line:${line}, col:${col}`;
    return msg;
}

class Context {
    constructor(env = {}, opts = defaultOptions, sync = false) {
        this.scopes = [{}];
        this.registers = {};
        this.sync = sync;
        this.opts = opts;
        this.globals = opts.globals;
        this.environments = env;
    }
    getRegister(key, defaultValue = {}) {
        return (this.registers[key] = this.registers[key] || defaultValue);
    }
    setRegister(key, value) {
        return (this.registers[key] = value);
    }
    saveRegister(...keys) {
        return keys.map(key => [key, this.getRegister(key)]);
    }
    restoreRegister(keyValues) {
        return keyValues.forEach(([key, value]) => this.setRegister(key, value));
    }
    getAll() {
        return [this.globals, this.environments, ...this.scopes]
            .reduce((ctx, val) => __assign(ctx, val), {});
    }
    get(paths) {
        const scope = this.findScope(paths[0]);
        return this.getFromScope(scope, paths);
    }
    getFromScope(scope, paths) {
        if (typeof paths === 'string')
            paths = paths.split('.');
        return paths.reduce((scope, path) => {
            const preScope = readProperty(scope, path);
            if (this.isHexColor(scope) && !preScope) {
                const rgbValue = this.hexToRgba(scope);
                scope = readProperty(rgbValue, path);
            }
            else {
                scope = preScope;
            }
            if (isNil(scope) && this.opts.strictVariables) {
                throw new InternalUndefinedVariableError(path);
            }
            return scope;
        }, scope);
    }
    push(ctx) {
        return this.scopes.push(ctx);
    }
    pop() {
        return this.scopes.pop();
    }
    bottom() {
        return this.scopes[0];
    }
    findScope(key) {
        for (let i = this.scopes.length - 1; i >= 0; i--) {
            const candidate = this.scopes[i];
            if (key in candidate)
                return candidate;
        }
        if (key in this.environments)
            return this.environments;
        return this.globals;
    }
    isHexColor(hexStr) {
        // 十六进制颜色值的正则表达式
        const reg = /^#([0-9a-fA-f]{6}|[0-9a-fA-f]{3})$/;
        return hexStr && reg.test(hexStr);
    }
    hexToRgba(hexStr) {
        let rgba = {
            red: '',
            green: '',
            blue: '',
            alpha: ''
        };
        // 如果是16进制颜色
        if (this.isHexColor(hexStr)) {
            if (hexStr.length === 4) {
                let colorNew = '#';
                for (let i = 1; i < 4; i += 1) {
                    colorNew += hexStr.slice(i, i + 1).concat(hexStr.slice(i, i + 1));
                }
                hexStr = colorNew;
            }
            // 处理六位的颜色值
            const colorChange = [];
            for (let i = 1; i < 7; i += 2) {
                colorChange.push(parseInt('0x' + hexStr.slice(i, i + 2)));
            }
            rgba = {
                red: `${colorChange[0]}`,
                green: `${colorChange[1]}`,
                blue: `${colorChange[2]}`,
                alpha: `${1}`
            };
        }
        return rgba;
    }
}
function readProperty(obj, key) {
    if (isNil(obj))
        return obj;
    obj = toLiquid(obj);
    if (isFunction(obj[key]))
        return obj[key]();
    if (obj instanceof Drop) {
        if (obj.hasOwnProperty(key))
            return obj[key];
        return obj.liquidMethodMissing(key);
    }
    if (key === 'size')
        return readSize(obj);
    if (key === 'first')
        return readFirst(obj);
    if (key === 'last')
        return readLast(obj);
    return obj[key];
}
function readFirst(obj) {
    if (isArray(obj))
        return obj[0];
    return obj['first'];
}
function readLast(obj) {
    if (isArray(obj))
        return obj[obj.length - 1];
    return obj['last'];
}
function readSize(obj) {
    if (isArray(obj) || isString(obj))
        return obj.length;
    return obj['size'];
}

var TokenKind;
(function (TokenKind) {
    TokenKind[TokenKind["Number"] = 1] = "Number";
    TokenKind[TokenKind["Literal"] = 2] = "Literal";
    TokenKind[TokenKind["Tag"] = 4] = "Tag";
    TokenKind[TokenKind["Output"] = 8] = "Output";
    TokenKind[TokenKind["HTML"] = 16] = "HTML";
    TokenKind[TokenKind["Filter"] = 32] = "Filter";
    TokenKind[TokenKind["Hash"] = 64] = "Hash";
    TokenKind[TokenKind["PropertyAccess"] = 128] = "PropertyAccess";
    TokenKind[TokenKind["Word"] = 256] = "Word";
    TokenKind[TokenKind["Range"] = 512] = "Range";
    TokenKind[TokenKind["Quoted"] = 1024] = "Quoted";
    TokenKind[TokenKind["Operator"] = 2048] = "Operator";
    TokenKind[TokenKind["Delimited"] = 12] = "Delimited";
})(TokenKind || (TokenKind = {}));

function isDelimitedToken(val) {
    return !!(getKind(val) & TokenKind.Delimited);
}
function isOperatorToken(val) {
    return getKind(val) === TokenKind.Operator;
}
function isHTMLToken(val) {
    return getKind(val) === TokenKind.HTML;
}
function isOutputToken(val) {
    return getKind(val) === TokenKind.Output;
}
function isTagToken(val) {
    return getKind(val) === TokenKind.Tag;
}
function isQuotedToken(val) {
    return getKind(val) === TokenKind.Quoted;
}
function isLiteralToken(val) {
    return getKind(val) === TokenKind.Literal;
}
function isNumberToken(val) {
    return getKind(val) === TokenKind.Number;
}
function isPropertyAccessToken(val) {
    return getKind(val) === TokenKind.PropertyAccess;
}
function isWordToken(val) {
    return getKind(val) === TokenKind.Word;
}
function isRangeToken(val) {
    return getKind(val) === TokenKind.Range;
}
function getKind(val) {
    return val ? val.kind : -1;
}

var typeGuards = /*#__PURE__*/Object.freeze({
  isDelimitedToken: isDelimitedToken,
  isOperatorToken: isOperatorToken,
  isHTMLToken: isHTMLToken,
  isOutputToken: isOutputToken,
  isTagToken: isTagToken,
  isQuotedToken: isQuotedToken,
  isLiteralToken: isLiteralToken,
  isNumberToken: isNumberToken,
  isPropertyAccessToken: isPropertyAccessToken,
  isWordToken: isWordToken,
  isRangeToken: isRangeToken
});

function whiteSpaceCtrl(tokens, options) {
    let inRaw = false;
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (!isDelimitedToken(token))
            continue;
        if (!inRaw && token.trimLeft) {
            trimLeft(tokens[i - 1], options.greedy);
        }
        if (isTagToken(token)) {
            if (token.name === 'raw')
                inRaw = true;
            else if (token.name === 'endraw')
                inRaw = false;
        }
        if (!inRaw && token.trimRight) {
            trimRight(tokens[i + 1], options.greedy);
        }
    }
}
function trimLeft(token, greedy) {
    if (!token || !isHTMLToken(token))
        return;
    const mask = greedy ? BLANK : INLINE_BLANK;
    while (TYPES[token.input.charCodeAt(token.end - 1 - token.trimRight)] & mask)
        token.trimRight++;
}
function trimRight(token, greedy) {
    if (!token || !isHTMLToken(token))
        return;
    const mask = greedy ? BLANK : INLINE_BLANK;
    while (TYPES[token.input.charCodeAt(token.begin + token.trimLeft)] & mask)
        token.trimLeft++;
    if (token.input.charAt(token.begin + token.trimLeft) === '\n')
        token.trimLeft++;
}

class Token {
    constructor(kind, input, begin, end, file) {
        this.kind = kind;
        this.input = input;
        this.begin = begin;
        this.end = end;
        this.file = file;
    }
    getText() {
        return this.input.slice(this.begin, this.end);
    }
    getPosition() {
        let [row, col] = [1, 1];
        for (let i = 0; i < this.begin; i++) {
            if (this.input[i] === '\n') {
                row++;
                col = 1;
            }
            else
                col++;
        }
        return [row, col];
    }
    size() {
        return this.end - this.begin;
    }
}

class NumberToken extends Token {
    constructor(whole, decimal) {
        super(TokenKind.Number, whole.input, whole.begin, decimal ? decimal.end : whole.end, whole.file);
        this.whole = whole;
        this.decimal = decimal;
    }
}

class IdentifierToken extends Token {
    constructor(input, begin, end, file) {
        super(TokenKind.Word, input, begin, end, file);
        this.input = input;
        this.begin = begin;
        this.end = end;
        this.file = file;
        this.content = this.getText();
    }
    isNumber(allowSign = false) {
        const begin = allowSign && TYPES[this.input.charCodeAt(this.begin)] & SIGN
            ? this.begin + 1
            : this.begin;
        for (let i = begin; i < this.end; i++) {
            if (!(TYPES[this.input.charCodeAt(i)] & NUMBER))
                return false;
        }
        return true;
    }
}

class NullDrop extends Drop {
    equals(value) {
        return isNil(toValue(value));
    }
    gt() {
        return false;
    }
    geq() {
        return false;
    }
    lt() {
        return false;
    }
    leq() {
        return false;
    }
    valueOf() {
        return null;
    }
}

class EmptyDrop extends Drop {
    equals(value) {
        if (value instanceof EmptyDrop)
            return false;
        value = toValue(value);
        if (isString(value) || isArray(value))
            return value.length === 0;
        if (isObject(value))
            return Object.keys(value).length === 0;
        return false;
    }
    gt() {
        return false;
    }
    geq() {
        return false;
    }
    lt() {
        return false;
    }
    leq() {
        return false;
    }
    valueOf() {
        return '';
    }
}

class BlankDrop extends EmptyDrop {
    equals(value) {
        if (value === false)
            return true;
        if (isNil(toValue(value)))
            return true;
        if (isString(value))
            return /^\s*$/.test(value);
        return super.equals(value);
    }
}

const nil = new NullDrop();
const literalValues = {
    'true': true,
    'false': false,
    'nil': nil,
    'null': nil,
    'empty': new EmptyDrop(),
    'blank': new BlankDrop()
};

class LiteralToken extends Token {
    constructor(input, begin, end, file) {
        super(TokenKind.Literal, input, begin, end, file);
        this.input = input;
        this.begin = begin;
        this.end = end;
        this.file = file;
        this.literal = this.getText();
    }
}

const precedence = {
    '==': 1,
    '!=': 1,
    '>': 1,
    '<': 1,
    '>=': 1,
    '<=': 1,
    'contains': 1,
    'and': 0,
    'or': 0
};
class OperatorToken extends Token {
    constructor(input, begin, end, file) {
        super(TokenKind.Operator, input, begin, end, file);
        this.input = input;
        this.begin = begin;
        this.end = end;
        this.file = file;
        this.operator = this.getText();
    }
    getPrecedence() {
        const key = this.getText();
        return key in precedence ? precedence[key] : 1;
    }
}

const rHex = /[\da-fA-F]/;
const rOct = /[0-7]/;
const escapeChar = {
    b: '\b',
    f: '\f',
    n: '\n',
    r: '\r',
    t: '\t',
    v: '\x0B'
};
function hexVal(c) {
    const code = c.charCodeAt(0);
    if (code >= 97)
        return code - 87;
    if (code >= 65)
        return code - 55;
    return code - 48;
}
function parseStringLiteral(str) {
    let ret = '';
    for (let i = 1; i < str.length - 1; i++) {
        if (str[i] !== '\\') {
            ret += str[i];
            continue;
        }
        if (escapeChar[str[i + 1]] !== undefined) {
            ret += escapeChar[str[++i]];
        }
        else if (str[i + 1] === 'u') {
            let val = 0;
            let j = i + 2;
            while (j <= i + 5 && rHex.test(str[j])) {
                val = val * 16 + hexVal(str[j++]);
            }
            i = j - 1;
            ret += String.fromCharCode(val);
        }
        else if (!rOct.test(str[i + 1])) {
            ret += str[++i];
        }
        else {
            let j = i + 1;
            let val = 0;
            while (j <= i + 3 && rOct.test(str[j])) {
                val = val * 8 + hexVal(str[j++]);
            }
            i = j - 1;
            ret += String.fromCharCode(val);
        }
    }
    return ret;
}

class PropertyAccessToken extends Token {
    constructor(variable, props, end) {
        super(TokenKind.PropertyAccess, variable.input, variable.begin, end, variable.file);
        this.variable = variable;
        this.props = props;
    }
    getVariableAsText() {
        if (this.variable instanceof IdentifierToken) {
            return this.variable.getText();
        }
        else {
            return parseStringLiteral(this.variable.getText());
        }
    }
}

function assert(predicate, message) {
    if (!predicate) {
        const msg = message ? message() : `expect ${predicate} to be true`;
        throw new AssertionError(msg);
    }
}

class FilterToken extends Token {
    constructor(name, args, input, begin, end, file) {
        super(TokenKind.Filter, input, begin, end, file);
        this.name = name;
        this.args = args;
    }
}

class HashToken extends Token {
    constructor(input, begin, end, name, value, file) {
        super(TokenKind.Hash, input, begin, end, file);
        this.input = input;
        this.begin = begin;
        this.end = end;
        this.name = name;
        this.value = value;
        this.file = file;
    }
}

class QuotedToken extends Token {
    constructor(input, begin, end, file) {
        super(TokenKind.Quoted, input, begin, end, file);
        this.input = input;
        this.begin = begin;
        this.end = end;
        this.file = file;
    }
}

class HTMLToken extends Token {
    constructor(input, begin, end, file) {
        super(TokenKind.HTML, input, begin, end, file);
        this.input = input;
        this.begin = begin;
        this.end = end;
        this.file = file;
        this.trimLeft = 0;
        this.trimRight = 0;
    }
    getContent() {
        return this.input.slice(this.begin + this.trimLeft, this.end - this.trimRight);
    }
}

class DelimitedToken extends Token {
    constructor(kind, content, input, begin, end, trimLeft, trimRight, file) {
        super(kind, input, begin, end, file);
        this.trimLeft = false;
        this.trimRight = false;
        this.content = this.getText();
        const tl = content[0] === '-';
        const tr = last(content) === '-';
        this.content = content
            .slice(tl ? 1 : 0, tr ? -1 : content.length)
            .trim();
        this.trimLeft = tl || trimLeft;
        this.trimRight = tr || trimRight;
    }
}

class TagToken extends DelimitedToken {
    constructor(input, begin, end, options, file) {
        const { trimTagLeft, trimTagRight, tagDelimiterLeft, tagDelimiterRight } = options;
        const value = input.slice(begin + tagDelimiterLeft.length, end - tagDelimiterRight.length);
        super(TokenKind.Tag, value, input, begin, end, trimTagLeft, trimTagRight, file);
        const tokenizer = new Tokenizer(this.content, options.operatorsTrie);
        this.name = tokenizer.readIdentifier().getText();
        if (!this.name)
            throw new TokenizationError(`illegal tag syntax`, this);
        tokenizer.skipBlank();
        this.args = tokenizer.remaining();
    }
}

class RangeToken extends Token {
    constructor(input, begin, end, lhs, rhs, file) {
        super(TokenKind.Range, input, begin, end, file);
        this.input = input;
        this.begin = begin;
        this.end = end;
        this.lhs = lhs;
        this.rhs = rhs;
        this.file = file;
    }
}

class OutputToken extends DelimitedToken {
    constructor(input, begin, end, options, file) {
        const { trimOutputLeft, trimOutputRight, outputDelimiterLeft, outputDelimiterRight } = options;
        const value = input.slice(begin + outputDelimiterLeft.length, end - outputDelimiterRight.length);
        super(TokenKind.Output, value, input, begin, end, trimOutputLeft, trimOutputRight, file);
    }
}

function matchOperator(str, begin, trie, end = str.length) {
    let node = trie;
    let i = begin;
    let info;
    while (node[str[i]] && i < end) {
        node = node[str[i++]];
        if (node['end'])
            info = node;
    }
    if (!info)
        return -1;
    if (info['needBoundary'] && (TYPES[str.charCodeAt(i)] & IDENTIFIER))
        return -1;
    return i;
}

class Expression {
    constructor(tokens) {
        this.postfix = [...toPostfix(tokens)];
    }
    *evaluate(ctx, lenient) {
        assert(ctx, () => 'unable to evaluate: context not defined');
        const operands = [];
        for (const token of this.postfix) {
            if (isOperatorToken(token)) {
                const r = yield operands.pop();
                const l = yield operands.pop();
                const result = evalOperatorToken(ctx.opts.operators, token, l, r, ctx);
                operands.push(result);
            }
            else {
                operands.push(yield evalToken(token, ctx, lenient && this.postfix.length === 1));
            }
        }
        return operands[0];
    }
}
function evalToken(token, ctx, lenient = false) {
    if (isPropertyAccessToken(token))
        return evalPropertyAccessToken(token, ctx, lenient);
    if (isRangeToken(token))
        return evalRangeToken(token, ctx);
    if (isLiteralToken(token))
        return evalLiteralToken(token);
    if (isNumberToken(token))
        return evalNumberToken(token);
    if (isWordToken(token))
        return token.getText();
    if (isQuotedToken(token))
        return evalQuotedToken(token);
}
function evalPropertyAccessToken(token, ctx, lenient) {
    const variable = token.getVariableAsText();
    const props = token.props.map(prop => evalToken(prop, ctx, false));
    try {
        return ctx.get([variable, ...props]);
    }
    catch (e) {
        if (lenient && e.name === 'InternalUndefinedVariableError')
            return null;
        throw (new UndefinedVariableError(e, token));
    }
}
function evalNumberToken(token) {
    const str = token.whole.content + '.' + (token.decimal ? token.decimal.content : '');
    return Number(str);
}
function evalQuotedToken(token) {
    return parseStringLiteral(token.getText());
}
function evalOperatorToken(operators, token, lhs, rhs, ctx) {
    const impl = operators[token.operator];
    return impl(lhs, rhs, ctx);
}
function evalLiteralToken(token) {
    return literalValues[token.literal];
}
function evalRangeToken(token, ctx) {
    const low = evalToken(token.lhs, ctx);
    const high = evalToken(token.rhs, ctx);
    return range(+low, +high + 1);
}
function* toPostfix(tokens) {
    const ops = [];
    for (const token of tokens) {
        if (isOperatorToken(token)) {
            while (ops.length && ops[ops.length - 1].getPrecedence() > token.getPrecedence()) {
                yield ops.pop();
            }
            ops.push(token);
        }
        else
            yield token;
    }
    while (ops.length) {
        yield ops.pop();
    }
}

class Tokenizer {
    constructor(input, trie, file = '') {
        this.input = input;
        this.trie = trie;
        this.file = file;
        this.p = 0;
        this.rawBeginAt = -1;
        this.N = input.length;
    }
    readExpression() {
        return new Expression(this.readExpressionTokens());
    }
    *readExpressionTokens() {
        const operand = this.readValue();
        if (!operand)
            return;
        yield operand;
        while (this.p < this.N) {
            const operator = this.readOperator();
            if (!operator)
                return;
            const operand = this.readValue();
            if (!operand)
                return;
            yield operator;
            yield operand;
        }
    }
    readOperator() {
        this.skipBlank();
        const end = matchOperator(this.input, this.p, this.trie, this.p + 8);
        if (end === -1)
            return;
        return new OperatorToken(this.input, this.p, (this.p = end), this.file);
    }
    readFilters() {
        const filters = [];
        while (true) {
            const filter = this.readFilter();
            if (!filter)
                return filters;
            filters.push(filter);
        }
    }
    readFilter() {
        this.skipBlank();
        if (this.end())
            return null;
        assert(this.peek() === '|', () => `unexpected token at ${this.snapshot()}`);
        this.p++;
        const begin = this.p;
        const name = this.readIdentifier();
        if (!name.size())
            return null;
        const args = [];
        this.skipBlank();
        if (this.peek() === ':') {
            do {
                ++this.p;
                const arg = this.readFilterArg();
                arg && args.push(arg);
                while (this.p < this.N && this.peek() !== ',' && this.peek() !== '|')
                    ++this.p;
            } while (this.peek() === ',');
        }
        return new FilterToken(name.getText(), args, this.input, begin, this.p, this.file);
    }
    readFilterArg() {
        const key = this.readValue();
        if (!key)
            return;
        this.skipBlank();
        if (this.peek() !== ':')
            return key;
        ++this.p;
        const value = this.readValue();
        return [key.getText(), value];
    }
    readTopLevelTokens(options = defaultOptions) {
        const tokens = [];
        while (this.p < this.N) {
            const token = this.readTopLevelToken(options);
            tokens.push(token);
        }
        whiteSpaceCtrl(tokens, options);
        return tokens;
    }
    readTopLevelToken(options) {
        const { tagDelimiterLeft, outputDelimiterLeft } = options;
        if (this.rawBeginAt > -1)
            return this.readEndrawOrRawContent(options);
        if (this.match(tagDelimiterLeft))
            return this.readTagToken(options);
        if (this.match(outputDelimiterLeft))
            return this.readOutputToken(options);
        return this.readHTMLToken(options);
    }
    readHTMLToken(options) {
        const begin = this.p;
        while (this.p < this.N) {
            const { tagDelimiterLeft, outputDelimiterLeft } = options;
            if (this.match(tagDelimiterLeft))
                break;
            if (this.match(outputDelimiterLeft))
                break;
            ++this.p;
        }
        return new HTMLToken(this.input, begin, this.p, this.file);
    }
    readTagToken(options = defaultOptions) {
        const { file, input } = this;
        const begin = this.p;
        if (this.readToDelimiter(options.tagDelimiterRight) === -1) {
            throw this.mkError(`tag ${this.snapshot(begin)} not closed`, begin);
        }
        const token = new TagToken(input, begin, this.p, options, file);
        if (token.name === 'raw')
            this.rawBeginAt = begin;
        return token;
    }
    readToDelimiter(delimiter) {
        while (this.p < this.N) {
            if ((this.peekType() & QUOTE)) {
                this.readQuoted();
                continue;
            }
            ++this.p;
            if (this.rmatch(delimiter))
                return this.p;
        }
        return -1;
    }
    readOutputToken(options = defaultOptions) {
        const { file, input } = this;
        const { outputDelimiterRight } = options;
        const begin = this.p;
        if (this.readToDelimiter(outputDelimiterRight) === -1) {
            throw this.mkError(`output ${this.snapshot(begin)} not closed`, begin);
        }
        return new OutputToken(input, begin, this.p, options, file);
    }
    readEndrawOrRawContent(options) {
        const { tagDelimiterLeft, tagDelimiterRight } = options;
        const begin = this.p;
        let leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
        while (this.p < this.N) {
            if (this.readIdentifier().getText() !== 'endraw') {
                leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
                continue;
            }
            while (this.p <= this.N) {
                if (this.rmatch(tagDelimiterRight)) {
                    const end = this.p;
                    if (begin === leftPos) {
                        this.rawBeginAt = -1;
                        return new TagToken(this.input, begin, end, options, this.file);
                    }
                    else {
                        this.p = leftPos;
                        return new HTMLToken(this.input, begin, leftPos, this.file);
                    }
                }
                if (this.rmatch(tagDelimiterLeft))
                    break;
                this.p++;
            }
        }
        throw this.mkError(`raw ${this.snapshot(this.rawBeginAt)} not closed`, begin);
    }
    mkError(msg, begin) {
        return new TokenizationError(msg, new IdentifierToken(this.input, begin, this.N, this.file));
    }
    snapshot(begin = this.p) {
        return JSON.stringify(ellipsis(this.input.slice(begin), 16));
    }
    /**
     * @deprecated
     */
    readWord() {
        console.warn('Tokenizer#readWord() will be removed, use #readIdentifier instead');
        return this.readIdentifier();
    }
    readIdentifier() {
        this.skipBlank();
        const begin = this.p;
        while (this.peekType() & IDENTIFIER)
            ++this.p;
        return new IdentifierToken(this.input, begin, this.p, this.file);
    }
    readHashes() {
        const hashes = [];
        while (true) {
            const hash = this.readHash();
            if (!hash)
                return hashes;
            hashes.push(hash);
        }
    }
    readHash() {
        this.skipBlank();
        if (this.peek() === ',')
            ++this.p;
        const begin = this.p;
        const name = this.readIdentifier();
        if (!name.size())
            return;
        let value;
        this.skipBlank();
        if (this.peek() === ':') {
            ++this.p;
            value = this.readValue();
        }
        return new HashToken(this.input, begin, this.p, name, value, this.file);
    }
    remaining() {
        return this.input.slice(this.p);
    }
    advance(i = 1) {
        this.p += i;
    }
    end() {
        return this.p >= this.N;
    }
    readTo(end) {
        while (this.p < this.N) {
            ++this.p;
            if (this.rmatch(end))
                return this.p;
        }
        return -1;
    }
    readValue() {
        const value = this.readQuoted() || this.readRange();
        if (value)
            return value;
        if (this.peek() === '[') {
            this.p++;
            const prop = this.readQuoted();
            if (!prop)
                return;
            if (this.peek() !== ']')
                return;
            this.p++;
            return new PropertyAccessToken(prop, [], this.p);
        }
        const variable = this.readIdentifier();
        if (!variable.size())
            return;
        let isNumber = variable.isNumber(true);
        const props = [];
        while (true) {
            if (this.peek() === '[') {
                isNumber = false;
                this.p++;
                const prop = this.readValue() || new IdentifierToken(this.input, this.p, this.p, this.file);
                this.readTo(']');
                props.push(prop);
            }
            else if (this.peek() === '.' && this.peek(1) !== '.') { // skip range syntax
                this.p++;
                const prop = this.readIdentifier();
                if (!prop.size())
                    break;
                if (!prop.isNumber())
                    isNumber = false;
                props.push(prop);
            }
            else
                break;
        }
        if (!props.length && literalValues.hasOwnProperty(variable.content)) {
            return new LiteralToken(this.input, variable.begin, variable.end, this.file);
        }
        if (isNumber)
            return new NumberToken(variable, props[0]);
        return new PropertyAccessToken(variable, props, this.p);
    }
    readRange() {
        this.skipBlank();
        const begin = this.p;
        if (this.peek() !== '(')
            return;
        ++this.p;
        const lhs = this.readValueOrThrow();
        this.p += 2;
        const rhs = this.readValueOrThrow();
        ++this.p;
        return new RangeToken(this.input, begin, this.p, lhs, rhs, this.file);
    }
    readValueOrThrow() {
        const value = this.readValue();
        assert(value, () => `unexpected token ${this.snapshot()}, value expected`);
        return value;
    }
    readQuoted() {
        this.skipBlank();
        const begin = this.p;
        if (!(this.peekType() & QUOTE))
            return;
        ++this.p;
        let escaped = false;
        while (this.p < this.N) {
            ++this.p;
            if (this.input[this.p - 1] === this.input[begin] && !escaped)
                break;
            if (escaped)
                escaped = false;
            else if (this.input[this.p - 1] === '\\')
                escaped = true;
        }
        return new QuotedToken(this.input, begin, this.p, this.file);
    }
    readFileName() {
        const begin = this.p;
        while (!(this.peekType() & BLANK) && this.peek() !== ',' && this.p < this.N)
            this.p++;
        return new IdentifierToken(this.input, begin, this.p, this.file);
    }
    match(word) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] !== this.input[this.p + i])
                return false;
        }
        return true;
    }
    rmatch(pattern) {
        for (let i = 0; i < pattern.length; i++) {
            if (pattern[pattern.length - 1 - i] !== this.input[this.p - 1 - i])
                return false;
        }
        return true;
    }
    peekType(n = 0) {
        return TYPES[this.input.charCodeAt(this.p + n)];
    }
    peek(n = 0) {
        return this.input[this.p + n];
    }
    skipBlank() {
        while (this.peekType() & BLANK)
            ++this.p;
    }
}

class Emitter {
    constructor(keepOutputType) {
        this.html = '';
        this.break = false;
        this.continue = false;
        this.keepOutputType = false;
        this.keepOutputType = keepOutputType;
    }
    write(html) {
        if (this.keepOutputType === true) {
            html = toValue(html);
        }
        else {
            html = stringify(toValue(html));
        }
        // This will only preserve the type if the value is isolated.
        // I.E:
        // {{ my-port }} -> 42
        // {{ my-host }}:{{ my-port }} -> 'host:42'
        if (this.keepOutputType === true && typeof html !== 'string' && this.html === '') {
            this.html = html;
        }
        else {
            this.html = stringify(this.html) + stringify(html);
        }
    }
}

class Render {
    *renderTemplates(templates, ctx, emitter) {
        if (!emitter) {
            emitter = new Emitter(ctx.opts.keepOutputType);
        }
        for (const tpl of templates) {
            try {
                const html = yield tpl.render(ctx, emitter);
                html && emitter.write(html);
                if (emitter.break || emitter.continue)
                    break;
            }
            catch (e) {
                const err = RenderError.is(e) ? e : new RenderError(e, tpl);
                throw err;
            }
        }
        return emitter.html;
    }
}

class ParseStream {
    constructor(tokens, parseToken) {
        this.handlers = {};
        this.stopRequested = false;
        this.tokens = tokens;
        this.parseToken = parseToken;
    }
    on(name, cb) {
        this.handlers[name] = cb;
        return this;
    }
    trigger(event, arg) {
        const h = this.handlers[event];
        return h ? (h(arg), true) : false;
    }
    start() {
        this.trigger('start');
        let token;
        while (!this.stopRequested && (token = this.tokens.shift())) {
            if (this.trigger('token', token))
                continue;
            if (isTagToken(token) && this.trigger(`tag:${token.name}`, token)) {
                continue;
            }
            const template = this.parseToken(token, this.tokens);
            this.trigger('template', template);
        }
        if (!this.stopRequested)
            this.trigger('end');
        return this;
    }
    stop() {
        this.stopRequested = true;
        return this;
    }
}

class TemplateImpl {
    constructor(token) {
        this.token = token;
    }
}

/**
 * Key-Value Pairs Representing Tag Arguments
 * Example:
 *    For the markup `, foo:'bar', coo:2 reversed %}`,
 *    hash['foo'] === 'bar'
 *    hash['coo'] === 2
 *    hash['reversed'] === undefined
 */
class Hash {
    constructor(markup) {
        this.hash = {};
        const tokenizer = new Tokenizer(markup, {});
        for (const hash of tokenizer.readHashes()) {
            this.hash[hash.name.content] = hash.value;
        }
    }
    *render(ctx) {
        const hash = {};
        for (const key of Object.keys(this.hash)) {
            hash[key] = yield evalToken(this.hash[key], ctx);
        }
        return hash;
    }
}

function isKeyValuePair(arr) {
    return isArray(arr);
}

class Filter {
    constructor(name, impl, args, liquid) {
        this.name = name;
        this.impl = impl || identify;
        this.args = args;
        this.liquid = liquid;
    }
    render(value, context) {
        const argv = [];
        for (const arg of this.args) {
            if (isKeyValuePair(arg))
                argv.push([arg[0], evalToken(arg[1], context)]);
            else
                argv.push(evalToken(arg, context));
        }
        return this.impl.apply({ context, liquid: this.liquid }, [value, ...argv]);
    }
}

class Value {
    /**
     * @param str the value to be valuated, eg.: "foobar" | truncate: 3
     */
    constructor(str, liquid) {
        this.filters = [];
        const tokenizer = new Tokenizer(str, liquid.options.operatorsTrie);
        this.initial = tokenizer.readExpression();
        this.filters = tokenizer.readFilters().map(({ name, args }) => new Filter(name, liquid.filters.get(name), args, liquid));
    }
    *value(ctx, lenient) {
        lenient = lenient || (ctx.opts.lenientIf && this.filters.length > 0 && this.filters[0].name === 'default');
        let val = yield this.initial.evaluate(ctx, lenient);
        for (const filter of this.filters) {
            val = yield filter.render(val, ctx);
        }
        return val;
    }
}

function createResolvedThenable(value) {
    const ret = {
        then: (resolve) => resolve(value),
        catch: () => ret
    };
    return ret;
}
function createRejectedThenable(err) {
    const ret = {
        then: (resolve, reject) => {
            if (reject)
                return reject(err);
            return ret;
        },
        catch: (reject) => reject(err)
    };
    return ret;
}
function isThenable(val) {
    return val && isFunction(val.then);
}
function isAsyncIterator(val) {
    return val && isFunction(val.next) && isFunction(val.throw) && isFunction(val.return);
}
// convert an async iterator to a thenable (Promise compatible)
function toThenable(val) {
    if (isThenable(val))
        return val;
    if (isAsyncIterator(val))
        return reduce();
    return createResolvedThenable(val);
    function reduce(prev) {
        let state;
        try {
            state = val.next(prev);
        }
        catch (err) {
            return createRejectedThenable(err);
        }
        if (state.done)
            return createResolvedThenable(state.value);
        return toThenable(state.value).then(reduce, err => {
            let state;
            try {
                state = val.throw(err);
            }
            catch (e) {
                return createRejectedThenable(e);
            }
            if (state.done)
                return createResolvedThenable(state.value);
            return reduce(state.value);
        });
    }
}
function toPromise(val) {
    return Promise.resolve(toThenable(val));
}
// get the value of async iterator in synchronous manner
function toValue$1(val) {
    let ret;
    toThenable(val)
        .then((x) => {
        ret = x;
        return createResolvedThenable(ret);
    })
        .catch((err) => {
        throw err;
    });
    return ret;
}

class Tag extends TemplateImpl {
    constructor(token, tokens, liquid) {
        super(token);
        this.name = token.name;
        const impl = liquid.tags.get(token.name);
        this.impl = Object.create(impl);
        this.impl.liquid = liquid;
        if (this.impl.parse) {
            this.impl.parse(token, tokens);
        }
    }
    *render(ctx, emitter) {
        const hash = yield new Hash(this.token.args).render(ctx);
        const impl = this.impl;
        if (isFunction(impl.render))
            return yield impl.render(ctx, emitter, hash);
    }
}

class Output extends TemplateImpl {
    constructor(token, liquid) {
        super(token);
        this.value = new Value(token.content, liquid);
    }
    *render(ctx, emitter) {
        const val = yield this.value.value(ctx, false);
        emitter.write(val);
    }
}

class HTML extends TemplateImpl {
    constructor(token) {
        super(token);
        this.str = token.getContent();
    }
    *render(ctx, emitter) {
        emitter.write(this.str);
    }
}

class Parser {
    constructor(liquid) {
        this.liquid = liquid;
    }
    parse(tokens) {
        let token;
        const templates = [];
        while ((token = tokens.shift())) {
            templates.push(this.parseToken(token, tokens));
        }
        return templates;
    }
    parseToken(token, remainTokens) {
        try {
            if (isTagToken(token)) {
                return new Tag(token, remainTokens, this.liquid);
            }
            if (isOutputToken(token)) {
                return new Output(token, this.liquid);
            }
            return new HTML(token);
        }
        catch (e) {
            throw new ParseError(e, token);
        }
    }
    parseStream(tokens) {
        return new ParseStream(tokens, (token, tokens) => this.parseToken(token, tokens));
    }
}

var assign = {
    parse: function (token) {
        const tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
        this.key = tokenizer.readIdentifier().content;
        tokenizer.skipBlank();
        assert(tokenizer.peek() === '=', () => `illegal token ${token.getText()}`);
        tokenizer.advance();
        this.value = tokenizer.remaining();
    },
    render: function* (ctx) {
        ctx.bottom()[this.key] = yield this.liquid._evalValue(this.value, ctx);
    }
};

function toEnumerable(val) {
    if (isArray(val))
        return val;
    if (isString(val) && val.length > 0)
        return [val];
    if (isObject(val))
        return Object.keys(val).map((key) => [key, val[key]]);
    return [];
}
function toArray(val) {
    if (isArray(val))
        return val;
    return [val];
}

class ForloopDrop extends Drop {
    constructor(length) {
        super();
        this.i = 0;
        this.length = length;
    }
    next() {
        this.i++;
    }
    index0() {
        return this.i;
    }
    index() {
        return this.i + 1;
    }
    first() {
        return this.i === 0;
    }
    last() {
        return this.i === this.length - 1;
    }
    rindex() {
        return this.length - this.i;
    }
    rindex0() {
        return this.length - this.i - 1;
    }
    valueOf() {
        return JSON.stringify(this);
    }
}

var For = {
    type: 'block',
    parse: function (token, remainTokens) {
        const toknenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
        const variable = toknenizer.readIdentifier();
        const inStr = toknenizer.readIdentifier();
        const collection = toknenizer.readValue();
        assert(variable.size() && inStr.content === 'in' && collection, () => `illegal tag: ${token.getText()}`);
        this.variable = variable.content;
        this.collection = collection;
        this.hash = new Hash(toknenizer.remaining());
        this.templates = [];
        this.elseTemplates = [];
        let p;
        const stream = this.liquid.parser.parseStream(remainTokens)
            .on('start', () => (p = this.templates))
            .on('tag:else', () => (p = this.elseTemplates))
            .on('tag:endfor', () => stream.stop())
            .on('template', (tpl) => p.push(tpl))
            .on('end', () => {
            throw new Error(`tag ${token.getText()} not closed`);
        });
        stream.start();
    },
    render: function* (ctx, emitter) {
        const r = this.liquid.renderer;
        let collection = toEnumerable(yield evalToken(this.collection, ctx));
        if (!collection.length) {
            yield r.renderTemplates(this.elseTemplates, ctx, emitter);
            return;
        }
        const hash = yield this.hash.render(ctx);
        const offset = hash.offset || 0;
        const limit = (hash.limit === undefined) ? collection.length : hash.limit;
        collection = collection.slice(offset, offset + limit);
        if ('reversed' in hash)
            collection.reverse();
        const scope = { forloop: new ForloopDrop(collection.length) };
        ctx.push(scope);
        for (const item of collection) {
            scope[this.variable] = item;
            yield r.renderTemplates(this.templates, ctx, emitter);
            if (emitter.break) {
                emitter.break = false;
                break;
            }
            emitter.continue = false;
            scope.forloop.next();
        }
        ctx.pop();
    }
};

var capture = {
    parse: function (tagToken, remainTokens) {
        const tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
        this.variable = readVariableName(tokenizer);
        assert(this.variable, () => `${tagToken.args} not valid identifier`);
        this.templates = [];
        const stream = this.liquid.parser.parseStream(remainTokens);
        stream.on('tag:endcapture', () => stream.stop())
            .on('template', (tpl) => this.templates.push(tpl))
            .on('end', () => {
            throw new Error(`tag ${tagToken.getText()} not closed`);
        });
        stream.start();
    },
    render: function* (ctx) {
        const r = this.liquid.renderer;
        const html = yield r.renderTemplates(this.templates, ctx);
        ctx.bottom()[this.variable] = html;
    }
};
function readVariableName(tokenizer) {
    const word = tokenizer.readIdentifier().content;
    if (word)
        return word;
    const quoted = tokenizer.readQuoted();
    if (quoted)
        return evalQuotedToken(quoted);
}

var Case = {
    parse: function (tagToken, remainTokens) {
        this.cond = new Value(tagToken.args, this.liquid);
        this.cases = [];
        this.elseTemplates = [];
        let p = [];
        const stream = this.liquid.parser.parseStream(remainTokens)
            .on('tag:when', (token) => {
            p = [];
            const tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
            while (!tokenizer.end()) {
                const value = tokenizer.readValue();
                if (value) {
                    this.cases.push({
                        val: value,
                        templates: p
                    });
                }
                tokenizer.readTo(',');
            }
        })
            .on('tag:else', () => (p = this.elseTemplates))
            .on('tag:endcase', () => stream.stop())
            .on('template', (tpl) => p.push(tpl))
            .on('end', () => {
            throw new Error(`tag ${tagToken.getText()} not closed`);
        });
        stream.start();
    },
    render: function* (ctx, emitter) {
        const r = this.liquid.renderer;
        const cond = toValue(yield this.cond.value(ctx, ctx.opts.lenientIf));
        for (const branch of this.cases) {
            const val = evalToken(branch.val, ctx, ctx.opts.lenientIf);
            if (val === cond) {
                yield r.renderTemplates(branch.templates, ctx, emitter);
                return;
            }
        }
        yield r.renderTemplates(this.elseTemplates, ctx, emitter);
    }
};

var comment = {
    parse: function (tagToken, remainTokens) {
        const stream = this.liquid.parser.parseStream(remainTokens);
        stream
            .on('token', (token) => {
            if (token.name === 'endcomment')
                stream.stop();
        })
            .on('end', () => {
            throw new Error(`tag ${tagToken.getText()} not closed`);
        });
        stream.start();
    }
};

var BlockMode;
(function (BlockMode) {
    /* store rendered html into blocks */
    BlockMode[BlockMode["OUTPUT"] = 0] = "OUTPUT";
    /* output rendered html directly */
    BlockMode[BlockMode["STORE"] = 1] = "STORE";
})(BlockMode || (BlockMode = {}));
var BlockMode$1 = BlockMode;

var include = {
    parse: function (token) {
        const args = token.args;
        const tokenizer = new Tokenizer(args, this.liquid.options.operatorsTrie);
        this.file = this.liquid.options.dynamicPartials
            ? tokenizer.readValue()
            : tokenizer.readFileName();
        assert(this.file, () => `illegal argument "${token.args}"`);
        const begin = tokenizer.p;
        const withStr = tokenizer.readIdentifier();
        if (withStr.content === 'with') {
            tokenizer.skipBlank();
            if (tokenizer.peek() !== ':') {
                this.withVar = tokenizer.readValue();
            }
            else
                tokenizer.p = begin;
        }
        else
            tokenizer.p = begin;
        this.hash = new Hash(tokenizer.remaining());
    },
    render: function* (ctx, emitter) {
        const { liquid, hash, withVar, file } = this;
        const { renderer } = liquid;
        // TODO try move all liquid.parse calls into parse() section
        const filepath = ctx.opts.dynamicPartials
            ? (isQuotedToken(file)
                ? yield renderer.renderTemplates(liquid.parse(evalQuotedToken(file)), ctx)
                : yield evalToken(file, ctx))
            : file.getText();
        assert(filepath, () => `illegal filename "${file.getText()}":"${filepath}"`);
        const saved = ctx.saveRegister('blocks', 'blockMode');
        ctx.setRegister('blocks', {});
        ctx.setRegister('blockMode', BlockMode$1.OUTPUT);
        const scope = yield hash.render(ctx);
        if (withVar)
            scope[filepath] = evalToken(withVar, ctx);
        const templates = yield liquid._parseFile(filepath, ctx.opts, ctx.sync);
        ctx.push(scope);
        yield renderer.renderTemplates(templates, ctx, emitter);
        ctx.pop();
        ctx.restoreRegister(saved);
    }
};

var render = {
    parse: function (token) {
        const args = token.args;
        const tokenizer = new Tokenizer(args, this.liquid.options.operatorsTrie);
        this.file = this.liquid.options.dynamicPartials
            ? tokenizer.readValue()
            : tokenizer.readFileName();
        assert(this.file, () => `illegal argument "${token.args}"`);
        while (!tokenizer.end()) {
            tokenizer.skipBlank();
            const begin = tokenizer.p;
            const keyword = tokenizer.readIdentifier();
            if (keyword.content === 'with' || keyword.content === 'for') {
                tokenizer.skipBlank();
                if (tokenizer.peek() !== ':') {
                    const value = tokenizer.readValue();
                    if (value) {
                        const beforeAs = tokenizer.p;
                        const asStr = tokenizer.readIdentifier();
                        let alias;
                        if (asStr.content === 'as')
                            alias = tokenizer.readIdentifier();
                        else
                            tokenizer.p = beforeAs;
                        this[keyword.content] = { value, alias: alias && alias.content };
                        tokenizer.skipBlank();
                        if (tokenizer.peek() === ',')
                            tokenizer.advance();
                        continue;
                    }
                }
            }
            tokenizer.p = begin;
            break;
        }
        this.hash = new Hash(tokenizer.remaining());
    },
    render: function* (ctx, emitter) {
        const { liquid, file, hash } = this;
        const { renderer } = liquid;
        const filepath = ctx.opts.dynamicPartials
            ? (isQuotedToken(file)
                ? yield renderer.renderTemplates(liquid.parse(evalQuotedToken(file)), ctx)
                : evalToken(file, ctx))
            : file.getText();
        assert(filepath, () => `illegal filename "${file.getText()}":"${filepath}"`);
        let config = {};
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            const _a = ctx.environments.themeConfig || ctx.environments.settings || { sections: [] }, { sections } = _a, settings = __rest(_a, ["sections"]);
            config = Object.assign({}, ctx.environments, { settings });
        }
        catch (err) {
            console.error('ctx.environments.themeConfig 解构失败', err);
        }
        const childCtx = new Context(config, ctx.opts, ctx.sync);
        const scope = yield hash.render(ctx);
        if (this['with']) {
            const { value, alias } = this['with'];
            scope[alias || filepath] = evalToken(value, ctx);
        }
        childCtx.push(scope);
        if (this['for']) {
            const { value, alias } = this['for'];
            let collection = evalToken(value, ctx);
            collection = toEnumerable(collection);
            scope['forloop'] = new ForloopDrop(collection.length);
            for (const item of collection) {
                scope[alias] = item;
                const templates = yield liquid._parseFile(filepath, childCtx.opts, childCtx.sync);
                yield renderer.renderTemplates(templates, childCtx, emitter);
                scope.forloop.next();
            }
        }
        else {
            const templates = yield liquid._parseFile(filepath, childCtx.opts, childCtx.sync);
            yield renderer.renderTemplates(templates, childCtx, emitter);
        }
    }
};

var decrement = {
    parse: function (token) {
        const tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
        this.variable = tokenizer.readIdentifier().content;
    },
    render: function (context, emitter) {
        const scope = context.environments;
        if (!isNumber(scope[this.variable])) {
            scope[this.variable] = 0;
        }
        emitter.write(stringify(--scope[this.variable]));
    }
};

var cycle = {
    parse: function (tagToken) {
        const tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
        const group = tokenizer.readValue();
        tokenizer.skipBlank();
        this.candidates = [];
        if (group) {
            if (tokenizer.peek() === ':') {
                this.group = group;
                tokenizer.advance();
            }
            else
                this.candidates.push(group);
        }
        while (!tokenizer.end()) {
            const value = tokenizer.readValue();
            if (value)
                this.candidates.push(value);
            tokenizer.readTo(',');
        }
        assert(this.candidates.length, () => `empty candidates: ${tagToken.getText()}`);
    },
    render: function (ctx, emitter) {
        const group = evalToken(this.group, ctx);
        const fingerprint = `cycle:${group}:` + this.candidates.join(',');
        const groups = ctx.getRegister('cycle');
        let idx = groups[fingerprint];
        if (idx === undefined) {
            idx = groups[fingerprint] = 0;
        }
        const candidate = this.candidates[idx];
        idx = (idx + 1) % this.candidates.length;
        groups[fingerprint] = idx;
        const html = evalToken(candidate, ctx);
        emitter.write(html);
    }
};

var If = {
    parse: function (tagToken, remainTokens) {
        this.branches = [];
        this.elseTemplates = [];
        let p;
        const stream = this.liquid.parser.parseStream(remainTokens)
            .on('start', () => this.branches.push({
            cond: new Value(tagToken.args, this.liquid),
            templates: (p = [])
        }))
            .on('tag:elsif', (token) => {
            this.branches.push({
                cond: new Value(token.args, this.liquid),
                templates: p = []
            });
        })
            .on('tag:else', () => (p = this.elseTemplates))
            .on('tag:else-', () => (p = this.elseTemplates))
            .on('tag:endif', () => stream.stop())
            .on('tag:endif-', () => stream.stop())
            .on('template', (tpl) => p.push(tpl))
            .on('end', () => {
            throw new Error(`tag ${tagToken.getText()} not closed`);
        });
        stream.start();
    },
    render: function* (ctx, emitter) {
        const r = this.liquid.renderer;
        for (const branch of this.branches) {
            const cond = yield branch.cond.value(ctx, ctx.opts.lenientIf);
            if (isTruthy(cond, ctx)) {
                yield r.renderTemplates(branch.templates, ctx, emitter);
                return;
            }
        }
        yield r.renderTemplates(this.elseTemplates, ctx, emitter);
    }
};

var increment = {
    parse: function (token) {
        const tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
        this.variable = tokenizer.readIdentifier().content;
    },
    render: function (context, emitter) {
        const scope = context.environments;
        if (!isNumber(scope[this.variable])) {
            scope[this.variable] = 0;
        }
        const val = scope[this.variable];
        scope[this.variable]++;
        emitter.write(stringify(val));
    }
};

var layout = {
    parse: function (token, remainTokens) {
        const tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
        const file = this.liquid.options.dynamicPartials ? tokenizer.readValue() : tokenizer.readFileName();
        assert(file, () => `illegal argument "${token.args}"`);
        this.file = file;
        this.hash = new Hash(tokenizer.remaining());
        this.tpls = this.liquid.parser.parse(remainTokens);
    },
    render: function* (ctx, emitter) {
        const { liquid, hash, file } = this;
        const { renderer } = liquid;
        if (file.getText() === 'none') {
            ctx.setRegister('blockMode', BlockMode$1.OUTPUT);
            const html = yield renderer.renderTemplates(this.tpls, ctx);
            emitter.write(html);
            return;
        }
        const filepath = ctx.opts.dynamicPartials
            ? (isQuotedToken(file)
                ? yield renderer.renderTemplates(liquid.parse(evalQuotedToken(file)), ctx)
                : evalToken(this.file, ctx))
            : file.getText();
        assert(filepath, () => `file "${file.getText()}"("${filepath}") not available`);
        const templates = yield liquid._parseFile(filepath, ctx.opts, ctx.sync);
        // render remaining contents and store rendered results
        ctx.setRegister('blockMode', BlockMode$1.STORE);
        const html = yield renderer.renderTemplates(this.tpls, ctx);
        const blocks = ctx.getRegister('blocks');
        if (blocks[''] === undefined)
            blocks[''] = () => html;
        ctx.setRegister('blockMode', BlockMode$1.OUTPUT);
        // render the layout file use stored blocks
        ctx.push(yield hash.render(ctx));
        const partial = yield renderer.renderTemplates(templates, ctx);
        ctx.pop();
        emitter.write(partial);
    }
};

class BlockDrop extends Drop {
    constructor(
    // the block render from layout template
    superBlockRender = () => '') {
        super();
        this.superBlockRender = superBlockRender;
    }
    super() {
        return this.superBlockRender();
    }
}

var block = {
    parse(token, remainTokens) {
        const match = /\w+/.exec(token.args);
        this.block = match ? match[0] : '';
        this.tpls = [];
        const stream = this.liquid.parser.parseStream(remainTokens)
            .on('tag:endblock', () => stream.stop())
            .on('template', (tpl) => this.tpls.push(tpl))
            .on('end', () => {
            throw new Error(`tag ${token.getText()} not closed`);
        });
        stream.start();
    },
    *render(ctx, emitter) {
        const blockRender = this.getBlockRender(ctx);
        yield this.emitHTML(ctx, emitter, blockRender);
    },
    getBlockRender(ctx) {
        const { liquid, tpls } = this;
        const extendedBlockRender = ctx.getRegister('blocks')[this.block];
        const defaultBlockRender = function* (superBlock) {
            ctx.push({ block: superBlock });
            const result = yield liquid.renderer.renderTemplates(tpls, ctx);
            ctx.pop();
            return result;
        };
        return extendedBlockRender
            ? (superBlock) => extendedBlockRender(new BlockDrop(() => defaultBlockRender(superBlock)))
            : defaultBlockRender;
    },
    *emitHTML(ctx, emitter, blockRender) {
        if (ctx.getRegister('blockMode', BlockMode$1.OUTPUT) === BlockMode$1.STORE) {
            ctx.getRegister('blocks')[this.block] = blockRender;
        }
        else {
            emitter.write(yield blockRender(new BlockDrop()));
        }
    }
};

var raw = {
    parse: function (tagToken, remainTokens) {
        this.tokens = [];
        const stream = this.liquid.parser.parseStream(remainTokens);
        stream
            .on('token', (token) => {
            if (token.name === 'endraw')
                stream.stop();
            else
                this.tokens.push(token);
        })
            .on('end', () => {
            throw new Error(`tag ${tagToken.getText()} not closed`);
        });
        stream.start();
    },
    render: function () {
        return this.tokens.map((token) => token.getText()).join('');
    }
};

class TablerowloopDrop extends ForloopDrop {
    constructor(length, cols) {
        super(length);
        this.length = length;
        this.cols = cols;
    }
    row() {
        return Math.floor(this.i / this.cols) + 1;
    }
    col0() {
        return (this.i % this.cols);
    }
    col() {
        return this.col0() + 1;
    }
    col_first() {
        return this.col0() === 0;
    }
    col_last() {
        return this.col() === this.cols;
    }
}

var tablerow = {
    parse: function (tagToken, remainTokens) {
        const tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
        this.variable = tokenizer.readIdentifier();
        tokenizer.skipBlank();
        const tmp = tokenizer.readIdentifier();
        assert(tmp && tmp.content === 'in', () => `illegal tag: ${tagToken.getText()}`);
        this.collection = tokenizer.readValue();
        this.hash = new Hash(tokenizer.remaining());
        this.templates = [];
        let p;
        const stream = this.liquid.parser.parseStream(remainTokens)
            .on('start', () => (p = this.templates))
            .on('tag:endtablerow', () => stream.stop())
            .on('template', (tpl) => p.push(tpl))
            .on('end', () => {
            throw new Error(`tag ${tagToken.getText()} not closed`);
        });
        stream.start();
    },
    render: function* (ctx, emitter) {
        let collection = toEnumerable(yield evalToken(this.collection, ctx));
        const hash = yield this.hash.render(ctx);
        const offset = hash.offset || 0;
        const limit = (hash.limit === undefined) ? collection.length : hash.limit;
        collection = collection.slice(offset, offset + limit);
        const cols = hash.cols || collection.length;
        const r = this.liquid.renderer;
        const tablerowloop = new TablerowloopDrop(collection.length, cols);
        const scope = { tablerowloop };
        ctx.push(scope);
        for (let idx = 0; idx < collection.length; idx++, tablerowloop.next()) {
            scope[this.variable.content] = collection[idx];
            if (tablerowloop.col0() === 0) {
                if (tablerowloop.row() !== 1)
                    emitter.write('</tr>');
                emitter.write(`<tr class="row${tablerowloop.row()}">`);
            }
            emitter.write(`<td class="col${tablerowloop.col()}">`);
            yield r.renderTemplates(this.templates, ctx, emitter);
            emitter.write('</td>');
        }
        if (collection.length)
            emitter.write('</tr>');
        ctx.pop();
    }
};

var unless = {
    parse: function (tagToken, remainTokens) {
        this.templates = [];
        this.branches = [];
        this.elseTemplates = [];
        let p;
        const stream = this.liquid.parser.parseStream(remainTokens)
            .on('start', () => {
            p = this.templates;
            this.cond = new Value(tagToken.args, this.liquid);
        })
            .on('tag:elsif', (token) => {
            this.branches.push({
                cond: new Value(token.args, this.liquid),
                templates: p = []
            });
        })
            .on('tag:else', () => (p = this.elseTemplates))
            .on('tag:endunless', () => stream.stop())
            .on('template', (tpl) => p.push(tpl))
            .on('end', () => {
            throw new Error(`tag ${tagToken.getText()} not closed`);
        });
        stream.start();
    },
    render: function* (ctx, emitter) {
        const r = this.liquid.renderer;
        const cond = yield this.cond.value(ctx, ctx.opts.lenientIf);
        if (isFalsy(cond, ctx)) {
            yield r.renderTemplates(this.templates, ctx, emitter);
            return;
        }
        for (const branch of this.branches) {
            const cond = yield branch.cond.value(ctx, ctx.opts.lenientIf);
            if (isTruthy(cond, ctx)) {
                yield r.renderTemplates(branch.templates, ctx, emitter);
                return;
            }
        }
        yield r.renderTemplates(this.elseTemplates, ctx, emitter);
    }
};

var Break = {
    render: function (ctx, emitter) {
        emitter.break = true;
    }
};

var Continue = {
    render: function (ctx, emitter) {
        emitter.continue = true;
    }
};

var echo = {
    parse: function (tagToken) {
        const args = ` {{ ${tagToken.args} }} `;
        this.tokenizer = new Tokenizer(args, this.liquid.options.operatorsTrie);
    },
    render: function* (ctx, emitter) {
        const { liquid, tokenizer } = this;
        const tokens = tokenizer.readTopLevelTokens(liquid.options);
        const templates = liquid.parser.parse(tokens);
        for (const tpl of templates) {
            try {
                const html = yield tpl.render(ctx, emitter);
                html && emitter.write(html);
            }
            catch (err) {
                console.error('liquid tag parseError', err);
            }
        }
    }
};

/******
 * 不同类型自定义参数配置
 * 自定义参数优先级低于标签应用层传入的变量
 * 自定义参数可以使用环境变量，如 id: '{{ product.id }}-1234'
 */
const formTypeMapper = {
    product: {
        action: '/cart/add'
    }
};
// 将args解析成 json,并添加form默认属性
function parseArgsToFormJson(args) {
    const argsList = args.split(',').map((i) => i.replace(/\s/g, ''));
    const defaultArgsJson = {
        enctype: 'multipart/form-data',
        method: 'post',
        'accept-charset': 'UTF-8',
        type: ''
    };
    if (!argsList.length) {
        return defaultArgsJson;
    }
    const first = argsList[0];
    // 第一条数据认为是 类型
    const type = first.replace(/['"]/g, '');
    const isValidateType = type.indexOf(':') === -1 && !!type;
    let result = defaultArgsJson;
    if (isValidateType) {
        result.type = type;
        argsList.shift();
    }
    result = Object.assign({}, result, formTypeMapper[type]);
    argsList.forEach((item) => {
        const arr = item.split(':');
        if (!arr[1])
            return;
        result[arr[0]] = getLiquidValue(arr[1]);
    });
    return result;
}
function parseToForm(args) {
    const argsJson = parseArgsToFormJson(args);
    const defaultFormStr = `<form ${joinJsonToStr(argsJson)}>
    <input type="hidden" value="${argsJson.type || ''}" name="form_type">
    <input type="hidden" name="utf8" value="✓">
  `;
    return defaultFormStr;
}
var form = {
    parse: function (tagToken, remainTokens) {
        const tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
        this.variable = readVariableName$1(tokenizer);
        this.templates = [];
        const stream = this.liquid.parser.parseStream(remainTokens);
        this.args = parseToForm(tagToken.args);
        stream.on('tag:endform', () => stream.stop())
            .on('template', (tpl) => {
            this.templates.push(tpl);
        })
            .on('end', () => {
            throw new Error(`tag ${tagToken.getText()} not closed`);
        });
        stream.start();
    },
    render: function* (ctx, emitter) {
        const r = this.liquid.renderer;
        const html = yield r.renderTemplates(this.templates, ctx);
        const str = `${this.args}${html}</form>`;
        return str;
    }
};
function readVariableName$1(tokenizer) {
    const word = tokenizer.readIdentifier().content;
    if (word)
        return word;
    const quoted = tokenizer.readQuoted();
    if (quoted)
        return evalQuotedToken(quoted);
}

var javascript = {
    parse: function (tagToken, remainTokens) {
        const tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
        this.variable = readVariableName$2(tokenizer);
        this.templates = [];
        const stream = this.liquid.parser.parseStream(remainTokens);
        stream.on('tag:endjavascript', () => stream.stop())
            .on('template', (tpl) => {
            this.templates.push(tpl);
        })
            .on('end', () => {
            throw new Error(`tag ${tagToken.getText()} not closed`);
        });
        stream.start();
    },
    render: function* (ctx, emitter) {
        const r = this.liquid.renderer;
        const html = yield r.renderTemplates(this.templates, ctx);
        const str = `<script>
        window.addEventListener('load',function(){${html}})
    </script>`;
        return str;
    }
};
function readVariableName$2(tokenizer) {
    const word = tokenizer.readIdentifier().content;
    if (word)
        return word;
    const quoted = tokenizer.readQuoted();
    if (quoted)
        return evalQuotedToken(quoted);
}

var style = {
    parse: function (tagToken, remainTokens) {
        const tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
        this.variable = readVariableName$3(tokenizer);
        this.templates = [];
        const stream = this.liquid.parser.parseStream(remainTokens);
        stream.on('tag:endstyle', () => stream.stop())
            .on('template', (tpl) => {
            this.templates.push(tpl);
        })
            .on('end', () => {
            throw new Error(`tag ${tagToken.getText()} not closed`);
        });
        stream.start();
    },
    render: function* (ctx, emitter) {
        const r = this.liquid.renderer;
        const html = yield r.renderTemplates(this.templates, ctx);
        const str = `<style>
    ${html}
    </style>`;
        return str;
    }
};
function readVariableName$3(tokenizer) {
    const word = tokenizer.readIdentifier().content;
    if (word)
        return word;
    const quoted = tokenizer.readQuoted();
    if (quoted)
        return evalQuotedToken(quoted);
}

/**
 * 自定义 liquid 标签
 * 方案是在liquid 里面 每行 两边添加 {%  %} 然后重新渲染
 * 示例：
 * {%- liquid
      assign columns = section.blocks.size
      if columns > 3
        assign columns = 3
      endif
    -%}
 */
// 将liquid标签 转为 两边添加 {%%}
function parseLiquidToNormal(args) {
    const list = args.split(/\n/).map(str => {
        if (/[\S]/g.test(str)) {
            const trimedStr = str.replace(/(^\s*)|(\s*$)/g, '');
            return `{% ${trimedStr} %}`;
        }
        return '';
    });
    const notEmptyList = list.filter(item => !!item);
    return notEmptyList.join(' \n');
}
var liquid = {
    parse: function (tagToken) {
        const args = parseLiquidToNormal(tagToken.args);
        const tokenizer = new Tokenizer(args, this.liquid.options.operatorsTrie);
        const tokens = tokenizer.readTopLevelTokens(this.liquid.options);
        this.templates = this.liquid.parser.parse(tokens);
        this.key = tokenizer.readIdentifier().content;
    },
    render: function* (ctx, emitter) {
        ctx.bottom()[this.key] = yield this.liquid.renderer.renderTemplates(this.templates, ctx, emitter);
    }
};

var schema = {
    parse: function (tagToken, remainTokens) {
        this.tokens = [];
        const stream = this.liquid.parser.parseStream(remainTokens);
        stream
            .on('token', (tagToken) => {
            if (tagToken['name'] === 'endschema')
                stream.stop();
            else
                this.tokens.push(tagToken);
        })
            .on('end', () => {
            throw new Error(`tag ${tagToken['raw']} not closed`);
        });
        stream.start();
    },
    render: function* (ctx, emitter) {
        return '';
    }
};

var paginate = {
    parse: function (tagToken, remainTokens) {
        this.tokens = [];
        const stream = this.liquid.parser.parseStream(remainTokens);
        stream
            .on('token', (tagToken) => {
            if (tagToken['name'] === 'endpaginate')
                stream.stop();
            else
                this.tokens.push(tagToken);
        })
            .on('end', () => {
            throw new Error(`tag ${tagToken['raw']} not closed`);
        });
        stream.start();
    },
    render: function* (ctx, emitter) {
        return '';
    }
};

const transformThemeConfig = (themeConfig) => {
    if (!themeConfig)
        return {};
    const config = JSON.parse(themeConfig);
    // 将blocks 改为数组
    Object.keys(config.current.sections).forEach((key) => {
        const item = config.current.sections[key];
        const blocks = [];
        if (item.blocks) {
            Object.keys(item.blocks).forEach((k) => {
                blocks.push(item.blocks[k]);
            });
        }
        item.blocks = blocks;
    });
    return config;
};

// 不同模块 容器添加默认dom
const wrapperMapper = {
    header: '<div id="shopify-section-header" class="shopify-section" data-shopify-editor-section="{"id":"announcement-bar","type":"announcement-bar","disabled":false}">'
};
var section = {
    parse: function (tagToken) {
        const tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
        this.file = tokenizer.readValue();
        // const domain = this.liquid.options.root;
        const themeScope = new ThemeDataScope();
        this.domainFiles = themeScope.rootData;
        // console.log(domainFiles[1].data, 'ddd')
        const settingData = themeScope.getTpl('config/settings_data.json');
        this.themeConfig = transformThemeConfig(settingData).current;
        this.hash = new Hash(tokenizer.remaining());
    },
    render: function* (ctx) {
        const { liquid, file, hash } = this;
        const { renderer } = liquid;
        // 对 指定模块 添加 全局配置的作用域
        const _a = this.themeConfig, { sections } = _a, settings = __rest(_a, ["sections"]);
        let filePath = isQuotedToken(this.file) ? yield renderer.renderTemplates(liquid.parse(evalQuotedToken(file)), ctx) : evalToken(file, ctx);
        // const templates = getSectionLiquid(this.domainFiles, filePath)
        if (filePath.indexOf('sections/') < 0) {
            filePath = `sections/${filePath}`;
        }
        let section = {};
        if (Array.isArray(sections)) {
            section = sections && sections.find((item) => item.type === filePath);
        }
        else {
            section = sections[filePath];
        }
        const scope = yield hash.render(ctx);
        // ctx.push(scope)
        const childCtx = Object.assign({}, ctx.environments, { section, settings }, scope, ctx.globals);
        // 官方在这里用的是 renderer.renderTemplates
        let html = yield this.liquid.renderFile(filePath, childCtx);
        if (wrapperMapper[filePath]) {
            html = `${wrapperMapper[filePath]} ${html} </div>`;
        }
        return html;
    }
};

const tags = {
    assign, 'for': For, capture, 'case': Case, comment, include, render, decrement, increment, cycle, 'if': If, layout, block, raw, tablerow, unless, 'break': Break, 'continue': Continue, echo, form, javascript, style, section, liquid, schema, paginate
};

const escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&#34;',
    "'": '&#39;'
};
const unescapeMap = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&#34;': '"',
    '&#39;': "'"
};
function escape(str) {
    return stringify(str).replace(/&|<|>|"|'/g, m => escapeMap[m]);
}
function unescape(str) {
    return String(str).replace(/&(amp|lt|gt|#34|#39);/g, m => unescapeMap[m]);
}
function escapeOnce(str) {
    return escape(unescape(str));
}
function newlineToBr(v) {
    return v.replace(/\n/g, '<br />\n');
}
function stripHtml(v) {
    return v.replace(/<script.*?<\/script>|<!--.*?-->|<style.*?<\/style>|<.*?>/g, '');
}
// eslint-disable-next-line @typescript-eslint/camelcase
// export function strip_html(v: string) {
//   return v.replace(/<script.*?<\/script>|<!--.*?-->|<style.*?<\/style>|<.*?>/g, '')
// }

const abs = Math.abs;
const atLeast = Math.max;
const atMost = Math.min;
const ceil = Math.ceil;
const dividedBy = (v, arg) => v / arg;
const floor = Math.floor;
const minus = (v, arg) => v - arg;
const modulo = (v, arg) => v % arg;
const times = (v, arg) => v * arg;
function round(v, arg = 0) {
    const amp = Math.pow(10, arg);
    return Math.round(v * amp) / amp;
}
function plus(v, arg) {
    return Number(v) + Number(arg);
}
function sortNatural(input, property) {
    if (!input || !input.sort)
        return [];
    if (property !== undefined) {
        return [...input].sort((lhs, rhs) => caseInsensitiveCompare(lhs[property], rhs[property]));
    }
    return [...input].sort(caseInsensitiveCompare);
}

const urlDecode = (x) => x.split('+').map(decodeURIComponent).join(' ');
const urlEncode = (x) => x.split(' ').map(encodeURIComponent).join('+');
const urlEscape = (x) => encodeURIComponent(x);

const join = (v, arg) => v.join(arg === undefined ? ' ' : arg);
const last$1 = (v) => isArray(v) ? last(v) : '';
const first = (v) => isArray(v) ? v[0] : '';
const reverse = (v) => [...v].reverse();
function sort(arr, property) {
    const getValue = (obj) => property ? this.context.getFromScope(obj, property.split('.')) : obj;
    return toArray(arr).sort((lhs, rhs) => {
        lhs = getValue(lhs);
        rhs = getValue(rhs);
        return lhs < rhs ? -1 : (lhs > rhs ? 1 : 0);
    });
}
const size = (v) => (v && v.length) || 0;
function map(arr, property) {
    return toArray(arr).map(obj => this.context.getFromScope(obj, property.split('.')));
}
function compact(arr) {
    return toArray(arr).filter(x => !isNil(x));
}
function concat(v, arg) {
    return toArray(v).concat(arg);
}
function slice(v, begin, length = 1) {
    begin = begin < 0 ? v.length + begin : begin;
    return v.slice(begin, begin + length);
}
function where(arr, property, expected) {
    return toArray(arr).filter(obj => {
        const value = this.context.getFromScope(obj, String(property).split('.'));
        return expected === undefined ? isTruthy(value, this.context) : value === expected;
    });
}
function uniq(arr) {
    const u = {};
    return (arr || []).filter(val => {
        if (u.hasOwnProperty(String(val)))
            return false;
        u[String(val)] = true;
        return true;
    });
}

const rFormat = /%([-_0^#:]+)?(\d+)?([EO])?(.)/;
const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
];
const dayNames = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
const monthNamesShort = monthNames.map(abbr);
const dayNamesShort = dayNames.map(abbr);
const suffixes = {
    1: 'st',
    2: 'nd',
    3: 'rd',
    'default': 'th'
};
function abbr(str) {
    return str.slice(0, 3);
}
// prototype extensions
function daysInMonth(d) {
    const feb = isLeapYear(d) ? 29 : 28;
    return [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
function getDayOfYear(d) {
    let num = 0;
    for (let i = 0; i < d.getMonth(); ++i) {
        num += daysInMonth(d)[i];
    }
    return num + d.getDate();
}
function getWeekOfYear(d, startDay) {
    // Skip to startDay of this week
    const now = getDayOfYear(d) + (startDay - d.getDay());
    // Find the first startDay of the year
    const jan1 = new Date(d.getFullYear(), 0, 1);
    const then = (7 - jan1.getDay() + startDay);
    return String(Math.floor((now - then) / 7) + 1);
}
function isLeapYear(d) {
    const year = d.getFullYear();
    return !!((year & 3) === 0 && (year % 100 || (year % 400 === 0 && year)));
}
function getSuffix(d) {
    const str = d.getDate().toString();
    const index = parseInt(str.slice(-1));
    return suffixes[index] || suffixes['default'];
}
function century(d) {
    return parseInt(d.getFullYear().toString().substring(0, 2), 10);
}
// default to 0
const padWidths = {
    d: 2,
    e: 2,
    H: 2,
    I: 2,
    j: 3,
    k: 2,
    l: 2,
    L: 3,
    m: 2,
    M: 2,
    S: 2,
    U: 2,
    W: 2
};
// default to '0'
const padChars = {
    a: ' ',
    A: ' ',
    b: ' ',
    B: ' ',
    c: ' ',
    e: ' ',
    k: ' ',
    l: ' ',
    p: ' ',
    P: ' '
};
const formatCodes = {
    a: (d) => dayNamesShort[d.getDay()],
    A: (d) => dayNames[d.getDay()],
    b: (d) => monthNamesShort[d.getMonth()],
    B: (d) => monthNames[d.getMonth()],
    c: (d) => d.toLocaleString(),
    C: (d) => century(d),
    d: (d) => d.getDate(),
    e: (d) => d.getDate(),
    H: (d) => d.getHours(),
    I: (d) => String(d.getHours() % 12 || 12),
    j: (d) => getDayOfYear(d),
    k: (d) => d.getHours(),
    l: (d) => String(d.getHours() % 12 || 12),
    L: (d) => d.getMilliseconds(),
    m: (d) => d.getMonth() + 1,
    M: (d) => d.getMinutes(),
    N: (d, opts) => {
        const width = Number(opts.width) || 9;
        const str = String(d.getMilliseconds()).substr(0, width);
        return padEnd(str, width, '0');
    },
    p: (d) => (d.getHours() < 12 ? 'AM' : 'PM'),
    P: (d) => (d.getHours() < 12 ? 'am' : 'pm'),
    q: (d) => getSuffix(d),
    s: (d) => Math.round(d.valueOf() / 1000),
    S: (d) => d.getSeconds(),
    u: (d) => d.getDay() || 7,
    U: (d) => getWeekOfYear(d, 0),
    w: (d) => d.getDay(),
    W: (d) => getWeekOfYear(d, 1),
    x: (d) => d.toLocaleDateString(),
    X: (d) => d.toLocaleTimeString(),
    y: (d) => d.getFullYear().toString().substring(2, 4),
    Y: (d) => d.getFullYear(),
    z: (d, opts) => {
        const offset = d.getTimezoneOffset();
        const nOffset = Math.abs(offset);
        const h = Math.floor(nOffset / 60);
        const m = nOffset % 60;
        return (offset > 0 ? '-' : '+') +
            padStart(h, 2, '0') +
            (opts.flags[':'] ? ':' : '') +
            padStart(m, 2, '0');
    },
    't': () => '\t',
    'n': () => '\n',
    '%': () => '%'
};
formatCodes.h = formatCodes.b;
function strftime (inputDate, formatStr) {
    let d = inputDate;
    if (d instanceof TimezoneDate) {
        d = d.getDisplayDate();
    }
    let output = '';
    let remaining = formatStr;
    let match;
    while ((match = rFormat.exec(remaining))) {
        output += remaining.slice(0, match.index);
        remaining = remaining.slice(match.index + match[0].length);
        output += format(d, match);
    }
    return output + remaining;
}
function format(d, match) {
    const [input, flagStr = '', width, modifier, conversion] = match;
    const convert = formatCodes[conversion];
    if (!convert)
        return input;
    const flags = {};
    for (const flag of flagStr)
        flags[flag] = true;
    let ret = String(convert(d, { flags, width, modifier }));
    let padChar = padChars[conversion] || '0';
    let padWidth = width || padWidths[conversion] || 0;
    if (flags['^'])
        ret = ret.toUpperCase();
    else if (flags['#'])
        ret = changeCase(ret);
    if (flags['_'])
        padChar = ' ';
    else if (flags['0'])
        padChar = '0';
    if (flags['-'])
        padWidth = 0;
    return padStart(ret, padWidth, padChar);
}
class TimezoneDate extends Date {
    constructor(dateString) {
        super(dateString);
        this.dateString = dateString;
        this.ISO8601_TIMEZONE_PATTERN = /([zZ]|([+-])(\d{2}):(\d{2}))$/;
        this.inputTimezoneOffset = 0;
        const m = dateString.match(this.ISO8601_TIMEZONE_PATTERN);
        if (m && m[1] === 'Z') {
            this.inputTimezoneOffset = this.getTimezoneOffset();
        }
        else if (m && m[2] && m[3] && m[4]) {
            const [, , sign, hours, minutes] = m;
            const delta = (sign === '+' ? 1 : -1) * (parseInt(hours, 10) * 60 + parseInt(minutes, 10));
            this.inputTimezoneOffset = this.getTimezoneOffset() + delta;
        }
    }
    getDisplayDate() {
        return new Date((+this) + this.inputTimezoneOffset * 60 * 1000);
    }
}

function date(v, arg) {
    let date = v;
    if (v === 'now' || v === 'today') {
        date = new Date();
    }
    else if (isNumber(v)) {
        date = new Date(v * 1000);
    }
    else if (isString(v)) {
        if (/^\d+$/.test(v)) {
            date = new Date(+v * 1000);
        }
        else if (this.context.opts.preserveTimezones) {
            date = new TimezoneDate(v);
        }
        else {
            date = new Date(v);
        }
    }
    return isValidDate(date) ? strftime(date, arg) : v;
}
function isValidDate(date) {
    return date instanceof Date && !isNaN(date.getTime());
}

function Default(v, arg) {
    if (isArray(v) || isString(v))
        return v.length ? v : arg;
    return isFalsy(toValue(v), this.context) ? arg : v;
}
function json(v) {
    return JSON.stringify(v);
}

/**
 * String related filters
 *
 * * prefer stringify() to String() since `undefined`, `null` should eval ''
 */
function append(v, arg) {
    assert(arguments.length === 2, () => 'append expect 2 arguments');
    return stringify(v) + stringify(arg);
}
function prepend(v, arg) {
    assert(arguments.length === 2, () => 'prepend expect 2 arguments');
    return stringify(arg) + stringify(v);
}
function lstrip(v) {
    return stringify(v).replace(/^\s+/, '');
}
function downcase(v) {
    return stringify(v).toLowerCase();
}
function upcase(str) {
    return stringify(str).toUpperCase();
}
function remove(v, arg) {
    return stringify(v).split(String(arg)).join('');
}
function removeFirst(v, l) {
    return stringify(v).replace(String(l), '');
}
function rstrip(str) {
    return stringify(str).replace(/\s+$/, '');
}
function split(v, arg) {
    return stringify(v).split(String(arg));
}
function strip(v) {
    return stringify(v).trim();
}
function stripNewlines(v) {
    return stringify(v).replace(/\n/g, '');
}
function capitalize(str) {
    str = stringify(str);
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function replace(v, pattern, replacement) {
    return stringify(v).split(String(pattern)).join(replacement);
}
function replaceFirst(v, arg1, arg2) {
    return stringify(v).replace(String(arg1), arg2);
}
function truncate(v, l = 50, o = '...') {
    v = stringify(v);
    if (v.length <= l)
        return v;
    return v.substr(0, l - o.length) + o;
}
function truncatewords(v, l = 15, o = '...') {
    const arr = v.split(/\s+/);
    let ret = arr.slice(0, l).join(' ');
    if (arr.length >= l)
        ret += o;
    return ret;
}

const quoted = /^'[^']*'|"[^"]*"$/;
let currentLanguageJsonObj = {};
function getI18nLabel(nameString, currentLanguageJsonObj, args) {
    // let nameString = 't:sections.image-with-text.settings.image.label'
    let node = currentLanguageJsonObj;
    const labelTreeList = nameString.split('.');
    for (let i = 0; i < labelTreeList.length; i++) {
        const currentNode = labelTreeList[i];
        if (node && isPlainObject(node)) {
            node = node[currentNode];
        }
    }
    /**
       * 如果使用该 filter 时传入了两个参数，则认为当前翻译中有变量，需要进行变量替换
       */
    if (isArray(args) && args.length === 2 && isString(node)) {
        const [variableKey, variableValue] = args;
        const regexp = new RegExp(`{{\\s?${variableKey}\\s?}}`, 'g');
        node = node.replace(regexp, variableValue);
    }
    return node;
}
function t(variable, args) {
    if (quoted.test(variable)) {
        return variable;
    }
    const language = 'zh-CN';
    const domainFiles = (new ThemeDataScope()).rootData;
    const locales = domainFiles.filter((item) => item.name === 'locales')[0].data;
    let currentLanguageJson;
    try {
        currentLanguageJson = locales.filter((item) => item.name === `${language}.json`)[0].data;
    }
    catch (error) {
        console.log(`该模板C端没有适配该语言: ${language}, 使用默认语言包 en.default.json`);
        currentLanguageJson = locales.filter((item) => item.name === `en.default.json`)[0].data;
    }
    currentLanguageJsonObj = JSON.parse(currentLanguageJson.value);
    const i18nLabel = getI18nLabel(variable, currentLanguageJsonObj, args);
    return i18nLabel;
}

function imageUrl(v, ...arg) {
    arg.forEach((item) => {
        const existQuery = v.indexOf('?') > -1;
        const prefix = existQuery ? '&' : '?';
        v += (prefix + item[0] + '=' + item[1]);
    });
    return v;
}

function stylesheetTag(href) {
    return `<link href="${href}" rel="stylesheet" type="text/css" media="all">`;
}

const getPublicUrlOfAsset = (array, assetName) => {
    let rst = '';
    function deep(_array) {
        if (!_array)
            return;
        for (let i = 0; i < _array.length; i++) {
            if (_array[i].type === 'file' && _array[i].name === assetName) {
                rst = _array[i].data.public_url;
                break;
            }
            if (_array[i].type === 'folder') {
                deep(_array[i].data);
            }
        }
    }
    deep(array);
    return rst;
};
function assetUrl(variable) {
    const domainFiles = (new ThemeDataScope()).rootData;
    const assetsPublicUrl = getPublicUrlOfAsset(domainFiles, variable);
    return assetsPublicUrl;
}

function defaultErrors(formErrors) {
    return `Please enter a valid ${formErrors.error_strings}`;
}

const toColorString = (colorObject) => {
    try {
        const { r, g, b, a } = colorObject;
        return `rgba(${r},${g},${b},${a})`;
    }
    catch (error) {
        return '';
    }
};
/**
 * 自定义 color 过滤器，并将 color 过滤器注册到 Liquid 中，color 过滤器用于颜色转换
 *
 * @param {object} Liquid
 * @see https://liquidjs.com/zh-cn/tutorials/plugins.html
 */
function color(x) {
    return toColorString(x);
}

/**
 * 自定义 money_with_currency 过滤器，并将 money_with_currency 过滤器注册到 Liquid 中
 * money_with_currency 过滤器用于将数值转换为带货币标识的字符串
 *
 * @param {object} Liquid
 * @see https://liquidjs.com/zh-cn/tutorials/plugins.html
 */
function moneyWithCurrency(price) {
    return `$ ${String(price)} USD`;
}

/**
 * 自定义 money 过滤器，并将 money 过滤器注册到 Liquid 中
 * money 过滤器用于将数值转换为不带货币标识的字符串
 *
 * @param {object} Liquid
 * @see https://liquidjs.com/zh-cn/tutorials/plugins.html
 */
function money(price) {
    return `$ ${String(price)}`;
}



var builtinFilters = /*#__PURE__*/Object.freeze({
  escape: escape,
  escapeOnce: escapeOnce,
  newlineToBr: newlineToBr,
  stripHtml: stripHtml,
  abs: abs,
  atLeast: atLeast,
  atMost: atMost,
  ceil: ceil,
  dividedBy: dividedBy,
  floor: floor,
  minus: minus,
  modulo: modulo,
  times: times,
  round: round,
  plus: plus,
  sortNatural: sortNatural,
  urlDecode: urlDecode,
  urlEncode: urlEncode,
  urlEscape: urlEscape,
  join: join,
  last: last$1,
  first: first,
  reverse: reverse,
  sort: sort,
  size: size,
  map: map,
  compact: compact,
  concat: concat,
  slice: slice,
  where: where,
  uniq: uniq,
  date: date,
  Default: Default,
  json: json,
  append: append,
  prepend: prepend,
  lstrip: lstrip,
  downcase: downcase,
  upcase: upcase,
  remove: remove,
  removeFirst: removeFirst,
  rstrip: rstrip,
  split: split,
  strip: strip,
  stripNewlines: stripNewlines,
  capitalize: capitalize,
  replace: replace,
  replaceFirst: replaceFirst,
  truncate: truncate,
  truncatewords: truncatewords,
  t: t,
  imageUrl: imageUrl,
  stylesheetTag: stylesheetTag,
  assetUrl: assetUrl,
  defaultErrors: defaultErrors,
  color: color,
  moneyWithCurrency: moneyWithCurrency,
  money: money
});

class TagMap {
    constructor() {
        this.impls = {};
    }
    get(name) {
        const impl = this.impls[name];
        assert(impl, () => `tag "${name}" not found`);
        return impl;
    }
    set(name, impl) {
        this.impls[name] = impl;
    }
}

class FilterMap {
    constructor(strictFilters, liquid) {
        this.strictFilters = strictFilters;
        this.liquid = liquid;
        this.impls = {};
    }
    get(name) {
        const impl = this.impls[name];
        assert(impl || !this.strictFilters, () => `undefined filter: ${name}`);
        return impl;
    }
    set(name, impl) {
        this.impls[name] = impl;
    }
    create(name, args) {
        return new Filter(name, this.get(name), args, this.liquid);
    }
}

class Liquid {
    constructor(opts = {}) {
        this.options = applyDefault(normalize(opts));
        this.parser = new Parser(this);
        this.renderer = new Render();
        this.filters = new FilterMap(this.options.strictFilters, this);
        this.tags = new TagMap();
        forOwn(tags, (conf, name) => this.registerTag(snakeCase(name), conf));
        forOwn(builtinFilters, (handler, name) => this.registerFilter(snakeCase(name), handler));
    }
    parse(html, filepath) {
        const tokenizer = new Tokenizer(html, this.options.operatorsTrie, filepath);
        const tokens = tokenizer.readTopLevelTokens(this.options);
        return this.parser.parse(tokens);
    }
    _render(tpl, scope, opts, sync) {
        const options = Object.assign({}, this.options, normalize(opts));
        const ctx = new Context(scope, options, sync);
        const emitter = new Emitter(options.keepOutputType);
        return this.renderer.renderTemplates(tpl, ctx, emitter);
    }
    async render(tpl, scope, opts) {
        return toPromise(this._render(tpl, scope, opts, false));
    }
    renderSync(tpl, scope, opts) {
        return toValue$1(this._render(tpl, scope, opts, true));
    }
    _parseAndRender(html, scope, opts, sync) {
        const tpl = this.parse(html);
        return this._render(tpl, scope, opts, sync);
    }
    async parseAndRender(html, scope, opts) {
        return toPromise(this._parseAndRender(html, scope, opts, false));
    }
    parseAndRenderSync(html, scope, opts) {
        return toValue$1(this._parseAndRender(html, scope, opts, true));
    }
    *_parseFile(file, opts, sync) {
        const options = Object.assign({}, this.options, normalize(opts));
        const paths = options.root.map(root => options.fs.resolve(root, file, options.extname));
        if (options.fs.fallback !== undefined) {
            const filepath = options.fs.fallback(file);
            if (filepath !== undefined)
                paths.push(filepath);
        }
        for (const filepath of paths) {
            const { cache } = options;
            if (cache) {
                const tpls = yield cache.read(filepath);
                if (tpls)
                    return tpls;
            }
            if (!(sync ? options.fs.existsSync(filepath) : yield options.fs.exists(filepath)))
                continue;
            const tpl = this.parse(sync ? options.fs.readFileSync(filepath) : yield options.fs.readFile(filepath), filepath);
            if (cache)
                cache.write(filepath, tpl);
            return tpl;
        }
        throw this.lookupError(file, options.root);
    }
    async parseFile(file, opts) {
        return toPromise(this._parseFile(file, opts, false));
    }
    parseFileSync(file, opts) {
        return toValue$1(this._parseFile(file, opts, true));
    }
    async renderFile(file, ctx, opts) {
        const templates = await this.parseFile(file, opts);
        return this.render(templates, ctx, opts);
    }
    renderFileSync(file, ctx, opts) {
        const templates = this.parseFileSync(file, opts);
        return this.renderSync(templates, ctx, opts);
    }
    _evalValue(str, ctx) {
        const value = new Value(str, this);
        return value.value(ctx, false);
    }
    async evalValue(str, ctx) {
        return toPromise(this._evalValue(str, ctx));
    }
    evalValueSync(str, ctx) {
        return toValue$1(this._evalValue(str, ctx));
    }
    registerFilter(name, filter) {
        this.filters.set(name, filter);
    }
    registerTag(name, tag) {
        this.tags.set(name, tag);
    }
    plugin(plugin) {
        return plugin.call(this, Liquid);
    }
    express() {
        const self = this; // eslint-disable-line
        return function (filePath, ctx, callback) {
            const opts = { root: [...normalizeStringArray(this.root), ...self.options.root] };
            self.renderFile(filePath, ctx, opts).then(html => callback(null, html), callback);
        };
    }
    lookupError(file, roots) {
        const err = new Error('ENOENT');
        err.message = `ENOENT: Failed to lookup "${file}" in "${roots}"`;
        err.code = 'ENOENT';
        return err;
    }
    /**
     * @deprecated use parseFile instead
     */
    async getTemplate(file, opts) {
        return this.parseFile(file, opts);
    }
    /**
     * @deprecated use parseFileSync instead
     */
    getTemplateSync(file, opts) {
        return this.parseFileSync(file, opts);
    }
}

export { AssertionError, Context, Drop, Emitter, Expression, Hash, InternalUndefinedVariableError, Liquid, LiquidError, ParseError, ParseStream, RenderError, TagToken, Token, TokenKind, TokenizationError, Tokenizer, typeGuards as TypeGuards, UndefinedVariableError, Value, assert, createTrie, defaultOperators, evalQuotedToken, evalToken, isFalsy, isTruthy, toPromise, toThenable, toValue };
