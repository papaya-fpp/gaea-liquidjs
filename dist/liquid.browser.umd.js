/*
 * liquidjs@9.25.1, https://github.com/harttle/liquidjs
 * (c) 2016-2022 harttle
 * Released under the MIT License.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.liquidjs = {}));
}(this, function (exports) { 'use strict';

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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    var Drop = /** @class */ (function () {
        function Drop() {
        }
        Drop.prototype.valueOf = function () {
            return undefined;
        };
        Drop.prototype.themeConfig = function () {
            return undefined;
        };
        Drop.prototype.liquidMethodMissing = function (key) {
            return undefined;
        };
        return Drop;
    }());

    var toStr = Object.prototype.toString;
    var toLowerCase = String.prototype.toLowerCase;
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
        for (var k in object) {
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
        var type = typeof value;
        return value !== null && (type === 'object' || type === 'function');
    }
    function range(start, stop, step) {
        if (step === void 0) { step = 1; }
        var arr = [];
        for (var i = start; i < stop; i += step) {
            arr.push(i);
        }
        return arr;
    }
    function padStart(str, length, ch) {
        if (ch === void 0) { ch = ' '; }
        return pad(str, length, ch, function (str, ch) { return ch + str; });
    }
    function padEnd(str, length, ch) {
        if (ch === void 0) { ch = ' '; }
        return pad(str, length, ch, function (str, ch) { return str + ch; });
    }
    function pad(str, length, ch, add) {
        str = String(str);
        var n = length - str.length;
        while (n-- > 0)
            str = add(str, ch);
        return str;
    }
    function identify(val) {
        return val;
    }
    function snakeCase(str) {
        return str.replace(/(\w?)([A-Z])/g, function (_, a, b) { return (a ? a + '_' : '') + b.toLowerCase(); });
    }
    function changeCase(str) {
        var hasLowerCase = __spread(str).some(function (ch) { return ch >= 'a' && ch <= 'z'; });
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
        var str = '';
        Object.keys(json).forEach(function (key) {
            var val = "\"" + json[key] + "\"";
            // 过滤重复 '" | '"
            var regVal = val.replace(/"'|'"/g, '"');
            str += " " + key + "=" + regVal;
        });
        return str;
    }
    // 获取值，如果不饱和'/" ，按照变量处理，返回 {{ value }}
    function getLiquidValue(str) {
        var value = str;
        if (!/['"]/g.test(str)) {
            value = "{{ " + str + " }}";
        }
        return value;
    }

    var Node = /** @class */ (function () {
        function Node(key, value, next, prev) {
            this.key = key;
            this.value = value;
            this.next = next;
            this.prev = prev;
        }
        return Node;
    }());
    var LRU = /** @class */ (function () {
        function LRU(limit, size) {
            if (size === void 0) { size = 0; }
            this.limit = limit;
            this.size = size;
            this.cache = {};
            this.head = new Node('HEAD', null, null, null);
            this.tail = new Node('TAIL', null, null, null);
            this.head.next = this.tail;
            this.tail.prev = this.head;
        }
        LRU.prototype.write = function (key, value) {
            if (this.cache[key]) {
                this.cache[key].value = value;
            }
            else {
                var node = new Node(key, value, this.head.next, this.head);
                this.head.next.prev = node;
                this.head.next = node;
                this.cache[key] = node;
                this.size++;
                this.ensureLimit();
            }
        };
        LRU.prototype.read = function (key) {
            if (!this.cache[key])
                return;
            var value = this.cache[key].value;
            this.remove(key);
            this.write(key, value);
            return value;
        };
        LRU.prototype.remove = function (key) {
            var node = this.cache[key];
            node.prev.next = node.next;
            node.next.prev = node.prev;
            delete this.cache[key];
            this.size--;
        };
        LRU.prototype.clear = function () {
            this.head.next = this.tail;
            this.tail.prev = this.head;
            this.size = 0;
            this.cache = {};
        };
        LRU.prototype.ensureLimit = function () {
            if (this.size > this.limit)
                this.remove(this.tail.prev.key);
        };
        return LRU;
    }());

    /* eslint-disable */
    var pickUniqueTpl = function (tplPath, rootData) {
        var data = rootData;
        var findDir = function (data, dirName) {
            // 遍历所有目录,取数据
            var result = {
                type: 'folder',
                name: '',
                data: []
            };
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
            var result = {};
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
        var result = {};
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
            var themeData = window.localStorage.getItem('themeData');
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

    function resolve(root, filepath, ext) {
        return filepath;
    }
    function readFile(file) {
        return __awaiter(this, void 0, void 0, function () {
            var themeScope, template;
            return __generator(this, function (_a) {
                themeScope = new ThemeDataScope();
                if (themeScope.rootData) {
                    template = themeScope.getTpl(file);
                    if (template !== undefined) {
                        return [2 /*return*/, Promise.resolve(template)];
                    }
                }
                return [2 /*return*/, Promise.resolve("\u6CA1\u6709\u4F60\u7684\u6A21\u677F: " + file)];
            });
        });
    }
    function readFileSync(url) {
        return url;
    }
    function exists(filepath) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, true];
            });
        });
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

    var defaultOperators = {
        '==': function (l, r) {
            if (isComparable(l))
                return l.equals(r);
            if (isComparable(r))
                return r.equals(l);
            return l === r;
        },
        '!=': function (l, r) {
            if (isComparable(l))
                return !l.equals(r);
            if (isComparable(r))
                return !r.equals(l);
            return l !== r;
        },
        '>': function (l, r) {
            if (isComparable(l))
                return l.gt(r);
            if (isComparable(r))
                return r.lt(l);
            return l > r;
        },
        '<': function (l, r) {
            if (isComparable(l))
                return l.lt(r);
            if (isComparable(r))
                return r.gt(l);
            return l < r;
        },
        '>=': function (l, r) {
            if (isComparable(l))
                return l.geq(r);
            if (isComparable(r))
                return r.leq(l);
            return l >= r;
        },
        '<=': function (l, r) {
            if (isComparable(l))
                return l.leq(r);
            if (isComparable(r))
                return r.geq(l);
            return l <= r;
        },
        'contains': function (l, r) {
            return l && isFunction(l.indexOf) ? l.indexOf(r) > -1 : false;
        },
        'and': function (l, r, ctx) { return isTruthy(l, ctx) && isTruthy(r, ctx); },
        'or': function (l, r, ctx) { return isTruthy(l, ctx) || isTruthy(r, ctx); }
    };

    // **DO NOT CHANGE THIS FILE**
    //
    // This file is generated by bin/character-gen.js
    // bitmask character types to boost performance
    var TYPES = [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 4, 4, 4, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 8, 0, 0, 0, 0, 8, 0, 0, 0, 64, 0, 65, 0, 0, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 0, 0, 2, 2, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
    var IDENTIFIER = 1;
    var BLANK = 4;
    var QUOTE = 8;
    var INLINE_BLANK = 16;
    var NUMBER = 32;
    var SIGN = 64;
    TYPES[160] = TYPES[5760] = TYPES[6158] = TYPES[8192] = TYPES[8193] = TYPES[8194] = TYPES[8195] = TYPES[8196] = TYPES[8197] = TYPES[8198] = TYPES[8199] = TYPES[8200] = TYPES[8201] = TYPES[8202] = TYPES[8232] = TYPES[8233] = TYPES[8239] = TYPES[8287] = TYPES[12288] = BLANK;

    function createTrie(operators) {
        var e_1, _a;
        var trie = {};
        try {
            for (var _b = __values(Object.entries(operators)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), name_1 = _d[0], handler = _d[1];
                var node = trie;
                for (var i = 0; i < name_1.length; i++) {
                    var c = name_1[i];
                    node[c] = node[c] || {};
                    if (i === name_1.length - 1 && (TYPES[name_1.charCodeAt(i)] & IDENTIFIER)) {
                        node[c].needBoundary = true;
                    }
                    node = node[c];
                }
                node.handler = handler;
                node.end = true;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return trie;
    }

    var defaultOptions = {
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
            var cache = void 0;
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
        return __assign({}, defaultOptions, options);
    }
    function normalizeStringArray(value) {
        if (isArray(value))
            return value;
        if (isString(value))
            return [value];
        return [];
    }

    var LiquidError = /** @class */ (function (_super) {
        __extends(LiquidError, _super);
        function LiquidError(err, token) {
            var _this = _super.call(this, err.message) || this;
            _this.originalError = err;
            _this.token = token;
            _this.context = '';
            return _this;
        }
        LiquidError.prototype.update = function () {
            var err = this.originalError;
            this.context = mkContext(this.token);
            this.message = mkMessage(err.message, this.token);
            this.stack = this.message + '\n' + this.context +
                '\n' + this.stack + '\nFrom ' + err.stack;
        };
        return LiquidError;
    }(Error));
    var TokenizationError = /** @class */ (function (_super) {
        __extends(TokenizationError, _super);
        function TokenizationError(message, token) {
            var _this = _super.call(this, new Error(message), token) || this;
            _this.name = 'TokenizationError';
            _super.prototype.update.call(_this);
            return _this;
        }
        return TokenizationError;
    }(LiquidError));
    var ParseError = /** @class */ (function (_super) {
        __extends(ParseError, _super);
        function ParseError(err, token) {
            var _this = _super.call(this, err, token) || this;
            _this.name = 'ParseError';
            _this.message = err.message;
            _super.prototype.update.call(_this);
            return _this;
        }
        return ParseError;
    }(LiquidError));
    var RenderError = /** @class */ (function (_super) {
        __extends(RenderError, _super);
        function RenderError(err, tpl) {
            var _this = _super.call(this, err, tpl.token) || this;
            _this.name = 'RenderError';
            _this.message = err.message;
            _super.prototype.update.call(_this);
            return _this;
        }
        RenderError.is = function (obj) {
            return obj.name === 'RenderError';
        };
        return RenderError;
    }(LiquidError));
    var UndefinedVariableError = /** @class */ (function (_super) {
        __extends(UndefinedVariableError, _super);
        function UndefinedVariableError(err, token) {
            var _this = _super.call(this, err, token) || this;
            _this.name = 'UndefinedVariableError';
            _this.message = err.message;
            _super.prototype.update.call(_this);
            return _this;
        }
        return UndefinedVariableError;
    }(LiquidError));
    // only used internally; raised where we don't have token information,
    // so it can't be an UndefinedVariableError.
    var InternalUndefinedVariableError = /** @class */ (function (_super) {
        __extends(InternalUndefinedVariableError, _super);
        function InternalUndefinedVariableError(variableName) {
            var _this = _super.call(this, "undefined variable: " + variableName) || this;
            _this.name = 'InternalUndefinedVariableError';
            _this.variableName = variableName;
            return _this;
        }
        return InternalUndefinedVariableError;
    }(Error));
    var AssertionError = /** @class */ (function (_super) {
        __extends(AssertionError, _super);
        function AssertionError(message) {
            var _this = _super.call(this, message) || this;
            _this.name = 'AssertionError';
            _this.message = message + '';
            return _this;
        }
        return AssertionError;
    }(Error));
    function mkContext(token) {
        var _a = __read(token.getPosition(), 1), line = _a[0];
        var lines = token.input.split('\n');
        var begin = Math.max(line - 2, 1);
        var end = Math.min(line + 3, lines.length);
        var context = range(begin, end + 1)
            .map(function (lineNumber) {
            var indicator = (lineNumber === line) ? '>> ' : '   ';
            var num = padStart(String(lineNumber), String(end).length);
            var text = lines[lineNumber - 1];
            return "" + indicator + num + "| " + text;
        })
            .join('\n');
        return context;
    }
    function mkMessage(msg, token) {
        if (token.file)
            msg += ", file:" + token.file;
        var _a = __read(token.getPosition(), 2), line = _a[0], col = _a[1];
        msg += ", line:" + line + ", col:" + col;
        return msg;
    }

    var Context = /** @class */ (function () {
        function Context(env, opts, sync) {
            if (env === void 0) { env = {}; }
            if (opts === void 0) { opts = defaultOptions; }
            if (sync === void 0) { sync = false; }
            this.scopes = [{}];
            this.registers = {};
            this.sync = sync;
            this.opts = opts;
            this.globals = opts.globals;
            this.environments = env;
        }
        Context.prototype.getRegister = function (key, defaultValue) {
            if (defaultValue === void 0) { defaultValue = {}; }
            return (this.registers[key] = this.registers[key] || defaultValue);
        };
        Context.prototype.setRegister = function (key, value) {
            return (this.registers[key] = value);
        };
        Context.prototype.saveRegister = function () {
            var _this = this;
            var keys = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                keys[_i] = arguments[_i];
            }
            return keys.map(function (key) { return [key, _this.getRegister(key)]; });
        };
        Context.prototype.restoreRegister = function (keyValues) {
            var _this = this;
            return keyValues.forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                return _this.setRegister(key, value);
            });
        };
        Context.prototype.getAll = function () {
            return __spread([this.globals, this.environments], this.scopes).reduce(function (ctx, val) { return __assign(ctx, val); }, {});
        };
        Context.prototype.get = function (paths) {
            var scope = this.findScope(paths[0]);
            return this.getFromScope(scope, paths);
        };
        Context.prototype.getFromScope = function (scope, paths) {
            var _this = this;
            if (typeof paths === 'string')
                paths = paths.split('.');
            return paths.reduce(function (scope, path) {
                var preScope = readProperty(scope, path);
                if (_this.isHexColor(scope) && !preScope) {
                    var rgbValue = _this.hexToRgba(scope);
                    scope = readProperty(rgbValue, path);
                }
                else {
                    scope = preScope;
                }
                if (isNil(scope) && _this.opts.strictVariables) {
                    throw new InternalUndefinedVariableError(path);
                }
                return scope;
            }, scope);
        };
        Context.prototype.push = function (ctx) {
            return this.scopes.push(ctx);
        };
        Context.prototype.pop = function () {
            return this.scopes.pop();
        };
        Context.prototype.bottom = function () {
            return this.scopes[0];
        };
        Context.prototype.findScope = function (key) {
            for (var i = this.scopes.length - 1; i >= 0; i--) {
                var candidate = this.scopes[i];
                if (key in candidate)
                    return candidate;
            }
            if (key in this.environments)
                return this.environments;
            return this.globals;
        };
        Context.prototype.isHexColor = function (hexStr) {
            // 十六进制颜色值的正则表达式
            var reg = /^#([0-9a-fA-f]{6}|[0-9a-fA-f]{3})$/;
            return hexStr && reg.test(hexStr);
        };
        Context.prototype.hexToRgba = function (hexStr) {
            var rgba = {
                red: '',
                green: '',
                blue: '',
                alpha: ''
            };
            // 如果是16进制颜色
            if (this.isHexColor(hexStr)) {
                if (hexStr.length === 4) {
                    var colorNew = '#';
                    for (var i = 1; i < 4; i += 1) {
                        colorNew += hexStr.slice(i, i + 1).concat(hexStr.slice(i, i + 1));
                    }
                    hexStr = colorNew;
                }
                // 处理六位的颜色值
                var colorChange = [];
                for (var i = 1; i < 7; i += 2) {
                    colorChange.push(parseInt('0x' + hexStr.slice(i, i + 2)));
                }
                rgba = {
                    red: "" + colorChange[0],
                    green: "" + colorChange[1],
                    blue: "" + colorChange[2],
                    alpha: "" + 1
                };
            }
            return rgba;
        };
        return Context;
    }());
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
    })(exports.TokenKind || (exports.TokenKind = {}));

    function isDelimitedToken(val) {
        return !!(getKind(val) & exports.TokenKind.Delimited);
    }
    function isOperatorToken(val) {
        return getKind(val) === exports.TokenKind.Operator;
    }
    function isHTMLToken(val) {
        return getKind(val) === exports.TokenKind.HTML;
    }
    function isOutputToken(val) {
        return getKind(val) === exports.TokenKind.Output;
    }
    function isTagToken(val) {
        return getKind(val) === exports.TokenKind.Tag;
    }
    function isQuotedToken(val) {
        return getKind(val) === exports.TokenKind.Quoted;
    }
    function isLiteralToken(val) {
        return getKind(val) === exports.TokenKind.Literal;
    }
    function isNumberToken(val) {
        return getKind(val) === exports.TokenKind.Number;
    }
    function isPropertyAccessToken(val) {
        return getKind(val) === exports.TokenKind.PropertyAccess;
    }
    function isWordToken(val) {
        return getKind(val) === exports.TokenKind.Word;
    }
    function isRangeToken(val) {
        return getKind(val) === exports.TokenKind.Range;
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
        var inRaw = false;
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
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
        var mask = greedy ? BLANK : INLINE_BLANK;
        while (TYPES[token.input.charCodeAt(token.end - 1 - token.trimRight)] & mask)
            token.trimRight++;
    }
    function trimRight(token, greedy) {
        if (!token || !isHTMLToken(token))
            return;
        var mask = greedy ? BLANK : INLINE_BLANK;
        while (TYPES[token.input.charCodeAt(token.begin + token.trimLeft)] & mask)
            token.trimLeft++;
        if (token.input.charAt(token.begin + token.trimLeft) === '\n')
            token.trimLeft++;
    }

    var Token = /** @class */ (function () {
        function Token(kind, input, begin, end, file) {
            this.kind = kind;
            this.input = input;
            this.begin = begin;
            this.end = end;
            this.file = file;
        }
        Token.prototype.getText = function () {
            return this.input.slice(this.begin, this.end);
        };
        Token.prototype.getPosition = function () {
            var _a = __read([1, 1], 2), row = _a[0], col = _a[1];
            for (var i = 0; i < this.begin; i++) {
                if (this.input[i] === '\n') {
                    row++;
                    col = 1;
                }
                else
                    col++;
            }
            return [row, col];
        };
        Token.prototype.size = function () {
            return this.end - this.begin;
        };
        return Token;
    }());

    var NumberToken = /** @class */ (function (_super) {
        __extends(NumberToken, _super);
        function NumberToken(whole, decimal) {
            var _this = _super.call(this, exports.TokenKind.Number, whole.input, whole.begin, decimal ? decimal.end : whole.end, whole.file) || this;
            _this.whole = whole;
            _this.decimal = decimal;
            return _this;
        }
        return NumberToken;
    }(Token));

    var IdentifierToken = /** @class */ (function (_super) {
        __extends(IdentifierToken, _super);
        function IdentifierToken(input, begin, end, file) {
            var _this = _super.call(this, exports.TokenKind.Word, input, begin, end, file) || this;
            _this.input = input;
            _this.begin = begin;
            _this.end = end;
            _this.file = file;
            _this.content = _this.getText();
            return _this;
        }
        IdentifierToken.prototype.isNumber = function (allowSign) {
            if (allowSign === void 0) { allowSign = false; }
            var begin = allowSign && TYPES[this.input.charCodeAt(this.begin)] & SIGN
                ? this.begin + 1
                : this.begin;
            for (var i = begin; i < this.end; i++) {
                if (!(TYPES[this.input.charCodeAt(i)] & NUMBER))
                    return false;
            }
            return true;
        };
        return IdentifierToken;
    }(Token));

    var NullDrop = /** @class */ (function (_super) {
        __extends(NullDrop, _super);
        function NullDrop() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NullDrop.prototype.equals = function (value) {
            return isNil(toValue(value));
        };
        NullDrop.prototype.gt = function () {
            return false;
        };
        NullDrop.prototype.geq = function () {
            return false;
        };
        NullDrop.prototype.lt = function () {
            return false;
        };
        NullDrop.prototype.leq = function () {
            return false;
        };
        NullDrop.prototype.valueOf = function () {
            return null;
        };
        return NullDrop;
    }(Drop));

    var EmptyDrop = /** @class */ (function (_super) {
        __extends(EmptyDrop, _super);
        function EmptyDrop() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EmptyDrop.prototype.equals = function (value) {
            if (value instanceof EmptyDrop)
                return false;
            value = toValue(value);
            if (isString(value) || isArray(value))
                return value.length === 0;
            if (isObject(value))
                return Object.keys(value).length === 0;
            return false;
        };
        EmptyDrop.prototype.gt = function () {
            return false;
        };
        EmptyDrop.prototype.geq = function () {
            return false;
        };
        EmptyDrop.prototype.lt = function () {
            return false;
        };
        EmptyDrop.prototype.leq = function () {
            return false;
        };
        EmptyDrop.prototype.valueOf = function () {
            return '';
        };
        return EmptyDrop;
    }(Drop));

    var BlankDrop = /** @class */ (function (_super) {
        __extends(BlankDrop, _super);
        function BlankDrop() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BlankDrop.prototype.equals = function (value) {
            if (value === false)
                return true;
            if (isNil(toValue(value)))
                return true;
            if (isString(value))
                return /^\s*$/.test(value);
            return _super.prototype.equals.call(this, value);
        };
        return BlankDrop;
    }(EmptyDrop));

    var nil = new NullDrop();
    var literalValues = {
        'true': true,
        'false': false,
        'nil': nil,
        'null': nil,
        'empty': new EmptyDrop(),
        'blank': new BlankDrop()
    };

    var LiteralToken = /** @class */ (function (_super) {
        __extends(LiteralToken, _super);
        function LiteralToken(input, begin, end, file) {
            var _this = _super.call(this, exports.TokenKind.Literal, input, begin, end, file) || this;
            _this.input = input;
            _this.begin = begin;
            _this.end = end;
            _this.file = file;
            _this.literal = _this.getText();
            return _this;
        }
        return LiteralToken;
    }(Token));

    var precedence = {
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
    var OperatorToken = /** @class */ (function (_super) {
        __extends(OperatorToken, _super);
        function OperatorToken(input, begin, end, file) {
            var _this = _super.call(this, exports.TokenKind.Operator, input, begin, end, file) || this;
            _this.input = input;
            _this.begin = begin;
            _this.end = end;
            _this.file = file;
            _this.operator = _this.getText();
            return _this;
        }
        OperatorToken.prototype.getPrecedence = function () {
            var key = this.getText();
            return key in precedence ? precedence[key] : 1;
        };
        return OperatorToken;
    }(Token));

    var rHex = /[\da-fA-F]/;
    var rOct = /[0-7]/;
    var escapeChar = {
        b: '\b',
        f: '\f',
        n: '\n',
        r: '\r',
        t: '\t',
        v: '\x0B'
    };
    function hexVal(c) {
        var code = c.charCodeAt(0);
        if (code >= 97)
            return code - 87;
        if (code >= 65)
            return code - 55;
        return code - 48;
    }
    function parseStringLiteral(str) {
        var ret = '';
        for (var i = 1; i < str.length - 1; i++) {
            if (str[i] !== '\\') {
                ret += str[i];
                continue;
            }
            if (escapeChar[str[i + 1]] !== undefined) {
                ret += escapeChar[str[++i]];
            }
            else if (str[i + 1] === 'u') {
                var val = 0;
                var j = i + 2;
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
                var j = i + 1;
                var val = 0;
                while (j <= i + 3 && rOct.test(str[j])) {
                    val = val * 8 + hexVal(str[j++]);
                }
                i = j - 1;
                ret += String.fromCharCode(val);
            }
        }
        return ret;
    }

    var PropertyAccessToken = /** @class */ (function (_super) {
        __extends(PropertyAccessToken, _super);
        function PropertyAccessToken(variable, props, end) {
            var _this = _super.call(this, exports.TokenKind.PropertyAccess, variable.input, variable.begin, end, variable.file) || this;
            _this.variable = variable;
            _this.props = props;
            return _this;
        }
        PropertyAccessToken.prototype.getVariableAsText = function () {
            if (this.variable instanceof IdentifierToken) {
                return this.variable.getText();
            }
            else {
                return parseStringLiteral(this.variable.getText());
            }
        };
        return PropertyAccessToken;
    }(Token));

    function assert(predicate, message) {
        if (!predicate) {
            var msg = message ? message() : "expect " + predicate + " to be true";
            throw new AssertionError(msg);
        }
    }

    var FilterToken = /** @class */ (function (_super) {
        __extends(FilterToken, _super);
        function FilterToken(name, args, input, begin, end, file) {
            var _this = _super.call(this, exports.TokenKind.Filter, input, begin, end, file) || this;
            _this.name = name;
            _this.args = args;
            return _this;
        }
        return FilterToken;
    }(Token));

    var HashToken = /** @class */ (function (_super) {
        __extends(HashToken, _super);
        function HashToken(input, begin, end, name, value, file) {
            var _this = _super.call(this, exports.TokenKind.Hash, input, begin, end, file) || this;
            _this.input = input;
            _this.begin = begin;
            _this.end = end;
            _this.name = name;
            _this.value = value;
            _this.file = file;
            return _this;
        }
        return HashToken;
    }(Token));

    var QuotedToken = /** @class */ (function (_super) {
        __extends(QuotedToken, _super);
        function QuotedToken(input, begin, end, file) {
            var _this = _super.call(this, exports.TokenKind.Quoted, input, begin, end, file) || this;
            _this.input = input;
            _this.begin = begin;
            _this.end = end;
            _this.file = file;
            return _this;
        }
        return QuotedToken;
    }(Token));

    var HTMLToken = /** @class */ (function (_super) {
        __extends(HTMLToken, _super);
        function HTMLToken(input, begin, end, file) {
            var _this = _super.call(this, exports.TokenKind.HTML, input, begin, end, file) || this;
            _this.input = input;
            _this.begin = begin;
            _this.end = end;
            _this.file = file;
            _this.trimLeft = 0;
            _this.trimRight = 0;
            return _this;
        }
        HTMLToken.prototype.getContent = function () {
            return this.input.slice(this.begin + this.trimLeft, this.end - this.trimRight);
        };
        return HTMLToken;
    }(Token));

    var DelimitedToken = /** @class */ (function (_super) {
        __extends(DelimitedToken, _super);
        function DelimitedToken(kind, content, input, begin, end, trimLeft, trimRight, file) {
            var _this = _super.call(this, kind, input, begin, end, file) || this;
            _this.trimLeft = false;
            _this.trimRight = false;
            _this.content = _this.getText();
            var tl = content[0] === '-';
            var tr = last(content) === '-';
            _this.content = content
                .slice(tl ? 1 : 0, tr ? -1 : content.length)
                .trim();
            _this.trimLeft = tl || trimLeft;
            _this.trimRight = tr || trimRight;
            return _this;
        }
        return DelimitedToken;
    }(Token));

    var TagToken = /** @class */ (function (_super) {
        __extends(TagToken, _super);
        function TagToken(input, begin, end, options, file) {
            var _this = this;
            var trimTagLeft = options.trimTagLeft, trimTagRight = options.trimTagRight, tagDelimiterLeft = options.tagDelimiterLeft, tagDelimiterRight = options.tagDelimiterRight;
            var value = input.slice(begin + tagDelimiterLeft.length, end - tagDelimiterRight.length);
            _this = _super.call(this, exports.TokenKind.Tag, value, input, begin, end, trimTagLeft, trimTagRight, file) || this;
            var tokenizer = new Tokenizer(_this.content, options.operatorsTrie);
            _this.name = tokenizer.readIdentifier().getText();
            if (!_this.name)
                throw new TokenizationError("illegal tag syntax", _this);
            tokenizer.skipBlank();
            _this.args = tokenizer.remaining();
            return _this;
        }
        return TagToken;
    }(DelimitedToken));

    var RangeToken = /** @class */ (function (_super) {
        __extends(RangeToken, _super);
        function RangeToken(input, begin, end, lhs, rhs, file) {
            var _this = _super.call(this, exports.TokenKind.Range, input, begin, end, file) || this;
            _this.input = input;
            _this.begin = begin;
            _this.end = end;
            _this.lhs = lhs;
            _this.rhs = rhs;
            _this.file = file;
            return _this;
        }
        return RangeToken;
    }(Token));

    var OutputToken = /** @class */ (function (_super) {
        __extends(OutputToken, _super);
        function OutputToken(input, begin, end, options, file) {
            var _this = this;
            var trimOutputLeft = options.trimOutputLeft, trimOutputRight = options.trimOutputRight, outputDelimiterLeft = options.outputDelimiterLeft, outputDelimiterRight = options.outputDelimiterRight;
            var value = input.slice(begin + outputDelimiterLeft.length, end - outputDelimiterRight.length);
            _this = _super.call(this, exports.TokenKind.Output, value, input, begin, end, trimOutputLeft, trimOutputRight, file) || this;
            return _this;
        }
        return OutputToken;
    }(DelimitedToken));

    function matchOperator(str, begin, trie, end) {
        if (end === void 0) { end = str.length; }
        var node = trie;
        var i = begin;
        var info;
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

    var Expression = /** @class */ (function () {
        function Expression(tokens) {
            this.postfix = __spread(toPostfix(tokens));
        }
        Expression.prototype.evaluate = function (ctx, lenient) {
            var operands, _a, _b, token, r, l, result, _c, _d, e_1_1;
            var e_1, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        assert(ctx, function () { return 'unable to evaluate: context not defined'; });
                        operands = [];
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 9, 10, 11]);
                        _a = __values(this.postfix), _b = _a.next();
                        _f.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 8];
                        token = _b.value;
                        if (!isOperatorToken(token)) return [3 /*break*/, 5];
                        return [4 /*yield*/, operands.pop()];
                    case 3:
                        r = _f.sent();
                        return [4 /*yield*/, operands.pop()];
                    case 4:
                        l = _f.sent();
                        result = evalOperatorToken(ctx.opts.operators, token, l, r, ctx);
                        operands.push(result);
                        return [3 /*break*/, 7];
                    case 5:
                        _d = (_c = operands).push;
                        return [4 /*yield*/, evalToken(token, ctx, lenient && this.postfix.length === 1)];
                    case 6:
                        _d.apply(_c, [_f.sent()]);
                        _f.label = 7;
                    case 7:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        e_1_1 = _f.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 11];
                    case 10:
                        try {
                            if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 11: return [2 /*return*/, operands[0]];
                }
            });
        };
        return Expression;
    }());
    function evalToken(token, ctx, lenient) {
        if (lenient === void 0) { lenient = false; }
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
        var variable = token.getVariableAsText();
        var props = token.props.map(function (prop) { return evalToken(prop, ctx, false); });
        try {
            return ctx.get(__spread([variable], props));
        }
        catch (e) {
            if (lenient && e.name === 'InternalUndefinedVariableError')
                return null;
            throw (new UndefinedVariableError(e, token));
        }
    }
    function evalNumberToken(token) {
        var str = token.whole.content + '.' + (token.decimal ? token.decimal.content : '');
        return Number(str);
    }
    function evalQuotedToken(token) {
        return parseStringLiteral(token.getText());
    }
    function evalOperatorToken(operators, token, lhs, rhs, ctx) {
        var impl = operators[token.operator];
        return impl(lhs, rhs, ctx);
    }
    function evalLiteralToken(token) {
        return literalValues[token.literal];
    }
    function evalRangeToken(token, ctx) {
        var low = evalToken(token.lhs, ctx);
        var high = evalToken(token.rhs, ctx);
        return range(+low, +high + 1);
    }
    function toPostfix(tokens) {
        var ops, tokens_1, tokens_1_1, token, e_2_1;
        var e_2, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ops = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 10, 11, 12]);
                    tokens_1 = __values(tokens), tokens_1_1 = tokens_1.next();
                    _b.label = 2;
                case 2:
                    if (!!tokens_1_1.done) return [3 /*break*/, 9];
                    token = tokens_1_1.value;
                    if (!isOperatorToken(token)) return [3 /*break*/, 6];
                    _b.label = 3;
                case 3:
                    if (!(ops.length && ops[ops.length - 1].getPrecedence() > token.getPrecedence())) return [3 /*break*/, 5];
                    return [4 /*yield*/, ops.pop()];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 3];
                case 5:
                    ops.push(token);
                    return [3 /*break*/, 8];
                case 6: return [4 /*yield*/, token];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    tokens_1_1 = tokens_1.next();
                    return [3 /*break*/, 2];
                case 9: return [3 /*break*/, 12];
                case 10:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 12];
                case 11:
                    try {
                        if (tokens_1_1 && !tokens_1_1.done && (_a = tokens_1.return)) _a.call(tokens_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 12:
                    if (!ops.length) return [3 /*break*/, 14];
                    return [4 /*yield*/, ops.pop()];
                case 13:
                    _b.sent();
                    return [3 /*break*/, 12];
                case 14: return [2 /*return*/];
            }
        });
    }

    var Tokenizer = /** @class */ (function () {
        function Tokenizer(input, trie, file) {
            if (file === void 0) { file = ''; }
            this.input = input;
            this.trie = trie;
            this.file = file;
            this.p = 0;
            this.rawBeginAt = -1;
            this.N = input.length;
        }
        Tokenizer.prototype.readExpression = function () {
            return new Expression(this.readExpressionTokens());
        };
        Tokenizer.prototype.readExpressionTokens = function () {
            var operand, operator, operand_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operand = this.readValue();
                        if (!operand)
                            return [2 /*return*/];
                        return [4 /*yield*/, operand];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!(this.p < this.N)) return [3 /*break*/, 5];
                        operator = this.readOperator();
                        if (!operator)
                            return [2 /*return*/];
                        operand_1 = this.readValue();
                        if (!operand_1)
                            return [2 /*return*/];
                        return [4 /*yield*/, operator];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, operand_1];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        };
        Tokenizer.prototype.readOperator = function () {
            this.skipBlank();
            var end = matchOperator(this.input, this.p, this.trie, this.p + 8);
            if (end === -1)
                return;
            return new OperatorToken(this.input, this.p, (this.p = end), this.file);
        };
        Tokenizer.prototype.readFilters = function () {
            var filters = [];
            while (true) {
                var filter = this.readFilter();
                if (!filter)
                    return filters;
                filters.push(filter);
            }
        };
        Tokenizer.prototype.readFilter = function () {
            var _this = this;
            this.skipBlank();
            if (this.end())
                return null;
            assert(this.peek() === '|', function () { return "unexpected token at " + _this.snapshot(); });
            this.p++;
            var begin = this.p;
            var name = this.readIdentifier();
            if (!name.size())
                return null;
            var args = [];
            this.skipBlank();
            if (this.peek() === ':') {
                do {
                    ++this.p;
                    var arg = this.readFilterArg();
                    arg && args.push(arg);
                    while (this.p < this.N && this.peek() !== ',' && this.peek() !== '|')
                        ++this.p;
                } while (this.peek() === ',');
            }
            return new FilterToken(name.getText(), args, this.input, begin, this.p, this.file);
        };
        Tokenizer.prototype.readFilterArg = function () {
            var key = this.readValue();
            if (!key)
                return;
            this.skipBlank();
            if (this.peek() !== ':')
                return key;
            ++this.p;
            var value = this.readValue();
            return [key.getText(), value];
        };
        Tokenizer.prototype.readTopLevelTokens = function (options) {
            if (options === void 0) { options = defaultOptions; }
            var tokens = [];
            while (this.p < this.N) {
                var token = this.readTopLevelToken(options);
                tokens.push(token);
            }
            whiteSpaceCtrl(tokens, options);
            return tokens;
        };
        Tokenizer.prototype.readTopLevelToken = function (options) {
            var tagDelimiterLeft = options.tagDelimiterLeft, outputDelimiterLeft = options.outputDelimiterLeft;
            if (this.rawBeginAt > -1)
                return this.readEndrawOrRawContent(options);
            if (this.match(tagDelimiterLeft))
                return this.readTagToken(options);
            if (this.match(outputDelimiterLeft))
                return this.readOutputToken(options);
            return this.readHTMLToken(options);
        };
        Tokenizer.prototype.readHTMLToken = function (options) {
            var begin = this.p;
            while (this.p < this.N) {
                var tagDelimiterLeft = options.tagDelimiterLeft, outputDelimiterLeft = options.outputDelimiterLeft;
                if (this.match(tagDelimiterLeft))
                    break;
                if (this.match(outputDelimiterLeft))
                    break;
                ++this.p;
            }
            return new HTMLToken(this.input, begin, this.p, this.file);
        };
        Tokenizer.prototype.readTagToken = function (options) {
            if (options === void 0) { options = defaultOptions; }
            var _a = this, file = _a.file, input = _a.input;
            var begin = this.p;
            if (this.readToDelimiter(options.tagDelimiterRight) === -1) {
                throw this.mkError("tag " + this.snapshot(begin) + " not closed", begin);
            }
            var token = new TagToken(input, begin, this.p, options, file);
            if (token.name === 'raw')
                this.rawBeginAt = begin;
            return token;
        };
        Tokenizer.prototype.readToDelimiter = function (delimiter) {
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
        };
        Tokenizer.prototype.readOutputToken = function (options) {
            if (options === void 0) { options = defaultOptions; }
            var _a = this, file = _a.file, input = _a.input;
            var outputDelimiterRight = options.outputDelimiterRight;
            var begin = this.p;
            if (this.readToDelimiter(outputDelimiterRight) === -1) {
                throw this.mkError("output " + this.snapshot(begin) + " not closed", begin);
            }
            return new OutputToken(input, begin, this.p, options, file);
        };
        Tokenizer.prototype.readEndrawOrRawContent = function (options) {
            var tagDelimiterLeft = options.tagDelimiterLeft, tagDelimiterRight = options.tagDelimiterRight;
            var begin = this.p;
            var leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
            while (this.p < this.N) {
                if (this.readIdentifier().getText() !== 'endraw') {
                    leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
                    continue;
                }
                while (this.p <= this.N) {
                    if (this.rmatch(tagDelimiterRight)) {
                        var end = this.p;
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
            throw this.mkError("raw " + this.snapshot(this.rawBeginAt) + " not closed", begin);
        };
        Tokenizer.prototype.mkError = function (msg, begin) {
            return new TokenizationError(msg, new IdentifierToken(this.input, begin, this.N, this.file));
        };
        Tokenizer.prototype.snapshot = function (begin) {
            if (begin === void 0) { begin = this.p; }
            return JSON.stringify(ellipsis(this.input.slice(begin), 16));
        };
        /**
         * @deprecated
         */
        Tokenizer.prototype.readWord = function () {
            console.warn('Tokenizer#readWord() will be removed, use #readIdentifier instead');
            return this.readIdentifier();
        };
        Tokenizer.prototype.readIdentifier = function () {
            this.skipBlank();
            var begin = this.p;
            while (this.peekType() & IDENTIFIER)
                ++this.p;
            return new IdentifierToken(this.input, begin, this.p, this.file);
        };
        Tokenizer.prototype.readHashes = function () {
            var hashes = [];
            while (true) {
                var hash = this.readHash();
                if (!hash)
                    return hashes;
                hashes.push(hash);
            }
        };
        Tokenizer.prototype.readHash = function () {
            this.skipBlank();
            if (this.peek() === ',')
                ++this.p;
            var begin = this.p;
            var name = this.readIdentifier();
            if (!name.size())
                return;
            var value;
            this.skipBlank();
            if (this.peek() === ':') {
                ++this.p;
                value = this.readValue();
            }
            return new HashToken(this.input, begin, this.p, name, value, this.file);
        };
        Tokenizer.prototype.remaining = function () {
            return this.input.slice(this.p);
        };
        Tokenizer.prototype.advance = function (i) {
            if (i === void 0) { i = 1; }
            this.p += i;
        };
        Tokenizer.prototype.end = function () {
            return this.p >= this.N;
        };
        Tokenizer.prototype.readTo = function (end) {
            while (this.p < this.N) {
                ++this.p;
                if (this.rmatch(end))
                    return this.p;
            }
            return -1;
        };
        Tokenizer.prototype.readValue = function () {
            var value = this.readQuoted() || this.readRange();
            if (value)
                return value;
            if (this.peek() === '[') {
                this.p++;
                var prop = this.readQuoted();
                if (!prop)
                    return;
                if (this.peek() !== ']')
                    return;
                this.p++;
                return new PropertyAccessToken(prop, [], this.p);
            }
            var variable = this.readIdentifier();
            if (!variable.size())
                return;
            var isNumber = variable.isNumber(true);
            var props = [];
            while (true) {
                if (this.peek() === '[') {
                    isNumber = false;
                    this.p++;
                    var prop = this.readValue() || new IdentifierToken(this.input, this.p, this.p, this.file);
                    this.readTo(']');
                    props.push(prop);
                }
                else if (this.peek() === '.' && this.peek(1) !== '.') { // skip range syntax
                    this.p++;
                    var prop = this.readIdentifier();
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
        };
        Tokenizer.prototype.readRange = function () {
            this.skipBlank();
            var begin = this.p;
            if (this.peek() !== '(')
                return;
            ++this.p;
            var lhs = this.readValueOrThrow();
            this.p += 2;
            var rhs = this.readValueOrThrow();
            ++this.p;
            return new RangeToken(this.input, begin, this.p, lhs, rhs, this.file);
        };
        Tokenizer.prototype.readValueOrThrow = function () {
            var _this = this;
            var value = this.readValue();
            assert(value, function () { return "unexpected token " + _this.snapshot() + ", value expected"; });
            return value;
        };
        Tokenizer.prototype.readQuoted = function () {
            this.skipBlank();
            var begin = this.p;
            if (!(this.peekType() & QUOTE))
                return;
            ++this.p;
            var escaped = false;
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
        };
        Tokenizer.prototype.readFileName = function () {
            var begin = this.p;
            while (!(this.peekType() & BLANK) && this.peek() !== ',' && this.p < this.N)
                this.p++;
            return new IdentifierToken(this.input, begin, this.p, this.file);
        };
        Tokenizer.prototype.match = function (word) {
            for (var i = 0; i < word.length; i++) {
                if (word[i] !== this.input[this.p + i])
                    return false;
            }
            return true;
        };
        Tokenizer.prototype.rmatch = function (pattern) {
            for (var i = 0; i < pattern.length; i++) {
                if (pattern[pattern.length - 1 - i] !== this.input[this.p - 1 - i])
                    return false;
            }
            return true;
        };
        Tokenizer.prototype.peekType = function (n) {
            if (n === void 0) { n = 0; }
            return TYPES[this.input.charCodeAt(this.p + n)];
        };
        Tokenizer.prototype.peek = function (n) {
            if (n === void 0) { n = 0; }
            return this.input[this.p + n];
        };
        Tokenizer.prototype.skipBlank = function () {
            while (this.peekType() & BLANK)
                ++this.p;
        };
        return Tokenizer;
    }());

    var Emitter = /** @class */ (function () {
        function Emitter(keepOutputType) {
            this.html = '';
            this.break = false;
            this.continue = false;
            this.keepOutputType = false;
            this.keepOutputType = keepOutputType;
        }
        Emitter.prototype.write = function (html) {
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
        };
        return Emitter;
    }());

    var Render = /** @class */ (function () {
        function Render() {
        }
        Render.prototype.renderTemplates = function (templates, ctx, emitter) {
            var templates_1, templates_1_1, tpl, html, e_1, err, e_2_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!emitter) {
                            emitter = new Emitter(ctx.opts.keepOutputType);
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, 9, 10]);
                        templates_1 = __values(templates), templates_1_1 = templates_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!templates_1_1.done) return [3 /*break*/, 7];
                        tpl = templates_1_1.value;
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, tpl.render(ctx, emitter)];
                    case 4:
                        html = _b.sent();
                        html && emitter.write(html);
                        if (emitter.break || emitter.continue)
                            return [3 /*break*/, 7];
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _b.sent();
                        err = RenderError.is(e_1) ? e_1 : new RenderError(e_1, tpl);
                        throw err;
                    case 6:
                        templates_1_1 = templates_1.next();
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (templates_1_1 && !templates_1_1.done && (_a = templates_1.return)) _a.call(templates_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/, emitter.html];
                }
            });
        };
        return Render;
    }());

    var ParseStream = /** @class */ (function () {
        function ParseStream(tokens, parseToken) {
            this.handlers = {};
            this.stopRequested = false;
            this.tokens = tokens;
            this.parseToken = parseToken;
        }
        ParseStream.prototype.on = function (name, cb) {
            this.handlers[name] = cb;
            return this;
        };
        ParseStream.prototype.trigger = function (event, arg) {
            var h = this.handlers[event];
            return h ? (h(arg), true) : false;
        };
        ParseStream.prototype.start = function () {
            this.trigger('start');
            var token;
            while (!this.stopRequested && (token = this.tokens.shift())) {
                if (this.trigger('token', token))
                    continue;
                if (isTagToken(token) && this.trigger("tag:" + token.name, token)) {
                    continue;
                }
                var template = this.parseToken(token, this.tokens);
                this.trigger('template', template);
            }
            if (!this.stopRequested)
                this.trigger('end');
            return this;
        };
        ParseStream.prototype.stop = function () {
            this.stopRequested = true;
            return this;
        };
        return ParseStream;
    }());

    var TemplateImpl = /** @class */ (function () {
        function TemplateImpl(token) {
            this.token = token;
        }
        return TemplateImpl;
    }());

    /**
     * Key-Value Pairs Representing Tag Arguments
     * Example:
     *    For the markup `, foo:'bar', coo:2 reversed %}`,
     *    hash['foo'] === 'bar'
     *    hash['coo'] === 2
     *    hash['reversed'] === undefined
     */
    var Hash = /** @class */ (function () {
        function Hash(markup) {
            var e_1, _a;
            this.hash = {};
            var tokenizer = new Tokenizer(markup, {});
            try {
                for (var _b = __values(tokenizer.readHashes()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var hash = _c.value;
                    this.hash[hash.name.content] = hash.value;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        Hash.prototype.render = function (ctx) {
            var hash, _a, _b, key, _c, _d, e_2_1;
            var e_2, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        hash = {};
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 6, 7, 8]);
                        _a = __values(Object.keys(this.hash)), _b = _a.next();
                        _f.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 5];
                        key = _b.value;
                        _c = hash;
                        _d = key;
                        return [4 /*yield*/, evalToken(this.hash[key], ctx)];
                    case 3:
                        _c[_d] = _f.sent();
                        _f.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_2_1 = _f.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, hash];
                }
            });
        };
        return Hash;
    }());

    function isKeyValuePair(arr) {
        return isArray(arr);
    }

    var Filter = /** @class */ (function () {
        function Filter(name, impl, args, liquid) {
            this.name = name;
            this.impl = impl || identify;
            this.args = args;
            this.liquid = liquid;
        }
        Filter.prototype.render = function (value, context) {
            var e_1, _a;
            var argv = [];
            try {
                for (var _b = __values(this.args), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var arg = _c.value;
                    if (isKeyValuePair(arg))
                        argv.push([arg[0], evalToken(arg[1], context)]);
                    else
                        argv.push(evalToken(arg, context));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return this.impl.apply({ context: context, liquid: this.liquid }, __spread([value], argv));
        };
        return Filter;
    }());

    var Value = /** @class */ (function () {
        /**
         * @param str the value to be valuated, eg.: "foobar" | truncate: 3
         */
        function Value(str, liquid) {
            this.filters = [];
            var tokenizer = new Tokenizer(str, liquid.options.operatorsTrie);
            this.initial = tokenizer.readExpression();
            this.filters = tokenizer.readFilters().map(function (_a) {
                var name = _a.name, args = _a.args;
                return new Filter(name, liquid.filters.get(name), args, liquid);
            });
        }
        Value.prototype.value = function (ctx, lenient) {
            var val, _a, _b, filter, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        lenient = lenient || (ctx.opts.lenientIf && this.filters.length > 0 && this.filters[0].name === 'default');
                        return [4 /*yield*/, this.initial.evaluate(ctx, lenient)];
                    case 1:
                        val = _d.sent();
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 7, 8, 9]);
                        _a = __values(this.filters), _b = _a.next();
                        _d.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 6];
                        filter = _b.value;
                        return [4 /*yield*/, filter.render(val, ctx)];
                    case 4:
                        val = _d.sent();
                        _d.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, val];
                }
            });
        };
        return Value;
    }());

    function createResolvedThenable(value) {
        var ret = {
            then: function (resolve) { return resolve(value); },
            catch: function () { return ret; }
        };
        return ret;
    }
    function createRejectedThenable(err) {
        var ret = {
            then: function (resolve, reject) {
                if (reject)
                    return reject(err);
                return ret;
            },
            catch: function (reject) { return reject(err); }
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
            var state;
            try {
                state = val.next(prev);
            }
            catch (err) {
                return createRejectedThenable(err);
            }
            if (state.done)
                return createResolvedThenable(state.value);
            return toThenable(state.value).then(reduce, function (err) {
                var state;
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
        var ret;
        toThenable(val)
            .then(function (x) {
            ret = x;
            return createResolvedThenable(ret);
        })
            .catch(function (err) {
            throw err;
        });
        return ret;
    }

    var Tag = /** @class */ (function (_super) {
        __extends(Tag, _super);
        function Tag(token, tokens, liquid) {
            var _this = _super.call(this, token) || this;
            _this.name = token.name;
            var impl = liquid.tags.get(token.name);
            _this.impl = Object.create(impl);
            _this.impl.liquid = liquid;
            if (_this.impl.parse) {
                _this.impl.parse(token, tokens);
            }
            return _this;
        }
        Tag.prototype.render = function (ctx, emitter) {
            var hash, impl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Hash(this.token.args).render(ctx)];
                    case 1:
                        hash = _a.sent();
                        impl = this.impl;
                        if (!isFunction(impl.render)) return [3 /*break*/, 3];
                        return [4 /*yield*/, impl.render(ctx, emitter, hash)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/];
                }
            });
        };
        return Tag;
    }(TemplateImpl));

    var Output = /** @class */ (function (_super) {
        __extends(Output, _super);
        function Output(token, liquid) {
            var _this = _super.call(this, token) || this;
            _this.value = new Value(token.content, liquid);
            return _this;
        }
        Output.prototype.render = function (ctx, emitter) {
            var val;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.value.value(ctx, false)];
                    case 1:
                        val = _a.sent();
                        emitter.write(val);
                        return [2 /*return*/];
                }
            });
        };
        return Output;
    }(TemplateImpl));

    var HTML = /** @class */ (function (_super) {
        __extends(HTML, _super);
        function HTML(token) {
            var _this = _super.call(this, token) || this;
            _this.str = token.getContent();
            return _this;
        }
        HTML.prototype.render = function (ctx, emitter) {
            return __generator(this, function (_a) {
                emitter.write(this.str);
                return [2 /*return*/];
            });
        };
        return HTML;
    }(TemplateImpl));

    var Parser = /** @class */ (function () {
        function Parser(liquid) {
            this.liquid = liquid;
        }
        Parser.prototype.parse = function (tokens) {
            var token;
            var templates = [];
            while ((token = tokens.shift())) {
                templates.push(this.parseToken(token, tokens));
            }
            return templates;
        };
        Parser.prototype.parseToken = function (token, remainTokens) {
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
        };
        Parser.prototype.parseStream = function (tokens) {
            var _this = this;
            return new ParseStream(tokens, function (token, tokens) { return _this.parseToken(token, tokens); });
        };
        return Parser;
    }());

    var assign = {
        parse: function (token) {
            var tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
            this.key = tokenizer.readIdentifier().content;
            tokenizer.skipBlank();
            assert(tokenizer.peek() === '=', function () { return "illegal token " + token.getText(); });
            tokenizer.advance();
            this.value = tokenizer.remaining();
        },
        render: function (ctx) {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = ctx.bottom();
                        _b = this.key;
                        return [4 /*yield*/, this.liquid._evalValue(this.value, ctx)];
                    case 1:
                        _a[_b] = _c.sent();
                        return [2 /*return*/];
                }
            });
        }
    };

    function toEnumerable(val) {
        if (isArray(val))
            return val;
        if (isString(val) && val.length > 0)
            return [val];
        if (isObject(val))
            return Object.keys(val).map(function (key) { return [key, val[key]]; });
        return [];
    }
    function toArray(val) {
        if (isArray(val))
            return val;
        return [val];
    }

    var ForloopDrop = /** @class */ (function (_super) {
        __extends(ForloopDrop, _super);
        function ForloopDrop(length) {
            var _this = _super.call(this) || this;
            _this.i = 0;
            _this.length = length;
            return _this;
        }
        ForloopDrop.prototype.next = function () {
            this.i++;
        };
        ForloopDrop.prototype.index0 = function () {
            return this.i;
        };
        ForloopDrop.prototype.index = function () {
            return this.i + 1;
        };
        ForloopDrop.prototype.first = function () {
            return this.i === 0;
        };
        ForloopDrop.prototype.last = function () {
            return this.i === this.length - 1;
        };
        ForloopDrop.prototype.rindex = function () {
            return this.length - this.i;
        };
        ForloopDrop.prototype.rindex0 = function () {
            return this.length - this.i - 1;
        };
        ForloopDrop.prototype.valueOf = function () {
            return JSON.stringify(this);
        };
        return ForloopDrop;
    }(Drop));

    var For = {
        type: 'block',
        parse: function (token, remainTokens) {
            var _this = this;
            var toknenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
            var variable = toknenizer.readIdentifier();
            var inStr = toknenizer.readIdentifier();
            var collection = toknenizer.readValue();
            assert(variable.size() && inStr.content === 'in' && collection, function () { return "illegal tag: " + token.getText(); });
            this.variable = variable.content;
            this.collection = collection;
            this.hash = new Hash(toknenizer.remaining());
            this.templates = [];
            this.elseTemplates = [];
            var p;
            var stream = this.liquid.parser.parseStream(remainTokens)
                .on('start', function () { return (p = _this.templates); })
                .on('tag:else', function () { return (p = _this.elseTemplates); })
                .on('tag:endfor', function () { return stream.stop(); })
                .on('template', function (tpl) { return p.push(tpl); })
                .on('end', function () {
                throw new Error("tag " + token.getText() + " not closed");
            });
            stream.start();
        },
        render: function (ctx, emitter) {
            var r, collection, _a, hash, offset, limit, scope, collection_1, collection_1_1, item, e_1_1;
            var e_1, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        r = this.liquid.renderer;
                        _a = toEnumerable;
                        return [4 /*yield*/, evalToken(this.collection, ctx)];
                    case 1:
                        collection = _a.apply(void 0, [_c.sent()]);
                        if (!!collection.length) return [3 /*break*/, 3];
                        return [4 /*yield*/, r.renderTemplates(this.elseTemplates, ctx, emitter)];
                    case 2:
                        _c.sent();
                        return [2 /*return*/];
                    case 3: return [4 /*yield*/, this.hash.render(ctx)];
                    case 4:
                        hash = _c.sent();
                        offset = hash.offset || 0;
                        limit = (hash.limit === undefined) ? collection.length : hash.limit;
                        collection = collection.slice(offset, offset + limit);
                        if ('reversed' in hash)
                            collection.reverse();
                        scope = { forloop: new ForloopDrop(collection.length) };
                        ctx.push(scope);
                        _c.label = 5;
                    case 5:
                        _c.trys.push([5, 10, 11, 12]);
                        collection_1 = __values(collection), collection_1_1 = collection_1.next();
                        _c.label = 6;
                    case 6:
                        if (!!collection_1_1.done) return [3 /*break*/, 9];
                        item = collection_1_1.value;
                        scope[this.variable] = item;
                        return [4 /*yield*/, r.renderTemplates(this.templates, ctx, emitter)];
                    case 7:
                        _c.sent();
                        if (emitter.break) {
                            emitter.break = false;
                            return [3 /*break*/, 9];
                        }
                        emitter.continue = false;
                        scope.forloop.next();
                        _c.label = 8;
                    case 8:
                        collection_1_1 = collection_1.next();
                        return [3 /*break*/, 6];
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        e_1_1 = _c.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 11:
                        try {
                            if (collection_1_1 && !collection_1_1.done && (_b = collection_1.return)) _b.call(collection_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 12:
                        ctx.pop();
                        return [2 /*return*/];
                }
            });
        }
    };

    var capture = {
        parse: function (tagToken, remainTokens) {
            var _this = this;
            var tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
            this.variable = readVariableName(tokenizer);
            assert(this.variable, function () { return tagToken.args + " not valid identifier"; });
            this.templates = [];
            var stream = this.liquid.parser.parseStream(remainTokens);
            stream.on('tag:endcapture', function () { return stream.stop(); })
                .on('template', function (tpl) { return _this.templates.push(tpl); })
                .on('end', function () {
                throw new Error("tag " + tagToken.getText() + " not closed");
            });
            stream.start();
        },
        render: function (ctx) {
            var r, html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = this.liquid.renderer;
                        return [4 /*yield*/, r.renderTemplates(this.templates, ctx)];
                    case 1:
                        html = _a.sent();
                        ctx.bottom()[this.variable] = html;
                        return [2 /*return*/];
                }
            });
        }
    };
    function readVariableName(tokenizer) {
        var word = tokenizer.readIdentifier().content;
        if (word)
            return word;
        var quoted = tokenizer.readQuoted();
        if (quoted)
            return evalQuotedToken(quoted);
    }

    var Case = {
        parse: function (tagToken, remainTokens) {
            var _this = this;
            this.cond = new Value(tagToken.args, this.liquid);
            this.cases = [];
            this.elseTemplates = [];
            var p = [];
            var stream = this.liquid.parser.parseStream(remainTokens)
                .on('tag:when', function (token) {
                p = [];
                var tokenizer = new Tokenizer(token.args, _this.liquid.options.operatorsTrie);
                while (!tokenizer.end()) {
                    var value = tokenizer.readValue();
                    if (value) {
                        _this.cases.push({
                            val: value,
                            templates: p
                        });
                    }
                    tokenizer.readTo(',');
                }
            })
                .on('tag:else', function () { return (p = _this.elseTemplates); })
                .on('tag:endcase', function () { return stream.stop(); })
                .on('template', function (tpl) { return p.push(tpl); })
                .on('end', function () {
                throw new Error("tag " + tagToken.getText() + " not closed");
            });
            stream.start();
        },
        render: function (ctx, emitter) {
            var r, cond, _a, _b, _c, branch, val, e_1_1;
            var e_1, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        r = this.liquid.renderer;
                        _a = toValue;
                        return [4 /*yield*/, this.cond.value(ctx, ctx.opts.lenientIf)];
                    case 1:
                        cond = _a.apply(void 0, [_e.sent()]);
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 7, 8, 9]);
                        _b = __values(this.cases), _c = _b.next();
                        _e.label = 3;
                    case 3:
                        if (!!_c.done) return [3 /*break*/, 6];
                        branch = _c.value;
                        val = evalToken(branch.val, ctx, ctx.opts.lenientIf);
                        if (!(val === cond)) return [3 /*break*/, 5];
                        return [4 /*yield*/, r.renderTemplates(branch.templates, ctx, emitter)];
                    case 4:
                        _e.sent();
                        return [2 /*return*/];
                    case 5:
                        _c = _b.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [4 /*yield*/, r.renderTemplates(this.elseTemplates, ctx, emitter)];
                    case 10:
                        _e.sent();
                        return [2 /*return*/];
                }
            });
        }
    };

    var comment = {
        parse: function (tagToken, remainTokens) {
            var stream = this.liquid.parser.parseStream(remainTokens);
            stream
                .on('token', function (token) {
                if (token.name === 'endcomment')
                    stream.stop();
            })
                .on('end', function () {
                throw new Error("tag " + tagToken.getText() + " not closed");
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
            var args = token.args;
            var tokenizer = new Tokenizer(args, this.liquid.options.operatorsTrie);
            this.file = this.liquid.options.dynamicPartials
                ? tokenizer.readValue()
                : tokenizer.readFileName();
            assert(this.file, function () { return "illegal argument \"" + token.args + "\""; });
            var begin = tokenizer.p;
            var withStr = tokenizer.readIdentifier();
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
        render: function (ctx, emitter) {
            var _a, liquid, hash, withVar, file, renderer, filepath, _b, _c, saved, scope, templates;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this, liquid = _a.liquid, hash = _a.hash, withVar = _a.withVar, file = _a.file;
                        renderer = liquid.renderer;
                        if (!ctx.opts.dynamicPartials) return [3 /*break*/, 5];
                        if (!isQuotedToken(file)) return [3 /*break*/, 2];
                        return [4 /*yield*/, renderer.renderTemplates(liquid.parse(evalQuotedToken(file)), ctx)];
                    case 1:
                        _c = _d.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, evalToken(file, ctx)];
                    case 3:
                        _c = _d.sent();
                        _d.label = 4;
                    case 4:
                        _b = (_c);
                        return [3 /*break*/, 6];
                    case 5:
                        _b = file.getText();
                        _d.label = 6;
                    case 6:
                        filepath = _b;
                        assert(filepath, function () { return "illegal filename \"" + file.getText() + "\":\"" + filepath + "\""; });
                        saved = ctx.saveRegister('blocks', 'blockMode');
                        ctx.setRegister('blocks', {});
                        ctx.setRegister('blockMode', BlockMode$1.OUTPUT);
                        return [4 /*yield*/, hash.render(ctx)];
                    case 7:
                        scope = _d.sent();
                        if (withVar)
                            scope[filepath] = evalToken(withVar, ctx);
                        return [4 /*yield*/, liquid._parseFile(filepath, ctx.opts, ctx.sync)];
                    case 8:
                        templates = _d.sent();
                        ctx.push(scope);
                        return [4 /*yield*/, renderer.renderTemplates(templates, ctx, emitter)];
                    case 9:
                        _d.sent();
                        ctx.pop();
                        ctx.restoreRegister(saved);
                        return [2 /*return*/];
                }
            });
        }
    };

    var render = {
        parse: function (token) {
            var args = token.args;
            var tokenizer = new Tokenizer(args, this.liquid.options.operatorsTrie);
            this.file = this.liquid.options.dynamicPartials
                ? tokenizer.readValue()
                : tokenizer.readFileName();
            assert(this.file, function () { return "illegal argument \"" + token.args + "\""; });
            while (!tokenizer.end()) {
                tokenizer.skipBlank();
                var begin = tokenizer.p;
                var keyword = tokenizer.readIdentifier();
                if (keyword.content === 'with' || keyword.content === 'for') {
                    tokenizer.skipBlank();
                    if (tokenizer.peek() !== ':') {
                        var value = tokenizer.readValue();
                        if (value) {
                            var beforeAs = tokenizer.p;
                            var asStr = tokenizer.readIdentifier();
                            var alias = void 0;
                            if (asStr.content === 'as')
                                alias = tokenizer.readIdentifier();
                            else
                                tokenizer.p = beforeAs;
                            this[keyword.content] = { value: value, alias: alias && alias.content };
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
        render: function (ctx, emitter) {
            var _a, liquid, file, hash, renderer, filepath, _b, _c, config, _d, sections, settings, childCtx, scope, _e, value, alias, _f, value, alias, collection, collection_1, collection_1_1, item, templates, e_1_1, templates;
            var e_1, _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        _a = this, liquid = _a.liquid, file = _a.file, hash = _a.hash;
                        renderer = liquid.renderer;
                        if (!ctx.opts.dynamicPartials) return [3 /*break*/, 4];
                        if (!isQuotedToken(file)) return [3 /*break*/, 2];
                        return [4 /*yield*/, renderer.renderTemplates(liquid.parse(evalQuotedToken(file)), ctx)];
                    case 1:
                        _c = _h.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _c = evalToken(file, ctx);
                        _h.label = 3;
                    case 3:
                        _b = (_c);
                        return [3 /*break*/, 5];
                    case 4:
                        _b = file.getText();
                        _h.label = 5;
                    case 5:
                        filepath = _b;
                        assert(filepath, function () { return "illegal filename \"" + file.getText() + "\":\"" + filepath + "\""; });
                        config = {};
                        try {
                            _d = ctx.environments.themeConfig || ctx.environments.settings || { sections: [] }, sections = _d.sections, settings = __rest(_d, ["sections"]);
                            config = __assign({}, ctx.environments, { settings: settings });
                        }
                        catch (err) {
                            console.error('ctx.environments.themeConfig 解构失败', err);
                        }
                        childCtx = new Context(config, ctx.opts, ctx.sync);
                        return [4 /*yield*/, hash.render(ctx)];
                    case 6:
                        scope = _h.sent();
                        if (this['with']) {
                            _e = this['with'], value = _e.value, alias = _e.alias;
                            scope[alias || filepath] = evalToken(value, ctx);
                        }
                        childCtx.push(scope);
                        if (!this['for']) return [3 /*break*/, 16];
                        _f = this['for'], value = _f.value, alias = _f.alias;
                        collection = evalToken(value, ctx);
                        collection = toEnumerable(collection);
                        scope['forloop'] = new ForloopDrop(collection.length);
                        _h.label = 7;
                    case 7:
                        _h.trys.push([7, 13, 14, 15]);
                        collection_1 = __values(collection), collection_1_1 = collection_1.next();
                        _h.label = 8;
                    case 8:
                        if (!!collection_1_1.done) return [3 /*break*/, 12];
                        item = collection_1_1.value;
                        scope[alias] = item;
                        return [4 /*yield*/, liquid._parseFile(filepath, childCtx.opts, childCtx.sync)];
                    case 9:
                        templates = _h.sent();
                        return [4 /*yield*/, renderer.renderTemplates(templates, childCtx, emitter)];
                    case 10:
                        _h.sent();
                        scope.forloop.next();
                        _h.label = 11;
                    case 11:
                        collection_1_1 = collection_1.next();
                        return [3 /*break*/, 8];
                    case 12: return [3 /*break*/, 15];
                    case 13:
                        e_1_1 = _h.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 15];
                    case 14:
                        try {
                            if (collection_1_1 && !collection_1_1.done && (_g = collection_1.return)) _g.call(collection_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 15: return [3 /*break*/, 19];
                    case 16: return [4 /*yield*/, liquid._parseFile(filepath, childCtx.opts, childCtx.sync)];
                    case 17:
                        templates = _h.sent();
                        return [4 /*yield*/, renderer.renderTemplates(templates, childCtx, emitter)];
                    case 18:
                        _h.sent();
                        _h.label = 19;
                    case 19: return [2 /*return*/];
                }
            });
        }
    };

    var decrement = {
        parse: function (token) {
            var tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
            this.variable = tokenizer.readIdentifier().content;
        },
        render: function (context, emitter) {
            var scope = context.environments;
            if (!isNumber(scope[this.variable])) {
                scope[this.variable] = 0;
            }
            emitter.write(stringify(--scope[this.variable]));
        }
    };

    var cycle = {
        parse: function (tagToken) {
            var tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
            var group = tokenizer.readValue();
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
                var value = tokenizer.readValue();
                if (value)
                    this.candidates.push(value);
                tokenizer.readTo(',');
            }
            assert(this.candidates.length, function () { return "empty candidates: " + tagToken.getText(); });
        },
        render: function (ctx, emitter) {
            var group = evalToken(this.group, ctx);
            var fingerprint = "cycle:" + group + ":" + this.candidates.join(',');
            var groups = ctx.getRegister('cycle');
            var idx = groups[fingerprint];
            if (idx === undefined) {
                idx = groups[fingerprint] = 0;
            }
            var candidate = this.candidates[idx];
            idx = (idx + 1) % this.candidates.length;
            groups[fingerprint] = idx;
            var html = evalToken(candidate, ctx);
            emitter.write(html);
        }
    };

    var If = {
        parse: function (tagToken, remainTokens) {
            var _this = this;
            this.branches = [];
            this.elseTemplates = [];
            var p;
            var stream = this.liquid.parser.parseStream(remainTokens)
                .on('start', function () { return _this.branches.push({
                cond: new Value(tagToken.args, _this.liquid),
                templates: (p = [])
            }); })
                .on('tag:elsif', function (token) {
                _this.branches.push({
                    cond: new Value(token.args, _this.liquid),
                    templates: p = []
                });
            })
                .on('tag:else', function () { return (p = _this.elseTemplates); })
                .on('tag:else-', function () { return (p = _this.elseTemplates); })
                .on('tag:endif', function () { return stream.stop(); })
                .on('tag:endif-', function () { return stream.stop(); })
                .on('template', function (tpl) { return p.push(tpl); })
                .on('end', function () {
                throw new Error("tag " + tagToken.getText() + " not closed");
            });
            stream.start();
        },
        render: function (ctx, emitter) {
            var r, _a, _b, branch, cond, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        r = this.liquid.renderer;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 7, 8, 9]);
                        _a = __values(this.branches), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 6];
                        branch = _b.value;
                        return [4 /*yield*/, branch.cond.value(ctx, ctx.opts.lenientIf)];
                    case 3:
                        cond = _d.sent();
                        if (!isTruthy(cond, ctx)) return [3 /*break*/, 5];
                        return [4 /*yield*/, r.renderTemplates(branch.templates, ctx, emitter)];
                    case 4:
                        _d.sent();
                        return [2 /*return*/];
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [4 /*yield*/, r.renderTemplates(this.elseTemplates, ctx, emitter)];
                    case 10:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        }
    };

    var increment = {
        parse: function (token) {
            var tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
            this.variable = tokenizer.readIdentifier().content;
        },
        render: function (context, emitter) {
            var scope = context.environments;
            if (!isNumber(scope[this.variable])) {
                scope[this.variable] = 0;
            }
            var val = scope[this.variable];
            scope[this.variable]++;
            emitter.write(stringify(val));
        }
    };

    var layout = {
        parse: function (token, remainTokens) {
            var tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
            var file = this.liquid.options.dynamicPartials ? tokenizer.readValue() : tokenizer.readFileName();
            assert(file, function () { return "illegal argument \"" + token.args + "\""; });
            this.file = file;
            this.hash = new Hash(tokenizer.remaining());
            this.tpls = this.liquid.parser.parse(remainTokens);
        },
        render: function (ctx, emitter) {
            var _a, liquid, hash, file, renderer, html_1, filepath, _b, _c, templates, html, blocks, _d, _e, partial;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _a = this, liquid = _a.liquid, hash = _a.hash, file = _a.file;
                        renderer = liquid.renderer;
                        if (!(file.getText() === 'none')) return [3 /*break*/, 2];
                        ctx.setRegister('blockMode', BlockMode$1.OUTPUT);
                        return [4 /*yield*/, renderer.renderTemplates(this.tpls, ctx)];
                    case 1:
                        html_1 = _f.sent();
                        emitter.write(html_1);
                        return [2 /*return*/];
                    case 2:
                        if (!ctx.opts.dynamicPartials) return [3 /*break*/, 6];
                        if (!isQuotedToken(file)) return [3 /*break*/, 4];
                        return [4 /*yield*/, renderer.renderTemplates(liquid.parse(evalQuotedToken(file)), ctx)];
                    case 3:
                        _c = _f.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _c = evalToken(this.file, ctx);
                        _f.label = 5;
                    case 5:
                        _b = (_c);
                        return [3 /*break*/, 7];
                    case 6:
                        _b = file.getText();
                        _f.label = 7;
                    case 7:
                        filepath = _b;
                        assert(filepath, function () { return "file \"" + file.getText() + "\"(\"" + filepath + "\") not available"; });
                        return [4 /*yield*/, liquid._parseFile(filepath, ctx.opts, ctx.sync)
                            // render remaining contents and store rendered results
                        ];
                    case 8:
                        templates = _f.sent();
                        // render remaining contents and store rendered results
                        ctx.setRegister('blockMode', BlockMode$1.STORE);
                        return [4 /*yield*/, renderer.renderTemplates(this.tpls, ctx)];
                    case 9:
                        html = _f.sent();
                        blocks = ctx.getRegister('blocks');
                        if (blocks[''] === undefined)
                            blocks[''] = function () { return html; };
                        ctx.setRegister('blockMode', BlockMode$1.OUTPUT);
                        // render the layout file use stored blocks
                        _e = (_d = ctx).push;
                        return [4 /*yield*/, hash.render(ctx)];
                    case 10:
                        // render the layout file use stored blocks
                        _e.apply(_d, [_f.sent()]);
                        return [4 /*yield*/, renderer.renderTemplates(templates, ctx)];
                    case 11:
                        partial = _f.sent();
                        ctx.pop();
                        emitter.write(partial);
                        return [2 /*return*/];
                }
            });
        }
    };

    var BlockDrop = /** @class */ (function (_super) {
        __extends(BlockDrop, _super);
        function BlockDrop(
        // the block render from layout template
        superBlockRender) {
            if (superBlockRender === void 0) { superBlockRender = function () { return ''; }; }
            var _this = _super.call(this) || this;
            _this.superBlockRender = superBlockRender;
            return _this;
        }
        BlockDrop.prototype.super = function () {
            return this.superBlockRender();
        };
        return BlockDrop;
    }(Drop));

    var block = {
        parse: function (token, remainTokens) {
            var _this = this;
            var match = /\w+/.exec(token.args);
            this.block = match ? match[0] : '';
            this.tpls = [];
            var stream = this.liquid.parser.parseStream(remainTokens)
                .on('tag:endblock', function () { return stream.stop(); })
                .on('template', function (tpl) { return _this.tpls.push(tpl); })
                .on('end', function () {
                throw new Error("tag " + token.getText() + " not closed");
            });
            stream.start();
        },
        render: function (ctx, emitter) {
            var blockRender;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        blockRender = this.getBlockRender(ctx);
                        return [4 /*yield*/, this.emitHTML(ctx, emitter, blockRender)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        },
        getBlockRender: function (ctx) {
            var _a = this, liquid = _a.liquid, tpls = _a.tpls;
            var extendedBlockRender = ctx.getRegister('blocks')[this.block];
            var defaultBlockRender = function (superBlock) {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ctx.push({ block: superBlock });
                            return [4 /*yield*/, liquid.renderer.renderTemplates(tpls, ctx)];
                        case 1:
                            result = _a.sent();
                            ctx.pop();
                            return [2 /*return*/, result];
                    }
                });
            };
            return extendedBlockRender
                ? function (superBlock) { return extendedBlockRender(new BlockDrop(function () { return defaultBlockRender(superBlock); })); }
                : defaultBlockRender;
        },
        emitHTML: function (ctx, emitter, blockRender) {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(ctx.getRegister('blockMode', BlockMode$1.OUTPUT) === BlockMode$1.STORE)) return [3 /*break*/, 1];
                        ctx.getRegister('blocks')[this.block] = blockRender;
                        return [3 /*break*/, 3];
                    case 1:
                        _b = (_a = emitter).write;
                        return [4 /*yield*/, blockRender(new BlockDrop())];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }
    };

    var raw = {
        parse: function (tagToken, remainTokens) {
            var _this = this;
            this.tokens = [];
            var stream = this.liquid.parser.parseStream(remainTokens);
            stream
                .on('token', function (token) {
                if (token.name === 'endraw')
                    stream.stop();
                else
                    _this.tokens.push(token);
            })
                .on('end', function () {
                throw new Error("tag " + tagToken.getText() + " not closed");
            });
            stream.start();
        },
        render: function () {
            return this.tokens.map(function (token) { return token.getText(); }).join('');
        }
    };

    var TablerowloopDrop = /** @class */ (function (_super) {
        __extends(TablerowloopDrop, _super);
        function TablerowloopDrop(length, cols) {
            var _this = _super.call(this, length) || this;
            _this.length = length;
            _this.cols = cols;
            return _this;
        }
        TablerowloopDrop.prototype.row = function () {
            return Math.floor(this.i / this.cols) + 1;
        };
        TablerowloopDrop.prototype.col0 = function () {
            return (this.i % this.cols);
        };
        TablerowloopDrop.prototype.col = function () {
            return this.col0() + 1;
        };
        TablerowloopDrop.prototype.col_first = function () {
            return this.col0() === 0;
        };
        TablerowloopDrop.prototype.col_last = function () {
            return this.col() === this.cols;
        };
        return TablerowloopDrop;
    }(ForloopDrop));

    var tablerow = {
        parse: function (tagToken, remainTokens) {
            var _this = this;
            var tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
            this.variable = tokenizer.readIdentifier();
            tokenizer.skipBlank();
            var tmp = tokenizer.readIdentifier();
            assert(tmp && tmp.content === 'in', function () { return "illegal tag: " + tagToken.getText(); });
            this.collection = tokenizer.readValue();
            this.hash = new Hash(tokenizer.remaining());
            this.templates = [];
            var p;
            var stream = this.liquid.parser.parseStream(remainTokens)
                .on('start', function () { return (p = _this.templates); })
                .on('tag:endtablerow', function () { return stream.stop(); })
                .on('template', function (tpl) { return p.push(tpl); })
                .on('end', function () {
                throw new Error("tag " + tagToken.getText() + " not closed");
            });
            stream.start();
        },
        render: function (ctx, emitter) {
            var collection, _a, hash, offset, limit, cols, r, tablerowloop, scope, idx;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = toEnumerable;
                        return [4 /*yield*/, evalToken(this.collection, ctx)];
                    case 1:
                        collection = _a.apply(void 0, [_b.sent()]);
                        return [4 /*yield*/, this.hash.render(ctx)];
                    case 2:
                        hash = _b.sent();
                        offset = hash.offset || 0;
                        limit = (hash.limit === undefined) ? collection.length : hash.limit;
                        collection = collection.slice(offset, offset + limit);
                        cols = hash.cols || collection.length;
                        r = this.liquid.renderer;
                        tablerowloop = new TablerowloopDrop(collection.length, cols);
                        scope = { tablerowloop: tablerowloop };
                        ctx.push(scope);
                        idx = 0;
                        _b.label = 3;
                    case 3:
                        if (!(idx < collection.length)) return [3 /*break*/, 6];
                        scope[this.variable.content] = collection[idx];
                        if (tablerowloop.col0() === 0) {
                            if (tablerowloop.row() !== 1)
                                emitter.write('</tr>');
                            emitter.write("<tr class=\"row" + tablerowloop.row() + "\">");
                        }
                        emitter.write("<td class=\"col" + tablerowloop.col() + "\">");
                        return [4 /*yield*/, r.renderTemplates(this.templates, ctx, emitter)];
                    case 4:
                        _b.sent();
                        emitter.write('</td>');
                        _b.label = 5;
                    case 5:
                        idx++, tablerowloop.next();
                        return [3 /*break*/, 3];
                    case 6:
                        if (collection.length)
                            emitter.write('</tr>');
                        ctx.pop();
                        return [2 /*return*/];
                }
            });
        }
    };

    var unless = {
        parse: function (tagToken, remainTokens) {
            var _this = this;
            this.templates = [];
            this.branches = [];
            this.elseTemplates = [];
            var p;
            var stream = this.liquid.parser.parseStream(remainTokens)
                .on('start', function () {
                p = _this.templates;
                _this.cond = new Value(tagToken.args, _this.liquid);
            })
                .on('tag:elsif', function (token) {
                _this.branches.push({
                    cond: new Value(token.args, _this.liquid),
                    templates: p = []
                });
            })
                .on('tag:else', function () { return (p = _this.elseTemplates); })
                .on('tag:endunless', function () { return stream.stop(); })
                .on('template', function (tpl) { return p.push(tpl); })
                .on('end', function () {
                throw new Error("tag " + tagToken.getText() + " not closed");
            });
            stream.start();
        },
        render: function (ctx, emitter) {
            var r, cond, _a, _b, branch, cond_1, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        r = this.liquid.renderer;
                        return [4 /*yield*/, this.cond.value(ctx, ctx.opts.lenientIf)];
                    case 1:
                        cond = _d.sent();
                        if (!isFalsy(cond, ctx)) return [3 /*break*/, 3];
                        return [4 /*yield*/, r.renderTemplates(this.templates, ctx, emitter)];
                    case 2:
                        _d.sent();
                        return [2 /*return*/];
                    case 3:
                        _d.trys.push([3, 9, 10, 11]);
                        _a = __values(this.branches), _b = _a.next();
                        _d.label = 4;
                    case 4:
                        if (!!_b.done) return [3 /*break*/, 8];
                        branch = _b.value;
                        return [4 /*yield*/, branch.cond.value(ctx, ctx.opts.lenientIf)];
                    case 5:
                        cond_1 = _d.sent();
                        if (!isTruthy(cond_1, ctx)) return [3 /*break*/, 7];
                        return [4 /*yield*/, r.renderTemplates(branch.templates, ctx, emitter)];
                    case 6:
                        _d.sent();
                        return [2 /*return*/];
                    case 7:
                        _b = _a.next();
                        return [3 /*break*/, 4];
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 11];
                    case 10:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 11: return [4 /*yield*/, r.renderTemplates(this.elseTemplates, ctx, emitter)];
                    case 12:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
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
            var args = " {{ " + tagToken.args + " }} ";
            this.tokenizer = new Tokenizer(args, this.liquid.options.operatorsTrie);
        },
        render: function (ctx, emitter) {
            var _a, liquid, tokenizer, tokens, templates, templates_1, templates_1_1, tpl, html, err_1, e_1_1;
            var e_1, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this, liquid = _a.liquid, tokenizer = _a.tokenizer;
                        tokens = tokenizer.readTopLevelTokens(liquid.options);
                        templates = liquid.parser.parse(tokens);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 8, 9, 10]);
                        templates_1 = __values(templates), templates_1_1 = templates_1.next();
                        _c.label = 2;
                    case 2:
                        if (!!templates_1_1.done) return [3 /*break*/, 7];
                        tpl = templates_1_1.value;
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, tpl.render(ctx, emitter)];
                    case 4:
                        html = _c.sent();
                        html && emitter.write(html);
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _c.sent();
                        console.error('liquid tag parseError', err_1);
                        return [3 /*break*/, 6];
                    case 6:
                        templates_1_1 = templates_1.next();
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _c.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (templates_1_1 && !templates_1_1.done && (_b = templates_1.return)) _b.call(templates_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
                }
            });
        }
    };

    /******
     * 不同类型自定义参数配置
     * 自定义参数优先级低于标签应用层传入的变量
     * 自定义参数可以使用环境变量，如 id: '{{ product.id }}-1234'
     */
    var formTypeMapper = {
        product: {
            action: '/cart/add'
        }
    };
    // 将args解析成 json,并添加form默认属性
    function parseArgsToFormJson(args) {
        var argsList = args.split(',').map(function (i) { return i.replace(/\s/g, ''); });
        var defaultArgsJson = {
            enctype: 'multipart/form-data',
            method: 'post',
            'accept-charset': 'UTF-8',
        };
        if (!argsList.length) {
            return defaultArgsJson;
        }
        var first = argsList[0];
        // 第一条数据认为是 类型
        var type = first.replace(/['"]/g, '');
        var isValidateType = type.indexOf(':') === -1 && !!type;
        var result = defaultArgsJson;
        if (isValidateType) {
            result.type = type;
            argsList.shift();
        }
        result = __assign({}, result, formTypeMapper[type]);
        argsList.forEach(function (item) {
            var arr = item.split(':');
            if (!arr[1])
                return;
            result[arr[0]] = getLiquidValue(arr[1]);
        });
        return result;
    }
    function parseToForm(args) {
        var argsJson = parseArgsToFormJson(args);
        var defaultFormStr = "<form " + joinJsonToStr(argsJson) + ">\n    <input type=\"hidden\" value=\"" + (argsJson.type || '') + "\" name=\"form_type\">\n    <input type=\"hidden\" name=\"utf8\" value=\"\u2713\">\n  ";
        return defaultFormStr;
    }
    var form = {
        parse: function (tagToken, remainTokens) {
            var _this = this;
            var tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
            this.variable = readVariableName$1(tokenizer);
            this.templates = [];
            var stream = this.liquid.parser.parseStream(remainTokens);
            this.args = parseToForm(tagToken.args);
            stream.on('tag:endform', function () { return stream.stop(); })
                .on('template', function (tpl) {
                _this.templates.push(tpl);
            })
                .on('end', function () {
                throw new Error("tag " + tagToken.getText() + " not closed");
            });
            stream.start();
        },
        render: function (ctx, emitter) {
            var r, html, str;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = this.liquid.renderer;
                        return [4 /*yield*/, r.renderTemplates(this.templates, ctx)];
                    case 1:
                        html = _a.sent();
                        str = "" + this.args + html + "</form>";
                        return [2 /*return*/, str];
                }
            });
        }
    };
    function readVariableName$1(tokenizer) {
        var word = tokenizer.readIdentifier().content;
        if (word)
            return word;
        var quoted = tokenizer.readQuoted();
        if (quoted)
            return evalQuotedToken(quoted);
    }

    var javascript = {
        parse: function (tagToken, remainTokens) {
            var _this = this;
            var tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
            this.variable = readVariableName$2(tokenizer);
            this.templates = [];
            var stream = this.liquid.parser.parseStream(remainTokens);
            stream.on('tag:endjavascript', function () { return stream.stop(); })
                .on('template', function (tpl) {
                _this.templates.push(tpl);
            })
                .on('end', function () {
                throw new Error("tag " + tagToken.getText() + " not closed");
            });
            stream.start();
        },
        render: function (ctx, emitter) {
            var r, html, str;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = this.liquid.renderer;
                        return [4 /*yield*/, r.renderTemplates(this.templates, ctx)];
                    case 1:
                        html = _a.sent();
                        str = "<script>\n        window.addEventListener('load',function(){" + html + "})\n    </script>";
                        return [2 /*return*/, str];
                }
            });
        }
    };
    function readVariableName$2(tokenizer) {
        var word = tokenizer.readIdentifier().content;
        if (word)
            return word;
        var quoted = tokenizer.readQuoted();
        if (quoted)
            return evalQuotedToken(quoted);
    }

    var style = {
        parse: function (tagToken, remainTokens) {
            var _this = this;
            var tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
            this.variable = readVariableName$3(tokenizer);
            this.templates = [];
            var stream = this.liquid.parser.parseStream(remainTokens);
            stream.on('tag:endstyle', function () { return stream.stop(); })
                .on('template', function (tpl) {
                _this.templates.push(tpl);
            })
                .on('end', function () {
                throw new Error("tag " + tagToken.getText() + " not closed");
            });
            stream.start();
        },
        render: function (ctx, emitter) {
            var r, html, str;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = this.liquid.renderer;
                        return [4 /*yield*/, r.renderTemplates(this.templates, ctx)];
                    case 1:
                        html = _a.sent();
                        str = "<style>\n    " + html + "\n    </style>";
                        return [2 /*return*/, str];
                }
            });
        }
    };
    function readVariableName$3(tokenizer) {
        var word = tokenizer.readIdentifier().content;
        if (word)
            return word;
        var quoted = tokenizer.readQuoted();
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
        var list = args.split(/\n/).map(function (str) {
            if (/[\S]/g.test(str)) {
                var trimedStr = str.replace(/(^\s*)|(\s*$)/g, '');
                return "{% " + trimedStr + " %}";
            }
            return '';
        });
        var notEmptyList = list.filter(function (item) { return !!item; });
        return notEmptyList.join(' \n');
    }
    var liquid = {
        parse: function (tagToken) {
            var args = parseLiquidToNormal(tagToken.args);
            var tokenizer = new Tokenizer(args, this.liquid.options.operatorsTrie);
            var tokens = tokenizer.readTopLevelTokens(this.liquid.options);
            this.templates = this.liquid.parser.parse(tokens);
            this.key = tokenizer.readIdentifier().content;
        },
        render: function (ctx, emitter) {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = ctx.bottom();
                        _b = this.key;
                        return [4 /*yield*/, this.liquid.renderer.renderTemplates(this.templates, ctx, emitter)];
                    case 1:
                        _a[_b] = _c.sent();
                        return [2 /*return*/];
                }
            });
        }
    };

    var schema = {
        parse: function (tagToken, remainTokens) {
            var _this = this;
            this.tokens = [];
            var stream = this.liquid.parser.parseStream(remainTokens);
            stream
                .on('token', function (tagToken) {
                if (tagToken['name'] === 'endschema')
                    stream.stop();
                else
                    _this.tokens.push(tagToken);
            })
                .on('end', function () {
                throw new Error("tag " + tagToken['raw'] + " not closed");
            });
            stream.start();
        },
        render: function (ctx, emitter) {
            return __generator(this, function (_a) {
                return [2 /*return*/, ''];
            });
        }
    };

    var paginate = {
        parse: function (tagToken, remainTokens) {
            var _this = this;
            this.tokens = [];
            var stream = this.liquid.parser.parseStream(remainTokens);
            stream
                .on('token', function (tagToken) {
                if (tagToken['name'] === 'endpaginate')
                    stream.stop();
                else
                    _this.tokens.push(tagToken);
            })
                .on('end', function () {
                throw new Error("tag " + tagToken['raw'] + " not closed");
            });
            stream.start();
        },
        render: function (ctx, emitter) {
            return __generator(this, function (_a) {
                return [2 /*return*/, ''];
            });
        }
    };

    var transformThemeConfig = function (themeConfig) {
        if (!themeConfig)
            return {};
        var config = JSON.parse(themeConfig);
        // 将blocks 改为数组
        Object.keys(config.current.sections).forEach(function (key) {
            var item = config.current.sections[key];
            var blocks = [];
            if (item.blocks) {
                Object.keys(item.blocks).forEach(function (k) {
                    blocks.push(item.blocks[k]);
                });
            }
            item.blocks = blocks;
        });
        return config;
    };

    // 不同模块 容器添加默认dom
    var wrapperMapper = {
        header: '<div id="shopify-section-header" class="shopify-section" data-shopify-editor-section="{"id":"announcement-bar","type":"announcement-bar","disabled":false}">'
    };
    var section = {
        parse: function (tagToken) {
            var tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
            this.file = tokenizer.readValue();
            // const domain = this.liquid.options.root;
            var themeScope = new ThemeDataScope();
            this.domainFiles = themeScope.rootData;
            // console.log(domainFiles[1].data, 'ddd')
            var settingData = themeScope.getTpl('config/settings_data.json');
            this.themeConfig = transformThemeConfig(settingData).current;
            this.hash = new Hash(tokenizer.remaining());
        },
        render: function (ctx) {
            var _a, liquid, file, hash, renderer, _b, sections, settings, filePath, _c, section, scope, childCtx, html;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this, liquid = _a.liquid, file = _a.file, hash = _a.hash;
                        renderer = liquid.renderer;
                        _b = this.themeConfig, sections = _b.sections, settings = __rest(_b, ["sections"]);
                        if (!isQuotedToken(this.file)) return [3 /*break*/, 2];
                        return [4 /*yield*/, renderer.renderTemplates(liquid.parse(evalQuotedToken(file)), ctx)];
                    case 1:
                        _c = _d.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _c = evalToken(file, ctx);
                        _d.label = 3;
                    case 3:
                        filePath = _c;
                        // const templates = getSectionLiquid(this.domainFiles, filePath)
                        if (filePath.indexOf('sections/') < 0) {
                            filePath = "sections/" + filePath;
                        }
                        section = {};
                        if (Array.isArray(sections)) {
                            section = sections && sections.find(function (item) { return item.type === filePath; });
                        }
                        else {
                            section = sections[filePath];
                        }
                        return [4 /*yield*/, hash.render(ctx)
                            // ctx.push(scope)
                        ];
                    case 4:
                        scope = _d.sent();
                        childCtx = __assign({}, ctx.environments, { section: section, settings: settings }, scope, ctx.globals);
                        return [4 /*yield*/, this.liquid.renderFile(filePath, childCtx)];
                    case 5:
                        html = _d.sent();
                        if (wrapperMapper[filePath]) {
                            html = wrapperMapper[filePath] + " " + html + " </div>";
                        }
                        return [2 /*return*/, html];
                }
            });
        }
    };

    var tags = {
        assign: assign, 'for': For, capture: capture, 'case': Case, comment: comment, include: include, render: render, decrement: decrement, increment: increment, cycle: cycle, 'if': If, layout: layout, block: block, raw: raw, tablerow: tablerow, unless: unless, 'break': Break, 'continue': Continue, echo: echo, form: form, javascript: javascript, style: style, section: section, liquid: liquid, schema: schema, paginate: paginate
    };

    var escapeMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&#34;',
        "'": '&#39;'
    };
    var unescapeMap = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&#34;': '"',
        '&#39;': "'"
    };
    function escape(str) {
        return stringify(str).replace(/&|<|>|"|'/g, function (m) { return escapeMap[m]; });
    }
    function unescape(str) {
        return String(str).replace(/&(amp|lt|gt|#34|#39);/g, function (m) { return unescapeMap[m]; });
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

    var abs = Math.abs;
    var atLeast = Math.max;
    var atMost = Math.min;
    var ceil = Math.ceil;
    var dividedBy = function (v, arg) { return v / arg; };
    var floor = Math.floor;
    var minus = function (v, arg) { return v - arg; };
    var modulo = function (v, arg) { return v % arg; };
    var times = function (v, arg) { return v * arg; };
    function round(v, arg) {
        if (arg === void 0) { arg = 0; }
        var amp = Math.pow(10, arg);
        return Math.round(v * amp) / amp;
    }
    function plus(v, arg) {
        return Number(v) + Number(arg);
    }
    function sortNatural(input, property) {
        if (!input || !input.sort)
            return [];
        if (property !== undefined) {
            return __spread(input).sort(function (lhs, rhs) { return caseInsensitiveCompare(lhs[property], rhs[property]); });
        }
        return __spread(input).sort(caseInsensitiveCompare);
    }

    var urlDecode = function (x) { return x.split('+').map(decodeURIComponent).join(' '); };
    var urlEncode = function (x) { return x.split(' ').map(encodeURIComponent).join('+'); };
    var urlEscape = function (x) { return encodeURIComponent(x); };

    var join = function (v, arg) { return v.join(arg === undefined ? ' ' : arg); };
    var last$1 = function (v) { return isArray(v) ? last(v) : ''; };
    var first = function (v) { return isArray(v) ? v[0] : ''; };
    var reverse = function (v) { return __spread(v).reverse(); };
    function sort(arr, property) {
        var _this = this;
        var getValue = function (obj) { return property ? _this.context.getFromScope(obj, property.split('.')) : obj; };
        return toArray(arr).sort(function (lhs, rhs) {
            lhs = getValue(lhs);
            rhs = getValue(rhs);
            return lhs < rhs ? -1 : (lhs > rhs ? 1 : 0);
        });
    }
    var size = function (v) { return (v && v.length) || 0; };
    function map(arr, property) {
        var _this = this;
        return toArray(arr).map(function (obj) { return _this.context.getFromScope(obj, property.split('.')); });
    }
    function compact(arr) {
        return toArray(arr).filter(function (x) { return !isNil(x); });
    }
    function concat(v, arg) {
        return toArray(v).concat(arg);
    }
    function slice(v, begin, length) {
        if (length === void 0) { length = 1; }
        begin = begin < 0 ? v.length + begin : begin;
        return v.slice(begin, begin + length);
    }
    function where(arr, property, expected) {
        var _this = this;
        return toArray(arr).filter(function (obj) {
            var value = _this.context.getFromScope(obj, String(property).split('.'));
            return expected === undefined ? isTruthy(value, _this.context) : value === expected;
        });
    }
    function uniq(arr) {
        var u = {};
        return (arr || []).filter(function (val) {
            if (u.hasOwnProperty(String(val)))
                return false;
            u[String(val)] = true;
            return true;
        });
    }

    var rFormat = /%([-_0^#:]+)?(\d+)?([EO])?(.)/;
    var monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];
    var dayNames = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    var monthNamesShort = monthNames.map(abbr);
    var dayNamesShort = dayNames.map(abbr);
    var suffixes = {
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
        var feb = isLeapYear(d) ? 29 : 28;
        return [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }
    function getDayOfYear(d) {
        var num = 0;
        for (var i = 0; i < d.getMonth(); ++i) {
            num += daysInMonth(d)[i];
        }
        return num + d.getDate();
    }
    function getWeekOfYear(d, startDay) {
        // Skip to startDay of this week
        var now = getDayOfYear(d) + (startDay - d.getDay());
        // Find the first startDay of the year
        var jan1 = new Date(d.getFullYear(), 0, 1);
        var then = (7 - jan1.getDay() + startDay);
        return String(Math.floor((now - then) / 7) + 1);
    }
    function isLeapYear(d) {
        var year = d.getFullYear();
        return !!((year & 3) === 0 && (year % 100 || (year % 400 === 0 && year)));
    }
    function getSuffix(d) {
        var str = d.getDate().toString();
        var index = parseInt(str.slice(-1));
        return suffixes[index] || suffixes['default'];
    }
    function century(d) {
        return parseInt(d.getFullYear().toString().substring(0, 2), 10);
    }
    // default to 0
    var padWidths = {
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
    var padChars = {
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
    var formatCodes = {
        a: function (d) { return dayNamesShort[d.getDay()]; },
        A: function (d) { return dayNames[d.getDay()]; },
        b: function (d) { return monthNamesShort[d.getMonth()]; },
        B: function (d) { return monthNames[d.getMonth()]; },
        c: function (d) { return d.toLocaleString(); },
        C: function (d) { return century(d); },
        d: function (d) { return d.getDate(); },
        e: function (d) { return d.getDate(); },
        H: function (d) { return d.getHours(); },
        I: function (d) { return String(d.getHours() % 12 || 12); },
        j: function (d) { return getDayOfYear(d); },
        k: function (d) { return d.getHours(); },
        l: function (d) { return String(d.getHours() % 12 || 12); },
        L: function (d) { return d.getMilliseconds(); },
        m: function (d) { return d.getMonth() + 1; },
        M: function (d) { return d.getMinutes(); },
        N: function (d, opts) {
            var width = Number(opts.width) || 9;
            var str = String(d.getMilliseconds()).substr(0, width);
            return padEnd(str, width, '0');
        },
        p: function (d) { return (d.getHours() < 12 ? 'AM' : 'PM'); },
        P: function (d) { return (d.getHours() < 12 ? 'am' : 'pm'); },
        q: function (d) { return getSuffix(d); },
        s: function (d) { return Math.round(d.valueOf() / 1000); },
        S: function (d) { return d.getSeconds(); },
        u: function (d) { return d.getDay() || 7; },
        U: function (d) { return getWeekOfYear(d, 0); },
        w: function (d) { return d.getDay(); },
        W: function (d) { return getWeekOfYear(d, 1); },
        x: function (d) { return d.toLocaleDateString(); },
        X: function (d) { return d.toLocaleTimeString(); },
        y: function (d) { return d.getFullYear().toString().substring(2, 4); },
        Y: function (d) { return d.getFullYear(); },
        z: function (d, opts) {
            var offset = d.getTimezoneOffset();
            var nOffset = Math.abs(offset);
            var h = Math.floor(nOffset / 60);
            var m = nOffset % 60;
            return (offset > 0 ? '-' : '+') +
                padStart(h, 2, '0') +
                (opts.flags[':'] ? ':' : '') +
                padStart(m, 2, '0');
        },
        't': function () { return '\t'; },
        'n': function () { return '\n'; },
        '%': function () { return '%'; }
    };
    formatCodes.h = formatCodes.b;
    function strftime (inputDate, formatStr) {
        var d = inputDate;
        if (d instanceof TimezoneDate) {
            d = d.getDisplayDate();
        }
        var output = '';
        var remaining = formatStr;
        var match;
        while ((match = rFormat.exec(remaining))) {
            output += remaining.slice(0, match.index);
            remaining = remaining.slice(match.index + match[0].length);
            output += format(d, match);
        }
        return output + remaining;
    }
    function format(d, match) {
        var e_1, _a;
        var _b = __read(match, 5), input = _b[0], _c = _b[1], flagStr = _c === void 0 ? '' : _c, width = _b[2], modifier = _b[3], conversion = _b[4];
        var convert = formatCodes[conversion];
        if (!convert)
            return input;
        var flags = {};
        try {
            for (var flagStr_1 = __values(flagStr), flagStr_1_1 = flagStr_1.next(); !flagStr_1_1.done; flagStr_1_1 = flagStr_1.next()) {
                var flag = flagStr_1_1.value;
                flags[flag] = true;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (flagStr_1_1 && !flagStr_1_1.done && (_a = flagStr_1.return)) _a.call(flagStr_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var ret = String(convert(d, { flags: flags, width: width, modifier: modifier }));
        var padChar = padChars[conversion] || '0';
        var padWidth = width || padWidths[conversion] || 0;
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
    var TimezoneDate = /** @class */ (function (_super) {
        __extends(TimezoneDate, _super);
        function TimezoneDate(dateString) {
            var _this = _super.call(this, dateString) || this;
            _this.dateString = dateString;
            _this.ISO8601_TIMEZONE_PATTERN = /([zZ]|([+-])(\d{2}):(\d{2}))$/;
            _this.inputTimezoneOffset = 0;
            var m = dateString.match(_this.ISO8601_TIMEZONE_PATTERN);
            if (m && m[1] === 'Z') {
                _this.inputTimezoneOffset = _this.getTimezoneOffset();
            }
            else if (m && m[2] && m[3] && m[4]) {
                var _a = __read(m, 5), sign = _a[2], hours = _a[3], minutes = _a[4];
                var delta = (sign === '+' ? 1 : -1) * (parseInt(hours, 10) * 60 + parseInt(minutes, 10));
                _this.inputTimezoneOffset = _this.getTimezoneOffset() + delta;
            }
            return _this;
        }
        TimezoneDate.prototype.getDisplayDate = function () {
            return new Date((+this) + this.inputTimezoneOffset * 60 * 1000);
        };
        return TimezoneDate;
    }(Date));

    function date(v, arg) {
        var date = v;
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
        assert(arguments.length === 2, function () { return 'append expect 2 arguments'; });
        return stringify(v) + stringify(arg);
    }
    function prepend(v, arg) {
        assert(arguments.length === 2, function () { return 'prepend expect 2 arguments'; });
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
    function truncate(v, l, o) {
        if (l === void 0) { l = 50; }
        if (o === void 0) { o = '...'; }
        v = stringify(v);
        if (v.length <= l)
            return v;
        return v.substr(0, l - o.length) + o;
    }
    function truncatewords(v, l, o) {
        if (l === void 0) { l = 15; }
        if (o === void 0) { o = '...'; }
        var arr = v.split(/\s+/);
        var ret = arr.slice(0, l).join(' ');
        if (arr.length >= l)
            ret += o;
        return ret;
    }

    var quoted = /^'[^']*'|"[^"]*"$/;
    var currentLanguageJsonObj = {};
    function getI18nLabel(nameString, currentLanguageJsonObj, args) {
        // let nameString = 't:sections.image-with-text.settings.image.label'
        var node = currentLanguageJsonObj;
        var labelTreeList = nameString.split('.');
        for (var i = 0; i < labelTreeList.length; i++) {
            var currentNode = labelTreeList[i];
            if (node && isPlainObject(node)) {
                node = node[currentNode];
            }
        }
        /**
           * 如果使用该 filter 时传入了两个参数，则认为当前翻译中有变量，需要进行变量替换
           */
        if (isArray(args) && args.length === 2 && isString(node)) {
            var _a = __read(args, 2), variableKey = _a[0], variableValue = _a[1];
            var regexp = new RegExp("{{\\s?" + variableKey + "\\s?}}", 'g');
            node = node.replace(regexp, variableValue);
        }
        return node;
    }
    function t(variable, args) {
        if (quoted.test(variable)) {
            return variable;
        }
        var language = 'zh-CN';
        var domainFiles = (new ThemeDataScope()).rootData;
        var locales = domainFiles.filter(function (item) { return item.name === 'locales'; })[0].data;
        var currentLanguageJson;
        try {
            currentLanguageJson = locales.filter(function (item) { return item.name === language + ".json"; })[0].data;
        }
        catch (error) {
            console.log("\u8BE5\u6A21\u677FC\u7AEF\u6CA1\u6709\u9002\u914D\u8BE5\u8BED\u8A00: " + language + ", \u4F7F\u7528\u9ED8\u8BA4\u8BED\u8A00\u5305 en.default.json");
            currentLanguageJson = locales.filter(function (item) { return item.name === "en.default.json"; })[0].data;
        }
        currentLanguageJsonObj = JSON.parse(currentLanguageJson.value);
        var i18nLabel = getI18nLabel(variable, currentLanguageJsonObj, args);
        return i18nLabel;
    }

    function imageUrl(v) {
        var arg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            arg[_i - 1] = arguments[_i];
        }
        arg.forEach(function (item) {
            var existQuery = v.indexOf('?') > -1;
            var prefix = existQuery ? '&' : '?';
            v += (prefix + item[0] + '=' + item[1]);
        });
        return v;
    }

    function stylesheetTag(href) {
        return "<link href=\"" + href + "\" rel=\"stylesheet\" type=\"text/css\" media=\"all\">";
    }

    var getPublicUrlOfAsset = function (array, assetName) {
        var rst = '';
        function deep(_array) {
            if (!_array)
                return;
            for (var i = 0; i < _array.length; i++) {
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
        var domainFiles = (new ThemeDataScope()).rootData;
        var assetsPublicUrl = getPublicUrlOfAsset(domainFiles, variable);
        return assetsPublicUrl;
    }

    function defaultErrors(formErrors) {
        return "Please enter a valid " + formErrors.error_strings;
    }

    var toColorString = function (colorObject) {
        try {
            var r = colorObject.r, g = colorObject.g, b = colorObject.b, a = colorObject.a;
            return "rgba(" + r + "," + g + "," + b + "," + a + ")";
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
        return "$ " + String(price) + " USD";
    }

    /**
     * 自定义 money 过滤器，并将 money 过滤器注册到 Liquid 中
     * money 过滤器用于将数值转换为不带货币标识的字符串
     *
     * @param {object} Liquid
     * @see https://liquidjs.com/zh-cn/tutorials/plugins.html
     */
    function money(price) {
        return "$ " + String(price);
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

    var TagMap = /** @class */ (function () {
        function TagMap() {
            this.impls = {};
        }
        TagMap.prototype.get = function (name) {
            var impl = this.impls[name];
            assert(impl, function () { return "tag \"" + name + "\" not found"; });
            return impl;
        };
        TagMap.prototype.set = function (name, impl) {
            this.impls[name] = impl;
        };
        return TagMap;
    }());

    var FilterMap = /** @class */ (function () {
        function FilterMap(strictFilters, liquid) {
            this.strictFilters = strictFilters;
            this.liquid = liquid;
            this.impls = {};
        }
        FilterMap.prototype.get = function (name) {
            var impl = this.impls[name];
            assert(impl || !this.strictFilters, function () { return "undefined filter: " + name; });
            return impl;
        };
        FilterMap.prototype.set = function (name, impl) {
            this.impls[name] = impl;
        };
        FilterMap.prototype.create = function (name, args) {
            return new Filter(name, this.get(name), args, this.liquid);
        };
        return FilterMap;
    }());

    var Liquid = /** @class */ (function () {
        function Liquid(opts) {
            var _this = this;
            if (opts === void 0) { opts = {}; }
            this.options = applyDefault(normalize(opts));
            this.parser = new Parser(this);
            this.renderer = new Render();
            this.filters = new FilterMap(this.options.strictFilters, this);
            this.tags = new TagMap();
            forOwn(tags, function (conf, name) { return _this.registerTag(snakeCase(name), conf); });
            forOwn(builtinFilters, function (handler, name) { return _this.registerFilter(snakeCase(name), handler); });
        }
        Liquid.prototype.parse = function (html, filepath) {
            var tokenizer = new Tokenizer(html, this.options.operatorsTrie, filepath);
            var tokens = tokenizer.readTopLevelTokens(this.options);
            return this.parser.parse(tokens);
        };
        Liquid.prototype._render = function (tpl, scope, opts, sync) {
            var options = __assign({}, this.options, normalize(opts));
            var ctx = new Context(scope, options, sync);
            var emitter = new Emitter(options.keepOutputType);
            return this.renderer.renderTemplates(tpl, ctx, emitter);
        };
        Liquid.prototype.render = function (tpl, scope, opts) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, toPromise(this._render(tpl, scope, opts, false))];
                });
            });
        };
        Liquid.prototype.renderSync = function (tpl, scope, opts) {
            return toValue$1(this._render(tpl, scope, opts, true));
        };
        Liquid.prototype._parseAndRender = function (html, scope, opts, sync) {
            var tpl = this.parse(html);
            return this._render(tpl, scope, opts, sync);
        };
        Liquid.prototype.parseAndRender = function (html, scope, opts) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, toPromise(this._parseAndRender(html, scope, opts, false))];
                });
            });
        };
        Liquid.prototype.parseAndRenderSync = function (html, scope, opts) {
            return toValue$1(this._parseAndRender(html, scope, opts, true));
        };
        Liquid.prototype._parseFile = function (file, opts, sync) {
            var options, paths, filepath, paths_1, paths_1_1, filepath, cache, tpls, _a, tpl, _b, _c, e_1_1;
            var e_1, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        options = __assign({}, this.options, normalize(opts));
                        paths = options.root.map(function (root) { return options.fs.resolve(root, file, options.extname); });
                        if (options.fs.fallback !== undefined) {
                            filepath = options.fs.fallback(file);
                            if (filepath !== undefined)
                                paths.push(filepath);
                        }
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 13, 14, 15]);
                        paths_1 = __values(paths), paths_1_1 = paths_1.next();
                        _e.label = 2;
                    case 2:
                        if (!!paths_1_1.done) return [3 /*break*/, 12];
                        filepath = paths_1_1.value;
                        cache = options.cache;
                        if (!cache) return [3 /*break*/, 4];
                        return [4 /*yield*/, cache.read(filepath)];
                    case 3:
                        tpls = _e.sent();
                        if (tpls)
                            return [2 /*return*/, tpls];
                        _e.label = 4;
                    case 4:
                        if (!sync) return [3 /*break*/, 5];
                        _a = options.fs.existsSync(filepath);
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, options.fs.exists(filepath)];
                    case 6:
                        _a = _e.sent();
                        _e.label = 7;
                    case 7:
                        if (!(_a))
                            return [3 /*break*/, 11];
                        _b = this.parse;
                        if (!sync) return [3 /*break*/, 8];
                        _c = options.fs.readFileSync(filepath);
                        return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, options.fs.readFile(filepath)];
                    case 9:
                        _c = _e.sent();
                        _e.label = 10;
                    case 10:
                        tpl = _b.apply(this, [_c, filepath]);
                        if (cache)
                            cache.write(filepath, tpl);
                        return [2 /*return*/, tpl];
                    case 11:
                        paths_1_1 = paths_1.next();
                        return [3 /*break*/, 2];
                    case 12: return [3 /*break*/, 15];
                    case 13:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 15];
                    case 14:
                        try {
                            if (paths_1_1 && !paths_1_1.done && (_d = paths_1.return)) _d.call(paths_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 15: throw this.lookupError(file, options.root);
                }
            });
        };
        Liquid.prototype.parseFile = function (file, opts) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, toPromise(this._parseFile(file, opts, false))];
                });
            });
        };
        Liquid.prototype.parseFileSync = function (file, opts) {
            return toValue$1(this._parseFile(file, opts, true));
        };
        Liquid.prototype.renderFile = function (file, ctx, opts) {
            return __awaiter(this, void 0, void 0, function () {
                var templates;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.parseFile(file, opts)];
                        case 1:
                            templates = _a.sent();
                            return [2 /*return*/, this.render(templates, ctx, opts)];
                    }
                });
            });
        };
        Liquid.prototype.renderFileSync = function (file, ctx, opts) {
            var templates = this.parseFileSync(file, opts);
            return this.renderSync(templates, ctx, opts);
        };
        Liquid.prototype._evalValue = function (str, ctx) {
            var value = new Value(str, this);
            return value.value(ctx, false);
        };
        Liquid.prototype.evalValue = function (str, ctx) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, toPromise(this._evalValue(str, ctx))];
                });
            });
        };
        Liquid.prototype.evalValueSync = function (str, ctx) {
            return toValue$1(this._evalValue(str, ctx));
        };
        Liquid.prototype.registerFilter = function (name, filter) {
            this.filters.set(name, filter);
        };
        Liquid.prototype.registerTag = function (name, tag) {
            this.tags.set(name, tag);
        };
        Liquid.prototype.plugin = function (plugin) {
            return plugin.call(this, Liquid);
        };
        Liquid.prototype.express = function () {
            var self = this; // eslint-disable-line
            return function (filePath, ctx, callback) {
                var opts = { root: __spread(normalizeStringArray(this.root), self.options.root) };
                self.renderFile(filePath, ctx, opts).then(function (html) { return callback(null, html); }, callback);
            };
        };
        Liquid.prototype.lookupError = function (file, roots) {
            var err = new Error('ENOENT');
            err.message = "ENOENT: Failed to lookup \"" + file + "\" in \"" + roots + "\"";
            err.code = 'ENOENT';
            return err;
        };
        /**
         * @deprecated use parseFile instead
         */
        Liquid.prototype.getTemplate = function (file, opts) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.parseFile(file, opts)];
                });
            });
        };
        /**
         * @deprecated use parseFileSync instead
         */
        Liquid.prototype.getTemplateSync = function (file, opts) {
            return this.parseFileSync(file, opts);
        };
        return Liquid;
    }());

    exports.AssertionError = AssertionError;
    exports.Context = Context;
    exports.Drop = Drop;
    exports.Emitter = Emitter;
    exports.Expression = Expression;
    exports.Hash = Hash;
    exports.InternalUndefinedVariableError = InternalUndefinedVariableError;
    exports.Liquid = Liquid;
    exports.LiquidError = LiquidError;
    exports.ParseError = ParseError;
    exports.ParseStream = ParseStream;
    exports.RenderError = RenderError;
    exports.TagToken = TagToken;
    exports.Token = Token;
    exports.TokenizationError = TokenizationError;
    exports.Tokenizer = Tokenizer;
    exports.TypeGuards = typeGuards;
    exports.UndefinedVariableError = UndefinedVariableError;
    exports.Value = Value;
    exports.assert = assert;
    exports.createTrie = createTrie;
    exports.defaultOperators = defaultOperators;
    exports.evalQuotedToken = evalQuotedToken;
    exports.evalToken = evalToken;
    exports.isFalsy = isFalsy;
    exports.isTruthy = isTruthy;
    exports.toPromise = toPromise;
    exports.toThenable = toThenable;
    exports.toValue = toValue;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=liquid.browser.umd.js.map
