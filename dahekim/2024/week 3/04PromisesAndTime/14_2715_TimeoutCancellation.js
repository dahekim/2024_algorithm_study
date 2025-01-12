// https://leetcode.com/problems/timeout-cancellation/description/?envType=study-plan-v2&envId=30-days-of-javascript
// 함수 fn과 인자들의 배열 args, 밀리 초 단위의 타임아웃 t가 주어졌을 때, 이 함수를 취소하는 cancel 함수 cancelFn을 반환하라. 
// - cancelTimeMs의 지연 후에, 반환된 휘소 함수 cancelFn이 호출되어야 한다. (일정 시간 후에 호출되어야 한다는 것 같음)
// - 초기에는 fn 함수의 실행이 t 밀리 초 동안 지연되어야 한다.
// - cancelFn이 t 밀리 초가 지나기 전에 호출되면 fn함수는 실행이 취소되어야 한다.
// - cancelFn이 t 밀리 초가 지나도 호출되지 않는다면, fn함수는 지정된 인자들과 함께 실행되어야 한다.

var cancellable = function(fn, args, t) {
    // 1. 함수 취소를 위한 플래그 값으로 timeout 변수를 선언한다. 
    let timeout;

    // 2. 함수 실행을 지연시킬 delayTimeout을 선언한다.
    // 주어진 인자값(args)를 받아 fn 함수를 t초 후에 실행되게...
    const delayTimeout = setTimeout(fn, t, ...args);

    // 3. delayTimeout을 취소하거나 fn함수를 취소하는 cancelFn 함수를 선언한다. 
    const cancelFn = () => {
        clearTimeout(delayTimeout); 
        clearTimeout(timeout); 
    };

    // 4. 지정된 시간 이후에 cancelFn 함수를 호출한다.
    timeout = setTimeout(cancelFn, t);
    
    // 5. 취소 함수를 리턴한다.
    return cancelFn; 
};

