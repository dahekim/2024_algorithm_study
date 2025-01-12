// https://leetcode.com/problems/function-composition/description/?envType=study-plan-v2&envId=30-days-of-javascript
// 함수 배열 [f1, f2, f3, ..., fn]이 주어졌을 때 이 함수들을 합성한 새로운 함수 fn을 반환해야 한다.


var compose = function(functions) {
    return function(x) {
        // 1. 배열의 끝부터 시작해서 함수를 합친다.
        for (let i = functions.length - 1; i >= 0; i--) {
            // 2. 현재 함수를 적용하고 다음 함수에 전달한다.
            x = functions[i](x);
            // console.log(x);
        }
        // 3. 최종 결과를 반환한다.
        return x;    }
    };