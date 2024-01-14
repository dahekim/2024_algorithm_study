// https://leetcode.com/problems/array-reduce-transformation/?envType=study-plan-v2&envId=30-days-of-javascript
// 주어진 정수의 배열 nums와 fn 함수, 초기값 init이 주어졌을 때, 함수를 순차적으로 실행하고 이전 요소의 결과값을 현재 요소에 전달하여 얻은 최종 결과를 리턴한다.
// - 배열의 길이가 0이라면 함수는 init을 반환해야한다.
// - Array.reduce 메소드를 사용하지 않고 문제를 해결해야 한다.



/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

var reduce = function(nums, fn, init) {
    // 1. 결과를 담을 변수를 초기화한다. 
    let result = init;
    // 2.  주어진 nums 배열의 요소에 대해서 반복문을 실행한다.
    for (let i = 0; i< nums.length; i++){
        // 3. 함수를 이용하여 이전 결과와 현재 요소를 조합한 결과를 변수에 답는다.
        result = fn(result, nums[i]);
    }

    // 4. 결과를 반환한다.
    return result;
};