// https://leetcode.com/problems/join-two-arrays-by-id/?envType=study-plan-v2&envId=30-days-of-javascript
// 배열 arr1과 arr2가 주어졌을 때, 새로운 배열 joinedArray를 반환하라.
// 키가 두 객체에 모두 포함된다면 arr2의 객체 값이 arr1의 값을 덮어쓴다.



/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    // 주어진 배열 2가지를 먼저 합친다. (Array.concat() 이용)
    let joinedArr = arr1.concat(arr2);
    const result = [];
    
    for(const obj of joinedArr) {
        // id 값이 없으면 추가
        if(!result[obj.id]) {
            result[obj.id] = obj;
            continue;
        } 
        // id 값이 있으면 덮어쓴다 
        else {
            result[obj.id] = {...result[obj.id], ...obj};
        }
    }
    return Object.values(result);
};