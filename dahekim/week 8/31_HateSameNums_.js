// https://school.programmers.co.kr/learn/courses/30/lessons/12906
// 숫자 0부터 9로 이루어진 배열 arr이 주어졌을 때, 연속적으로 나타나는 숫자는 하나만 남기고 제거하여 새로운 배열로 반환하라. 
// 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 한다.

function solution(arr){
    // 완전히 중복제거가 되어버려서 뒤에 같은 수가 있는 경우까지 중복제거 되어서 X
    // return  [...new Set(arr)];

    // for문 사용
    /*
    let answer = [];
    for ( let i = 0 ; i < arr.length ; i++ ){
        if(arr[i] !== arr[i+1]) answer.push(arr[i]);
    } 
    return answer;
    */
    
    // filter 사용    
    return arr.filter((val, i) => val !== arr[i + 1]);
    
}