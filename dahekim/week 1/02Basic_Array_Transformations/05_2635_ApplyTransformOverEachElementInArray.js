// https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript
// 주어진 정수의 배열 arr과 fn 함수가 주어졌을 떄, 각 요소에 fn의 메소드가 적용된 새로운 배열을 반환한다. 
// - 반환된 배열은 ' returnedArray[i] = fn(arr[i], i).' 형태로 생성되어야 한다.
// - Array.map 메서드를 사용하지 않고 문제를 해결해야 한다.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */


var map = function(arr, fn) {
    // 1. 결과를 저장할 빈 배열을 초기화하고, result로 선언한다.
    let result = [];
    
    // 2. 주어진 arr 배열의 요소에 대해서 반복문을 실행한다.
    for(let i =0; i<arr.length; i++){
        // 3. result 배열에 fn 메소드가 적용된 결과를 할당한다.
        result[i] = fn(arr[i], i);
    }
    // 4. 결과 배열을 리턴한다.
    return result;
};