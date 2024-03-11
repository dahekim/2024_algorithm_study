// https://school.programmers.co.kr/learn/courses/30/lessons/12948
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성하라.

function solution(phone_number) {
    // 마지막 네 자리를 먼저 구해요
    const lastNum = phone_number.slice(-4);
    // lastNum을 뒤에 붙이고 그걸 제외한 전화번호 숫자만큼의 길이만큼을 *로 채워넣어요 
    return lastNum.padStart(phone_number.length, "*");
}