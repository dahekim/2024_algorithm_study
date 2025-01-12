// https://leetcode.com/problems/filter-elements-from-array/?envType=study-plan-v2&envId=30-days-of-javascript
// 주어진 정수의 배열 arr과 fn 함수가 주어졌을 때, 조건을 만족하는 요소들로 이루어진 새로운 배열을 반환한다.
// - fn 함수는 하나 또는 두 개의 인수를 가진다.
// - Array.filter 메소드를 사용하지 않고 문제를 해결해야 한다.


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    // 1. 결과를 저장할 빈 배열을 초기화하고, result로 선언한다.
    let result = [];
    
    // 2. 주어진 arr 배열의 요소에 대해서 반복문을 실행한다.
    for (let i = 0; i < arr.length; i++){

        // 3. fn 메소드로 조건을 만족하는 경우 result에 해당 요소를 추가한다.
        if(fn(arr[i],i)){
            result.push(arr[i]);
        }
    }
    // 4. 결과 배열을 리턴한다.
    return result;
}