class ListX
{
    constructor() {}

    // 检查 str 中是否出现过 list 中的各项子字符串
    static matchSubStr(str, matchList) {
        for (var i in matchList) {
            if (str.indexOf(matchList[i]) > -1) {
                return true;
            }
        }
    
        return false;
    }
}

export default ListX;
