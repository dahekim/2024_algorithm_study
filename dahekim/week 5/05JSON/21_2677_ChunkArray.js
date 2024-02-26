// https://leetcode.com/problems/chunk-array/?envType=study-plan-v2&envId=30-days-of-javascript
// 크기 변수 size와 배열 arr이 주어졌을 때 size만큼 쪼개진 배열을 반환하라. 
// 쪼개진 배열은 arr의 요소를 포함하지만, size 만큼의 길이를 가진 하위 배열이다.
// arr.length가 size로 나누어 떨어지지 않으면, 마지막 하위 배열의 길이는 size보다 작을 수도 있다. 

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const len = arr.length;
    let result = [];    
    for(let i = 0; i < len ; i += size){
        result.push(arr.slice(i, i+size))
    }
    return result;
};
