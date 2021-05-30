import Func from "./func";
import axios from "axios";

class WebPrimer
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

    static get(url, data, success) {
        axios.get(
            url, {
                params: data
            }
        ).then(res => {
            if (typeof error !== "undefined") {
                success(res.data);
            }
        }).catch(err => {
            console.error(err);
        });
    }

    static post(url, data, success) {
        axios.post(
            url, data
        ).then(res => {
            if (typeof error !== "undefined") {
                success(res.data);
            }
        }).catch(err => {
            console.error(err);
        });
    }
}

export default WebPrimer;
