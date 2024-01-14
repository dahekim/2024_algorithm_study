var createCounter = function(n) {
    return () => n++;
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
// 그냥 return n++; 로는 오류가 나서 작동하지 않는다. counter를 함수로 인식하지 않기 때문.