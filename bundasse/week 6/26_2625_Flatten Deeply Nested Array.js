/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n === 0){
        return arr
    }
    let flattedArr = [];
    arr.forEach(e =>{
        if(n>0 && Array.isArray(e)){
            flattedArr.push(...flat(e,n-1))
        } else{
            flattedArr.push(e)
        }
    })
    return flattedArr
};