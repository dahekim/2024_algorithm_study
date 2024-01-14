// 처음 작성한 개무식답안
var compose = function(functions) {
    let arr = [...functions].reverse()
    return function(x) {
        for(let i=0; i<arr.length; i++){
            let answer = arr[i](x)
            x = answer
        }
        return x
    }
    
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

/*
배열이 [f(x),g(x),h(x)]라면
1.h(x)값 구함 2. h(x)를 g()안에 대입 3.2번의 값을 f(x)에 대입
순으로 가야 했기 때문에 그냥 functions 배열 순서대로 진행하면 올바른 답이 나오지 않는다(뒤의 것부터 진행해야하므로!)
그래서 reverse()로 배열을 거꾸로 만들어주고 해당 배열을 순서대로 진행하는 방식으로 만들었음.
개무식풀이법이죠?
*/

// reduce 함수를 공부하고 사용해본거.
var compose = function(functions) {
    return function(val){
        return functions.reduceRight((accum, curr)=> curr(accum), val)
    }
};

/* reduceRight는 reduce와 같은 연산을 배열의 뒷순서부터 진행하는 함수.
런타임은 사실 크게 줄진 않았는데(5ms줄어듬) 일단 코드가 깔끔하다는 것이 마음에 듭니다
위도 화살표함수로 처리해버려도 되는데 화살표의 화살표의 화살표같은 비주얼 될까봐 function 중괄호 해줬습니다...
https://paperblock.tistory.com/70 reduce 이해에 참조한 게시글.
이게 가장 이해하기 쉬웠던 것 같아요.
*/ 