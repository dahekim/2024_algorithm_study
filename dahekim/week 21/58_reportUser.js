// https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
    const answer = [];
    const reporter = {}; // 신고한 유저 
    const count = {}; // 유저가 신고당한 횟수
    
    
    for (let i = 0; i < report.length; i++) {
        const [x, y] = report[i].split(" "); // x가 신고자 y가 신고당한 놈

        // 유저가 누구를 신고했는지를 저장
        if (reporter[x] === undefined) {
            reporter[x] = []; // 초기값 [] 
        }
        
        // 신고 횟수 초기화 
        if (count[y] === undefined) {
            count[y] = 0; // 초기값 0으로 설정
        }

        
        if (!reporter[x].includes(y)){
            reporter[x].push(y);
            count[y] ++;
        }  
    }
    
    for (let i = 0; i < id_list.length; i++) {
        const user = id_list[i];
        const reportedArr = reporter[user] || [];
        answer[i] = 0;

        // k번 이상 신고된 경우(정지된 경우) 메일 수 증가
        for (let j = 0; j < reportedArr.length ; j++) {
            if (count[reportedArr[j]] >= k) {
                answer[i] ++;
            }
        }
    }
    
    return answer;
}