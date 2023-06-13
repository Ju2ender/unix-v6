class ListX
{
    constructor() {}

    // 检查 str 中是否出现过 list 中的各项子字符串
    static matchSubStr(str, matchList) {
        for (var i in matchList) {
            if (str.indexOf(matchList[i]) === 0) {
                return true;
            }
        }
    
        return false;
    }

    /**
     * 根据某属性的值寻找某成员
     * @param list 数组
     * @param propertyName 目标属性名
     * @param propertyValue 目标属性值
     */
    static findByAttr(list, propertyName, propertyValue) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
        return list.find(x => x[propertyName] == propertyValue);
    }
}

export default ListX;
