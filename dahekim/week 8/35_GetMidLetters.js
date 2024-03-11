// https://school.programmers.co.kr/learn/courses/30/lessons/12903
// 단어 s의 가운데 글자를 반환하는 함수, solution을 완성하라. 단어의 길이가 짝수라면 가운데 두글자를 반환하라.

function solution(s) {
    const len = s.length;
    // if(len%2 === 0){
    //     return s[(len/2)-1] + s[(len/2)]
    // } 
    // else{
    //      return s[Math.floor(len/2)]
    // }
    
    return len %2 === 0 ? s[(len/2)-1] + s[(len/2)] : s[Math.floor(len/2)];
}