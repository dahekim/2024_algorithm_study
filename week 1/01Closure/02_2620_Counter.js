// https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
// 주어진 정수 n으로 카운터 함수를 반환하라. 이 카운터 함수는 초기에는 n을 반환하며, 그 다음에 호출될 때마다 이전 값보다 1이 더 큰 값을 반환한다. 

/**
 * @param {number} n
 * @return {Function} counter
 */

// 함수 정의
// 1. 매개변수 n을 받아서 클로저를 형성하는 함수를 리턴한다.
// 2. 초기값 매개변수 n을 설정하고, 그 값을 받는 count 변수를 선언한다. (클로저)
// 3. 내부의 함수는 호출될 때마다 count 값을 반환한수 1 증가시킨다. count는 계속해서 증가하며 반환되므로 계속적으로 증가하는 값을 리턴한다. 
var createCounter = function(n) {
    let count = n;
    return function() {
        return count++;
    };
};

