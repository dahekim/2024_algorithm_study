// 처음 풀었던 답안.

var map = function(arr, fn) {
    var answer = []
    arr.forEach((e,i)=>{
        answer.push(fn(e,i));
    })
    return answer
};

// fn이 n,i를 인자로 받는 함수가 있으므로 일단 둘 다 넣어봄.
// 결과값은 answer 배열에 담아서 return.

// 첫번째 풀이의 런타임이 충격적인 수준으로 바닥이어서 조금만 변경해서 재시도한 것.
var map = function(arr, fn) {
    var answer = []
    arr.forEach((e,i)=>{
        answer[i] = fn(e,i)
    })
    return answer
};
// push를 빼고 answer의 [i]로 변경했을 뿐인데 55ms나 빨라졌습니다.