class ListX
{
    constructor() {}

    // 从 list 中找是否存在 str
    static contain(str, list) {
        for (var x in list) {
            if (str.indexOf(list[x]) === 0) {
                return true;
            }
        }
    
        return false;
    }
}

export default ListX;
