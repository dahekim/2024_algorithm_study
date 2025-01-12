// https://leetcode.com/problems/debounce/description/?envType=study-plan-v2&envId=30-days-of-javascript
// 함수 fn, 밀리초 단위의 t가 주어졌을 때, debounce 함수를 반환하라.
// debounce 함수는 함수의 실행이 호출된 시점부터 t 밀리초 동안 지연된다. debounce 함수는 넘겨받은 매개변수를 받아야 한다. 
// (이게 무슨 소리일까요?)
// 클로저로 

var debounce = function(fn, t) {
    // 디바운스 시간 동안의 타임아웃 플래그값을 선언
    let timeoutId;

    return function (...args) {
        // 이전 타임아웃을 클리어하여 중복 호출 방지
        clearTimeout(timeoutId);

        // 새로운 타임아웃 설정
        timeoutId = setTimeout(() => {
            // 지연 후 함수 실행
            fn(...args);
        }, t);
    };
};