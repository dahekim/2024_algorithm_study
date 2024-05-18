function solution(n) {
    var answer = 0;
    let arr = [];
    for(let i=1; i<300;i++){
        if(i%3 === 0){
            continue;
        }else if(Math.floor(i/10) === 3 || Math.floor(i/10) === 13){
            continue;
        }else if(i%10 === 3){
            continue;
        }else{
            arr.push(i)
        }
    }
    console.log(arr)
    answer = arr[n-1]
    return answer;
}