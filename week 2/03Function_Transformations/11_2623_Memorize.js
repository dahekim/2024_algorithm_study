// https://leetcode.com/problems/memoize/?envType=study-plan-v2&envId=30-days-of-javascript
// fn 함수가 주어졌을 때, 해당 함수의 memoized 버전의 함수를 리턴하라.
// memoized function은 같은 입력값으로 두 번 이상 호출되지 않고 캐시된 값을 반환한다.
// sum, fib, factorial 함수가 입력함수로 주어지는 것으로 가정한다.

function memoize(fn) {
    // 1. 결과를 캐싱할 객체형태의 변수를 선언한다.
    const cache = {};
    return function(...args) {
        // 2. 받은 인수들을 ','로 구분해서 결합하여 key 값을 생성한다.
        const key = args.join(',');
        // 3. cache에 key 값이 존재한다면, 이전에 계산된 결과값을 반환한다.
        if (key in cache) {
            return cache[key];
        } else {
            // 4. cache에 해당 key 값이 존재하지 않는다면, 현재 주어진 인자값(...args)을 fn 함수에 적용하여 호출하여 result에 담는다.
            const result = fn(...args);
            // 5. 결과값(result)를 cache에 담고, 해당 결과를 반환한다.
            cache[key] = result;
            return result;
        }
    }
}
