// https://school.programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
    const answer = [];
    const user= {};
    record.forEach(entry => {
        const [action, uid, nickname] = entry.split(" ");
        // 닉네임이 있는 경우(변경한적이 있다면) 유저 정보를 갱신
        if (nickname) {
            user[uid] = nickname;
        }
        // Enter나 Leave의 경우에만 액션을 기록
        if (action !== "Change") {
            answer.push({ uid, action });
        }
    });
    for (let i = 0; i < answer.length; i++) {
        answer[i] = user[answer[i].uid] + (answer[i].action === "Enter"
                     ? "님이 들어왔습니다." 
                     : "님이 나갔습니다.");
    }
    return answer;
}