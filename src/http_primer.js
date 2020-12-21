import Func from "./func";

class HttpPrimer
{
    constructor() {}

    static getQueryParam(key) {
        var pairs = new RegExp('[\?&]' + key + '=([^&#]*)').exec(location.href);

        if (Func.isNull(pairs) || pairs.length < 2) {
            return "";
        }

        return pairs[1];
    }
}

export default HttpPrimer;
