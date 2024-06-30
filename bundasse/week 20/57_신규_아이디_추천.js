function solution(new_id) {
    var answer = '';

    const regex = /[^0-9a-z-_\.]/g
    answer = new_id.toLowerCase();
    answer = answer.replaceAll(regex, '')
//     마침표 2번 이상이면 .으로 바꾸기
    while(answer.indexOf('..') != -1){
       answer = answer.replaceAll('..','.') 
    }
//     마침표로 시작하면 없애기
    if(answer[0] == '.'){
       answer = answer.slice(1)
   }
//     마침표로 끝나면 없애기
    if(answer[answer.length-1] == '.'){
       answer = answer.slice(0,-1)
    }
    if(answer.length == 0){
       answer = 'a'
    }
    if(answer.length > 15){
        answer = answer.slice(0,15)
        if(answer[answer.length-1] == '.'){
       answer = answer.slice(0,-1)
       }
    }
    if(answer.length <3){  
        let l = answer.slice(-1)
        while(answer.length<3){
            answer += l
        }
    }
    return answer;
}