import dayjs from "dayjs";
import Func from "./func";
import TypePrimer from "./type_primer";

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

        return dayjs(date).format(format);
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

export default DatePrimer;
