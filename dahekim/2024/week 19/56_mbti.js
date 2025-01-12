// https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
    const type = {
        R: 0, T: 0,
        C: 0, F: 0,
        J: 0, M: 0,
        A: 0, N: 0
    };
    const scores = { 1: 3, 2: 2, 3: 1, 4: 0, 5: 1, 6: 2, 7: 3 };


    for (let i = 0; i < survey.length; i++) {
        const [disagree, agree] = survey[i].split('');
        const choice = choices[i];

        if (choice < 4) {
            type[disagree] += scores[choice];
        } else if (choice > 4) {
            type[agree] += scores[choice];
        }
    }


    const answer = [
        type.R >= type.T ? 'R' : 'T',
        type.C >= type.F ? 'C' : 'F',
        type.J >= type.M ? 'J' : 'M',
        type.A >= type.N ? 'A' : 'N'
    ];

    return answer.join("");
}
