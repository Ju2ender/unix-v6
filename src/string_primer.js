import Func from "./func";

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

export default StringPrimer;
