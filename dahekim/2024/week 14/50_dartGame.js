// https://school.programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
    let answer = [];
    let scoreTmp = "";
    const bonus = { 
                   "S" : 1, 
                   "D" : 2, 
                   "T" : 3
                  };
    const option = { 
                    "*" : 2, 
                    "#": -1
                   };
    
    for (let i = 0; i < dartResult.length; i++){
        let isScore = dartResult[i];
        
        // 숫자면 scoreTmp에 넣음
        if(!isNaN(isScore)){
            scoreTmp += isScore;
        }
        
        // 옵션이거나 보너스인 경우
        else {
            // 보너스
            if(bonus.hasOwnProperty(isScore)){
                scoreTmp = Number(scoreTmp); // 숫자로 변환               
                scoreTmp = Math.pow(scoreTmp, bonus[isScore]);
                answer.push(scoreTmp);
                
                scoreTmp = ""; // 초기화
            } else {
                // 옵션
                if( dartResult[i] === "#"){
                    answer[answer.length - 1] *= option["#"];
                } else {
                     answer[answer.length - 1] *= option["*"];
                    
                    // 이전 점수 계산
                    if (answer.length >1 ) {
                         answer[answer.length - 2] *= option["*"];
                    }
                }
            }
        }
    }

    return answer.reduce( ( acc,cur ) => acc + cur );
}