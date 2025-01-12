// https://leetcode.com/problems/create-hello-world-function/?envType=study-plan-v2&envId=30-days-of-javascript
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
// (createHelloWorld 함수를 작성하라. 항상 "Hello World"를 리턴하는 새로운 함수를 반환해야 한다.)

/**
 * @return {Function}
 */

// 함수 정의 
// 1. 함수를 반환하는 createHelloWorld 함수를 선언 및 정의한다. 이때, 이 함수는 아무런 변수도 받지 않는다.
// 2. 내부의 함수는 ...args를 통하여 모든 매개변수를 받는다. 이때, 이 함수는 항상 문자열 "Hello World"를 반환한다.
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    }
};

// 함수 호출 및 사용
// 1. createHelloWorld()를 호출하여 f 변수에 할당한다.
// 2. 변수 f에 할당된 함수를 호출한다
// 3. 반환된 함수는 createHelloWorld() 내부의 함수이며, 항상 문자열 "Hello World"를 반환한다.
const f = createHelloWorld();
f();
