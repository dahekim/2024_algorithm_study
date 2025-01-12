// https://leetcode.com/problems/promise-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript
// 비동기 함수 fn과 밀리 초 단위의 시간 t 가 주어질 때, 새로운 제한 시간버전의 함수를 반환하라.
// 반환된 함수는 시간 제한 함수에 제공된 인자를 fn에 전환한다.

var timeLimit = function(fn, t) {    
    return async function(...args) {
        return new Promise((res, rej) => {
            // 비동기 함수 호출
            const resultPromise = fn(...args);

            // 제한 시간 내에 완료되었는지 여부를 확인
            const timeout = setTimeout(() => {
                rej("Time Limit Exceeded");
            }, t);

            // 비동기 함수의 결과를 기다림
            resultPromise
                .then((result) => {
                    clearTimeout(timeout);
                    res(result);
                })
                .catch((error) => {
                    clearTimeout(timeout);
                    rej(error);
                });
        });
    }
};


var timeLimit = function(fn, t) {    
    return async function(...args) {
        let timeoutId;

        return new Promise((resolve, reject) => {
            timeoutId = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            fn(...args)
                .then(resolve)
                .catch(reject)
                .finally(() => {
                    if (timeoutId) {
                        clearTimeout(timeoutId);
                    }
                });
        });
    };
}

var timeLimit = function(fn, t) {
    
    return function(...args) {
        var promise = new Promise((res, rej) => {
            var timerId = setTimeout(() => rej("Time Limit Exceeded"), t);
            fn(...args).then(a => (clearTimeout(timerId), res(a))).catch(rej);
        });
        return promise;
    }
};