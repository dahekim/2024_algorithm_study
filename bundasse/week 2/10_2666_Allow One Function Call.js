var once = function(fn) {
    let called = false;
    let result;
    return function(...args){
        if(!called){
            result = fn(...args);
            called = true;
            return result
        }else{
            return undefined;
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

/*
양심껏 고백
이건 어떻게 리턴하라는건지 문제 해석을 잘 못해서 다른 사람들 풀이를 좀 봤어요.
코드를 보아하니 해당 함수가 처음 호출될 때 fn()을 리턴하고
그 뒤로는 그냥 undefined를 리턴하는 내용이었나 봅니다.
[{"calls":1,"value":6}] 식으로 배열로 만들어서 리턴해야하는줄.
*/