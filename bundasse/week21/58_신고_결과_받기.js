function solution(id_list, report, k) {
    var answer = [];
    let reportData = {}
    id_list.forEach(e => {
//         reportUsers: 자신이 신고한 유저 목록
//         reportedCount:신고받은 횟수 
//         mailCount : 메일을 받은 횟수
        reportData[e] = {reportUsers:[], reportedCount: 0, mailCount:0}
    })
    for(let i=0; i<report.length; i++){
        let [r1, r2] = report[i].split(" ")
//         r1이 신고자, r2가 신고받은 사람
//         r1이 처음으로 r2를 신고했을 때만 작동
        if(reportData[r1].reportUsers.indexOf(r2) == -1){
//             r1의 신고한 사람 목록에 r2 추가
            reportData[r1].reportUsers.push(r2);
//             r2의 신고받은 횟수 목록에 +1
            reportData[r2].reportedCount += 1;
        }
    }
    for(let key in reportData){
//         key씨가 k번 이상 신고당했을 경우(샤이니키씨아님)
        if(reportData[key].reportedCount >= k){
//         key를 신고했던 모든 사람들에게 메일보냄
            for(let users in reportData){
                if(reportData[users].reportUsers.indexOf(key) != -1){
                    reportData[users].mailCount += 1 
                }
            }
        }
    }
    for(let key in reportData){
        answer.push(reportData[key].mailCount)
    }
    
    return answer;
}