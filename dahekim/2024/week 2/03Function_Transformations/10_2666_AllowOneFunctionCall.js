// https://leetcode.com/problems/allow-one-function-call/?envType=study-plan-v2&envId=30-days-of-javascript
// fn 함수가 주어졌을 때 해당 함수를 최대 한 번만 호출하는 새로운 함수를 반환하라.
// 처음에는 fn 함수와 동일한 결과를 반환해야 하며, 이후에는 undefined를 반환해야 한다.


var once = function(fn) {
    // 1. 호출 여부를 보여주는 변수 called, 호출결과를 담을 변수 result를 선언한다. 
    // (아직 호출되지 않았으므로 초기값을 false로 초기화한다.)
    let called = false;
    let result;
    
    return function(...args){
        // 2. fn 함수가 호출되지 않았다면(= called의 값이 false인 경우) 이하 코드블록의 코드를 실행한다.
        if(!called){
            // 3. called 값을 true로 변경한다.
            called = true;
            // 4. 인자 값을 받아 (...args) fn 함수를 실행, result에 그 결과를 담아 반환한다.
            result = fn(...args);
            return result;
        } else {
            // 5. fn 함수가 호출된 경우 (= called의 값이 true인 경우) undefined를 반환한다.
            return undefined;
        }
    }
};