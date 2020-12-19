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

        return num;
    }

    /**
     * Turn numbers into prices.
     * 
     * @param num
     * @param fixed
     */
    static toPrice(num, fixed) {
        if (Func.isNull(fixed)) {
            fixed = 2;
        }

        num = this.fix(num);

        if (TypePrimer.isString(num)) {
            return this.toPrice(parseFloat(num));
        }

        return num.toFixed(fixed).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    static toPercent(num, exp) {
        if (Func.isNull(exp)) {
            exp = 2;
        }

        if (TypePrimer.isString(num)) {
            num = parseFloat(num);
        }

        var percent = num * Math.pow(10, exp);
        return percent + "%";
    }
}

export default NumberPrimer;
