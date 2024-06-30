function solution(new_id) {
    let answer = "";
    const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";
    
    new_id = new_id.toLowerCase(); // 대문자 -> 소문자
    
    // 알파벳 소문자, 숫자, -, _, . 을 제외한 나머지 모든 문자 제거 
    for(let i = 0 ; i <new_id.length ; i++){
        if(filter.includes(new_id[i])) {
            answer += new_id[i];
        }
    }
    
    // ..이 두번 이상 연속되면 .로 치환
    while(answer.includes("..")){
        answer = answer.replace("..",".");
    }
    
    // .가 처음에 있으면 제거
    if(answer[0] === "."){
        answer = answer.substring(1);
    }
    
    // .가 마지막에 있으면 제거 
    function removeLastdot(){
        if(answer[answer.length-1] === "."){
            answer = answer.substring(0, answer.length-1);
        }
    }
    removeLastdot()
    
    // 빈 문자열이면 a로 대입
    if(answer.length === 0){
        answer = "a";
    }
    
    // 길이가 16자 이상이면 처음 15개를 제외한 그 뒤의 문자들 제거
    // 아이디 끝에 .가 있으면 제거 
    if(answer.length >= 16){
        answer = answer.substring(0, 15);
        removeLastdot();
    }

    // 길이가 2자 이하면 길이가 3이 될때까지 마지막 문자를 반복
    if (answer.length <= 2){
        answer = answer.padEnd(3, answer[answer.length -1]);
    }
    
    return answer;
}