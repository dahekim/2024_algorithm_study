function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = String(args)
        if(key in cache){
            return cache[key]
        }
        cache[key] = fn(...args)
        return cache[key]
    }
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

/*
이건 아예 감이 안 왔어서 베껴넣기...
cache 객체에 들어온 값(args)를 속성으로 해서 fn() 결과값을 넣고,
만약 cache에 해당 속성이 있을 경우 함수를 호출하지 않고 바로 cache[key]를 리턴.
10일차의 Allow One Function Calls랑 비슷한데 들어오는 값이 바뀔 수 있으니
호출여부만 확인하는게 아니라 객체로 인풋과 결과값을 넣어서 체크하는 방식이 되었네요.
이런식으로 연산 캐시하는 방식이 Vue랑 React에는 메소드로 있어서 항상 그걸 썼는데
뭔가 기본원리를 파악한 기분!
*/