// https://leetcode.com/problems/flatten-deeply-nested-array/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let result = [];

    if (n === 0) return arr;

    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            result.push(...flat(arr[i], n-1));
        }
        else {
            result.push(arr[i]);
        }
    }
    return result;
    // return arr.reduce((result, i) => {
    //     return result.concat(Array.isArray(item) ? flat(item, n - 1) : item);
    // }, []);
};