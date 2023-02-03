import Func from "./func";
import axios from "axios";

class RequestX
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

    static get(url, data, success, error) {
        axios.get(
            url, {
                params: data
            }
        ).then(res => {
            if (typeof error !== "undefined") {
                success(res.data);
            }
        }).catch(err => {
            if (typeof error !== "undefined") {
                error(err);
            } else {
                console.error(err);
            }
        });
    }

    // 从指定地址获取内容并返给回调
    static getFile(uri, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", uri, true);

        xhr.onload = function (e) {
            callback(e.currentTarget.response);
        };

        xhr.send(null);
    }

    static post(url, data, success, error) {
        axios.post(
            url, data
        ).then(res => {
            if (typeof error !== "undefined") {
                success(res.data);
            }
        }).catch(err => {
            if (typeof error !== "undefined") {
                error(err);
            } else {
                console.error(err);
            }
        });
    }
}

export default RequestX;
