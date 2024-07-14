// https://school.programmers.co.kr/learn/courses/30/lessons/150370

function solution(today, terms, privacies) {
    const answer = [];
    const termsInfo = {};    
    const [yyyy, mm, dd] = today.split(".").map(e => e * 1);
    
    for (let i = 0; i < terms.length; i++) {
        const [type, duration] = terms[i].split(" ");
        termsInfo[type] = Number(duration);
    } 
    
    for (let i = 0; i < privacies.length; i++) {
        const [date, termType] = privacies[i].split(" ");
        const [year, month, day] = date.split(".").map(e => e*1);
        const duration = termsInfo[termType];        

        const expiryDate = new Date(year, month-1+duration, day);
        const todayDate = new Date(yyyy, mm-1, dd);
        if (expiryDate <= todayDate) {
            answer.push(i+1); 
        }
    }

    return answer;
}
