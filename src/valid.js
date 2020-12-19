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

export default Valid;
