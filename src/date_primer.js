import dayjs from "dayjs";

const FORMAT_DATE = "YYYY-MM-DD";
const FORMAT_DATETIME = "YYYY-MM-DD HH:mm:ss";

class DatePrimer
{
    constructor() {}

    static format(date, format) {
        return dayjs(date).format(format);
    }

    static toDate(date) {
        return this.format(date, FORMAT_DATE);
    }

    static toDateTime(date) {
        return this.format(date, FORMAT_DATETIME);
    }

    static getNowDate() {
        return this.toDate(new Date());
    }

    static getNowDateTime() {
        return this.toDateTime(new Date());
    }
}

export default DatePrimer;
