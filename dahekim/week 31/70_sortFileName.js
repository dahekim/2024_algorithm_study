// https://school.programmers.co.kr/learn/courses/30/lessons/17686

function solution(files) {
    function parseFile(file) {
        const match = file.match(/^([a-zA-Z-\. ]+)(\d{1,5})/);
        const head = match[1];
        const number = match[2];
        const tail = file.slice(match[0].length); 
        return { head, number, tail };
    }

    files.sort((a, b) => {
        const fileA = parseFile(a);
        const fileB = parseFile(b);

        // HEAD를 대소문자 구분 없이 사전 순으로 정렬 
        const headA = fileA.head.toLowerCase();
        const headB = fileB.head.toLowerCase();
        
        if (headA < headB) return -1; // headA가 사전적으로 더 앞일 때
        if (headA > headB) return 1;  // headB가 더 앞일 때

        // HEAD가 같으면 NUMBER를 숫자로 변환해 정렬
        const numA = fileA.number * 1;
        const numB = fileB.number * 1;
        return numA - numB;
    });

    return files;
}
