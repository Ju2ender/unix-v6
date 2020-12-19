const REGEX_MOBILE = /^[1][3,4,5,7,8][0-9]{9}$/;

class Valid
{
    constructor() {}

    static isMobile(str) {
        return REGEX_MOBILE.test(str);
    }
}

export default Valid;
