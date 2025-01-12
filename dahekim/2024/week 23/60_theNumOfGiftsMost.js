// https://school.programmers.co.kr/learn/courses/30/lessons/258712

function solution(friends, gifts) {
    let answer = 0;
    const friendsList = {};
    const friendsLength = friends.length;
    const score = Array(friendsLength).fill(0); // 선물 지수
    const chart = Array.from(Array(friendsLength), () => Array(friendsLength).fill(0));

    for (let i = 0; i < friendsLength; i++) {
        friendsList[friends[i]] = i;
    }
    
    for (const gift of gifts) {
        const [g, r] = gift.split(" ");
        score[friendsList[g]]++;
        score[friendsList[r]]--;
        chart[friendsList[g]][friendsList[r]]++;
    } 

    for (let i = 0; i < friendsLength; i++) {
        let num = 0;
        for (let j = 0; j < friendsLength; j++) {
            if (i === j) continue; 
            if (
                chart[i][j] > chart[j][i] ||
                (chart[i][j] === chart[j][i] && score[i] > score[j])
            ) {
                num++;
            }
        }
        if (answer < num) answer = num;
    }
    return answer;
}