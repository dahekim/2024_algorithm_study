// https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript
// toBe함수 : 다른 값을 받아서 두 값이 일치하면 true를 반환, 값이 일치하지 않으면 "Not Equal" 오류를 발생시켜야 한다.
// NotToBe함수: 다른 값을 받아서 두 값이 일치하지 않으면 true를 반환, 값이 일치하면 "Equal" 오류를 발생시켜야 한다.


/**
 * @param {string} val
 * @return {Object}
 */

// expect() 함수를 호출할 때 받은 값에 따라 객체를 반환한다. 이 객체에는 toBe(), NotToBe() 함수가 포함되어 있다.
// 삼항 연산자를 이용하여 작성... 오류 발생은 예외 처리로 throw new Error(~)를 사용한다. 
var expect = function(val) {
    return {
        toBe: function(otherVal) {
            return val === otherVal ? true : (() => { throw new Error("Not Equal"); })();
        },
        notToBe: function(otherVal) {
            return val !== otherVal ? true : (() => { throw new Error("Equal"); })();
        }
    }
};


/**
* expect(5).toBe(5); // true
* expect(5).notToBe(5); // throws "Equal"
*/