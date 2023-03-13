define(['exports', 'dayjs', 'axios'], function (exports, dayjs, axios) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);
    var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

    class Func
    {
        constructor() {}

        static isNull(obj) {
            return obj === void(0) || obj === null;
        }

        static isNotNull(obj) {
            return !this.isNull(obj);
        }

        static isEmpty(str) {
            return this.isNotNull(str) && str.length === 0;
        }

        static isNullOrEmpty(str) {
            return this.isNull(str) || this.isEmpty(str);
        }

        static isNotNullOrEmpty(str) {
            return !this.isNullOrEmpty(str);
        }

        static map(x, y) {
            Object.keys(x).map((k, v) => {
                y[k] = x[k];
            });
        }
    }

    class TypePrimer
    {
        constructor() {}

        static isString(obj) {
            return typeof obj === "string";
        }
    }

    const FORMAT_DATE = "YYYY-MM-DD";
    const FORMAT_DATETIME = "YYYY-MM-DD HH:mm:ss";
    const FORMAT_MONTH = "YYYY-MM";
    const MIN_YEAR = 1970;

    class DatePrimer
    {
        constructor() {}

        static format(date, format, defaultValue) {
            if (Func.isNull(defaultValue)) {
                defaultValue = "-";
            }

            if (Func.isNull(date)) {
                return defaultValue;
            }

            if (TypePrimer.isString(date)) {
                date = new Date(date);
            }

            if (date.getFullYear() === MIN_YEAR) {
                return defaultValue;
            }

            if (Func.isNull(format)) {
                format = FORMAT_DATE;
            }

            return dayjs__default['default'](date).format(format);
        }

        static toDateStr(date, defaultValue) {
            return this.format(date, FORMAT_DATE, defaultValue);
        }

        static toDateTimeStr(date, defaultValue) {
            return this.format(date, FORMAT_DATETIME, defaultValue);
        }

        static toMonthStr(date, defaultValue) {
            return this.format(date, FORMAT_MONTH, defaultValue);
        }

        static getNow() {
            return new Date();
        }

        static getNowDateStr() {
            return this.toDateStr(
                this.getNow()
            );
        }

        static getNowDateTimeStr() {
            return this.toDateTimeStr(
                this.getNow()
            );
        }

        // https://stackoverflow.com/a/563442
        static addDays(date, days) {
            var tmp = new Date(date.valueOf());
            tmp.setDate(tmp.getDate() + days);
            return tmp;
        }
    }

    class FormPrimer
    {
        constructor() {}

        serialize(formId) {
            // var formData = $("#" + formId).serializeArray();
            // window.localStorage.setItem(formId, JSON.stringify(formData));
        }
    }

    class ListX
    {
        constructor() {}

        // 检查 str 中是否出现过 list 中的各项子字符串
        static matchSubStr(str, matchList) {
            for (var i in matchList) {
                if (str.indexOf(matchList[i]) === 0) {
                    return true;
                }
            }
        
            return false;
        }
    }

    class NumberPrimer
    {
        constructor() {}

        static fix(num, defaultValue) {
            if (Func.isNull(defaultValue)) {
                defaultValue = 0;
            }

            if (Func.isNull(num) || isNaN(parseFloat(num))) {
                return defaultValue;
            }

            if (TypePrimer.isString(num)) {
                num = parseFloat(num);
            }

            return num;
        }

        /**
         * Turn numbers into prices.
         * https://stackoverflow.com/a/14428340
         * 
         * @param num The number to be turn
         * @param fixed Number of significant digits
         * @param defaultValue
         */
        static toPrice(num, fixed, defaultValue) {
            if (Func.isNull(fixed)) {
                fixed = 2;
            }

            num = this.fix(num, defaultValue);

            return num.toFixed(fixed)
                .replace(/\d(?=(\d{3})+\.)/g, '$&,');
        }

        static toPercent(num, exp, defaultValue) {
            if (Func.isNull(exp)) {
                exp = 2;
            }

            npm = this.fix(num, defaultValue);
            var percent = num * Math.pow(10, exp);

            return percent + "%";
        }
    }

    class RequestX
    {
        constructor() {}

        // https://www.w3schools.com/jsref/prop_nav_useragent.asp
        static getUserAgent() {
            return navigator.userAgent;
        }

        static getQueryParam(key) {
            var pairs = new RegExp('[\?&]' + key + '=([^&#]*)').exec(location.href);

            if (Func.isNull(pairs) || pairs.length < 2) {
                return "";
            }

            return pairs[1];
        }

        static get(url, data, success, error) {
            axios__default['default'].get(
                url, {
                    params: data
                }
            ).then(res => {
                if (typeof error !== "undefined") {
                    success(res.data);
                }
            }).catch(err => {
                if (typeof error !== "undefined") {
                    error(err);
                } else {
                    console.error(err);
                }
            });
        }

        // 从指定地址获取内容并返给回调
        static getFile(uri, callback) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", uri, true);

            xhr.onload = function (e) {
                callback(e.currentTarget.response);
            };

            xhr.send(null);
        }

        static post(url, data, success, error) {
            axios__default['default'].post(
                url, data
            ).then(res => {
                if (typeof error !== "undefined") {
                    success(res.data);
                }
            }).catch(err => {
                if (typeof error !== "undefined") {
                    error(err);
                } else {
                    console.error(err);
                }
            });
        }
    }

    class StringPrimer
    {
        constructor() {}

        static shorter(str, max, defaultValue, suffix) {
            if (Func.isNull(defaultValue)) {
                defaultValue = "-";
            }

            if (Func.isNullOrEmpty(str)) {
                return defaultValue;
            }

            if (Func.isNull(suffix)) {
                suffix = "...";
            }

            if (Func.isNull(max)) {
                max = 18;
            }

            if (str.length <= max) {
                return str;
            }

            return str.substring(0, max) + suffix;
        }
    }

    const REGEX_CHINESE = /^[\u4e00-\u9fa5]{0,}$/;
    const REGEX_EMAIL = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+$/;
    const REGEX_MOBILE = /^[1][3,4,5,6,7,8]\d{9}$/;
    const REGEX_NUMBER = /^\d+&/;
    const REGEX_TEL = /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{8}/;

    class Valid
    {
        constructor() {}

        static isChinese(str) {
            return REGEX_CHINESE.test(str);
        }

        static isEmail(str) {
            return REGEX_EMAIL.test(str);
        }

        static isMobile(str) {
            return REGEX_MOBILE.test(str);
        }

        static isNumber(str) {
            return REGEX_NUMBER.test(str);
        }

        static isTel(str) {
            return REGEX_TEL.test(str);
        }
    }

    exports.DatePrimer = DatePrimer;
    exports.FormPrimer = FormPrimer;
    exports.Func = Func;
    exports.ListX = ListX;
    exports.NumberPrimer = NumberPrimer;
    exports.RequestX = RequestX;
    exports.StringPrimer = StringPrimer;
    exports.TypePrimer = TypePrimer;
    exports.Valid = Valid;

    Object.defineProperty(exports, '__esModule', { value: true });

});
