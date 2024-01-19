// https://leetcode.com/problems/interval-cancellation/description/?envType=study-plan-v2&envId=30-days-of-javascript
// 함수 fn과 인자들의 배열 args, 인터벌 타임 t가 주어졌을 때, 함수를 취소하는 cancel 함수 cancelFn을 반환하라. 
// cancelTimeMs의 지연 후, 반환된 취소 함수 cancelFn이 호출되어야 한다. 
// - 함수 fn는 args와 함께 즉시 호출되어야  하며, t 밀리 초 간격으로 fn 함수가 반복적으로 호출된다.
// - cancelFn 함수는 cancelTimeMs 밀리 초 후에 호출되며, cancelFn이 호출되면 fn 함수의 반복이 중단된다. 

var cancellable = function(fn, args, t) {

    // 1. args를 받는 fn 함수를 호출한다.
    fn(...args);

    // 2. 주기적으로 함수를 호출할 interval을 정의한다. 
    // 이 함수는 t 밀리 초 간격으로 반복적으로 실행된다.
    const interval = setInterval(() => {
        fn(...args);
    }, t);

    // 3. 주기적으로 실행되는 함수를 중지하는 cancelFn을 정의한다. 
    const cancelFn = () => {
        clearInterval(interval); 
    };

    // 4. 취소함수 cancelFn을 리턴한다. 
    return cancelFn; 
};