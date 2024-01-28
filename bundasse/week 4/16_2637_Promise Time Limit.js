var timeLimit = function(fn, t) {
    return async function(...args) {
        const errorGo = new Promise((res, rej)=>{
            setTimeout(()=>{
                rej('Time Limit Exceeded')
            },t)
        })
        return Promise.race([fn(...args),errorGo])
    }
};


/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

/*
함수 하나와 input(args), 시간 t가 주어짐.
t가 함수에 지정된 시간보다 빠르면 Time Limit Exceeded를 reject로 보냄
함수가 더 빠르면 함수의 결과값을 보냄

t초후에 발동해서 reject로 Time Limit Exceeded를 쏘는 함수 errorGo를 Promise로 만든다
그리고 Promise.race로 fn(...args)랑 errorGo를 실행시켜 먼저 골인하는 녀석만 리턴
리턴하는 전체 function앞에 async는 원래 달려있어서 냅뒀는데 빼버려도 될 것 같기도 해요?
 */