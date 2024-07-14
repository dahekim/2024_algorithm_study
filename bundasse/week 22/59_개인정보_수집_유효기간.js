function solution(today, terms, privacies) {
    var answer = [];
    let prikeys = {};
    // 각 약관을 key, 약관 유효기간 month를 값으로 담음
    terms.forEach(e => {
        let [key, month] = e.split(" ");
        prikeys[key] = Number(month);
    })
    privacies.forEach((e, i) => {
        let [date,pri] = e.split(" ");
        // 약관 날짜의 number를 lastY,M,D로 설정
        let [lastY, lastM, lastD] = date.split(".").map(Number)
        // 약관유효기간+M이 12를 넘을 경우(해가 넘어간 경우) Y에 +1하고 -12
        if (lastM + prikeys[pri]>12){
            lastY += 1
            lastM += prikeys[pri] -12
        }else{
            lastM += prikeys[pri]
        }
        // today가 약관 유효날짜와 같거나 넘었을 경우 index+1을 추가
        if(new Date(today) >= new Date(lastY, lastM-1,lastD)){
            answer.push(i+1)
        }
        
    })
    return answer;
}