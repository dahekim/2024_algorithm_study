var createCounter = function(init) {
    let val = init;
    return {
        increment: () => ++val,
        reset: () => val = init,
        decrement:() => --val
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
/*
toBe notToBe와 비슷하다. 객체를 return하고 각각에 함수를 넣어준다.
val과 init을 구분한 이유는 reset이 있기 때문이다.
함수 내에서 변동되는 값은 val로 사용하고, reset시에는 init값을 다시 불러 val값을 지정한다.
*/