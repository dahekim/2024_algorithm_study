var debounce = function(fn, t) {
    let func
    return function(...args) {
        clearTimeout(func)
        func = setTimeout(()=> fn(...args) , t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */

/*
t초후에 함수를 실행> 만약 앞에서 함수가 호출되어서 돌아가는 중이라면
이전 call은 캔슬하고 뒤에 들어오는 애로 새로 setTimeout 넣어주기.
지우기 먼저>그 다음 set 해줘야하므로 앞에 변수를 먼저 선언하고 뒤에서 값을 넣어주엇습니다.
*/ 