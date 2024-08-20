// https://school.programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    const A = createSet(str1);
    const B = createSet(str2);
    
    function createSet(str) {
        const s = [];
        for (let i = 0; i < str.length - 1; i++) {
            let twoLetters = str.slice(i, i + 2);
            if (/^[a-z]{2}$/.test(twoLetters)) { // 영문자 2글자로 된 부분 문자열만 추가
                s.push(twoLetters);
            }
        }
        return s;
    }
    
    let answer = 0;
    if (A.length === 0 && B.length === 0) {
        answer = 1;
    } else {
        // 합집합
        const tmp = [...A];
        const union = [...A];        
        B.forEach(i => {
            const index = tmp.indexOf(i);
            if (index === -1) {
                union.push(i); // A에 없는 요소를 합집합 배열에 추가
            } else {
                tmp.splice(index, 1); // 공통으로 있는 요소를 제거
            }
        });

        // 교집합
        const intersection = [];
        B.forEach(i => {
            const index = A.indexOf(i);
            if (index !== -1) { // B의 요소가 A에 있다면
                A.splice(index, 1); // A에서 해당 요소를 제거
                intersection.push(i); // 교집합 배열에 추가
            }
        });

        answer = intersection.length / union.length; 
    }

    return Math.floor(answer * 65536);
}
