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

export default Func;
