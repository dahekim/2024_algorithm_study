var filter = function(arr, fn) {
    var answer = []
    arr.forEach((e,i)=>{
        if(fn(e,i)){
            answer.push(e)
        }
    })
    return answer
};

/*
arr의 각 요소마다 fn(e,i)가 true일 경우 answer 배열에 push.
결과값이 false일 경우 배열에 삽입되지 않기 때문에, arr의 index와 answer의 index가 일치하지 않을 가능성이 있어서
answer[i] 방식으로 넣는 것은 하지 않았다.
*/