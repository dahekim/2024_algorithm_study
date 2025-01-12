// https://school.programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
    let answer = "";
    
    const leftNums = [ 1,4,7 ];
    const rightNums = [ 3,6,9 ]; 
    const current = { left : 10, right : 12 }; // 현재 왼손, 오른손의 위치, *는 10, #은 12로 가정
    
    for (let i = 0; i< numbers.length; i++){
        // 누를 번호가 왼쪽 키패드
        if(leftNums.includes(numbers[i])){
            answer += "L";
            current.left = numbers[i]; // 현재 왼손이 위치한 숫자를 변경
            
        // 누를 번호가 오른쪽 키패드
        } else if (rightNums.includes(numbers[i])){
            answer += "R";
            current.right = numbers[i]; // 현재 오른손이 위치한 숫자를 변경
        
        // 누를 번호가 가운데 키패드
        } else { 
            const tmp = { ...current };            
            for( let hand in tmp ){
                // 0이면 위치한 숫자를 11로 가정, 아니면 그대로 진행
                numbers[i] = numbers[i] === 0 ? 11 : numbers[i];
                
                // 왼손, 오른손의 거리값을 구한다
                let distance = Math.abs(numbers[i] - tmp[hand]);
                
                // 거리 차이가 3칸 이상일 때는 위아래로 이동 가능
                if(distance >= 3){
                    distance = Math.trunc(distance / 3 + distance % 3);
                }
                tmp[ hand ] = distance;
            } 
            
            // 왼손 오른손 위치가 같으면 hand에 입력된 값으로 누름
            if( tmp.left === tmp.right ){
                answer += hand === "left" ? "L" : "R";
                current[hand] = numbers[i];
            } else {
                if( tmp.left > tmp.right ){
                    answer += "R";
                    current.right = numbers[i];
                } else {
                    answer += "L";
                    current.left = numbers[i];
                }
            }
        }
    }
    return answer;
}