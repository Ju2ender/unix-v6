import Func from "./func";

class StringX
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

    /**
     * 补齐2位数，不足补0
     * @param str 月份、小时或分钟
     * @param max 位数
     */
    static pad(str, max) {
        str = str.toString();
        return str.length < max ? pad("0" + str, max) : str;
    }
}

export default StringPrimer;
