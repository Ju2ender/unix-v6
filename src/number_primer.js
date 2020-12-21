import Func from "./func";
import TypePrimer from "./type_primer";

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

export default NumberPrimer;
