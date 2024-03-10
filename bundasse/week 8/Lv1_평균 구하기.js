function solution(arr) {
    var answer = 0;
    let some = 0;
    for(let i=0; i<arr.length; i++){
        some += arr[i]
    }
    answer = some/(arr.length)
    return answer;
}