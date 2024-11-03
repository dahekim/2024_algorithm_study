// https://school.programmers.co.kr/learn/courses/30/lessons/64064

// 배열 banned_id에 있는 아이디와 유저 아이디의 일치 여부를 확인하는 함수
function isMatch(bannedId, userId) {
    // 서로 id의 길이가 다르면 false
    if (bannedId.length !== userId.length) return false;
    
    // 반복문으로 문자열을 돌면서 1. 해당 위치의 문자가'*'가 아니고 2. 두 문자가 다르면 false
    for (let i = 0; i < bannedId.length; i++) {
        if (bannedId[i] !== '*' 
            && bannedId[i] !== userId[i]) return false;
    }
    return true;
}

function solution(user_id, banned_id) {
    const answer = new Set();

    // 가능한 경우의 수의 아이디 조합을 만드는 함수
    function getCases(arr, length) { 
        const result = [];
        if (length === 1) return arr.map((e) => [e]);
    
        arr.forEach((item, i) => {
            const remains = [...arr.slice(0, i), ...arr.slice(i + 1)];
            const cases = getCases(remains, length - 1);        
            
            cases.forEach((c) => {
                result.push([item, ...c]);
            });
        });
        
    return result;    
    }    
    const caseList = getCases(user_id, banned_id.length);
    for (const banned_user of caseList) {
        let isValid = true;
        
        for (let i = 0; i < banned_id.length; i++) {
            if (!isMatch(banned_id[i], banned_user[i])) {
                isValid = false;
                break;
            }
        }
        
        if (isValid) {
            answer.add([...new Set(banned_user)].sort().join(','));
        }
    }

    return answer.size;
}

