// https://school.programmers.co.kr/learn/courses/30/lessons/17684

function solution(msg) {
    const answer = [];
    const dictionary = {};

    //A(65)~Z(90)까지 색인 번호를 저장
    let number = 1;
    for(let i = 65; i <= 90; i++){
        dictionary[String.fromCharCode(i)] = number;
        number++;
    }
    
    // 압축 프로세스
    let str = ""; 
    for(let i = 0; i < msg.length; i++){
        str += msg[i];
        
        const next = msg[i+1] === undefined 
            ? str 
            : str + msg[i+1];    

        // 마지막 글자 처리
        if(i === msg.length -1){
            answer.push(dictionary[str]);

        } else if (dictionary[next] === undefined) {
            dictionary[next] = number;
            number++;            
            answer.push(dictionary[str]);
            str = "";
        }
    }

    return answer;
}