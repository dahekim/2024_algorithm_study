// https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript
// 정수 형태의 init을 초기 매개변수로 받고, 세 가지 함수를 가진 객체를 반환해야 한다.
// increment 함수 : 현재 값에 1을 더한 후 그 값을 반환
// decrement 함수 : 현재 값에 1을 뺀 후 그 값을 반환
// reset 함수 : 현재 값을 초기값(init)으로 설정한 후 그 값을 반환

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

// 1. init 값을 받아서 클로저를 형성, 그 값을 받아 result 변수에 저장한다.
// 2. 내부 객체를 리턴한다.
// 3. 값을 증가시키거나 감소시켜서 그 값을 리턴한다. init 값이 주어지지 않으면 0으로 초기화하고, 주어졌다면 초기 매개변수 init을 리턴한다.
var createCounter = function(init) {
    let result = init
    return {
        increment: function(){
            result++;
            return result;
        },
        reset: function(){
            result = init || 0;
            return init;
        },
        decrement: function(){
            result--;
            return result;
        }
    }
};
