// https://school.programmers.co.kr/learn/courses/30/lessons/12944
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성하라

function solution(arr) {
    // for문 사용
    /*
    let answer = 0;
    for (let i = 0; i < arr.length; i++){
        answer += arr[i];
    }
    return answer / arr.length;
    */
    
    // reduce 사용
    const sum = arr.reduce((acc, cur) => acc + cur, 0); // 배열의 모든 요소를 더함
    const answer = sum / arr.length; // 합산된 값에서 배열의 길이로 나누어 평균값 계산
    return answer;

    // 좀 더 줄여보았음
    // return arr.reduce( (acc, cur, i, { length }) => {
    //     return i === length -1? (acc+cur)/length : acc+ cur});
}