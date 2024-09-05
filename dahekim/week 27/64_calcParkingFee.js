// https://school.programmers.co.kr/learn/courses/30/lessons/92341

function calculateTime(inTime, outTime) {
    const [inHour, inMinute] = inTime.split(':').map(Number);
    const [outHour, outMinute] = outTime.split(':').map(Number);
    return (outHour * 60 + outMinute) - (inHour * 60 + inMinute);
}

function calculateFee(time, fees) {
    const [basicTime, basicFee, unitTime, unitFee] = fees;
    if (time <= basicTime) {
        return basicFee;
    } else {
        const extraTime = time - basicTime;
        const extraFee = Math.ceil(extraTime / unitTime) * unitFee;
        return basicFee + extraFee;
    }
}

function solution(fees, records) {
    const parkingTimes = {}; // 누적 주차 시간
    const inTimes = {}; // 주차된 차가 들어온 시간
    
    records.forEach(e => {
        const [time, carNumber, standard] = e.split(' ');
        
        if (standard === "IN") {
            inTimes[carNumber] = time; 
        } else { // OUT
            const parkedTime = calculateTime(inTimes[carNumber], time); // 주차 시간 계산
            if (parkingTimes[carNumber]) { 
                parkingTimes[carNumber] += parkedTime; // 기존 기록이 있으면 거기에 더하기
            } else {
                parkingTimes[carNumber] = parkedTime; // 없으면 새로 입력
            }
            delete inTimes[carNumber]; 
        }
    });

    // 입차기록만 남아 있는 차량 처리
    for (const carNumber in inTimes) {
        // 23:59에 나간 것으로 처리
        const parkedTime = calculateTime(inTimes[carNumber], "23:59");
        if (parkingTimes[carNumber]) {
            parkingTimes[carNumber] += parkedTime;
        } else {
            parkingTimes[carNumber] = parkedTime;
        }
    }

    const sortedCarNumbers = Object.keys(parkingTimes).sort();
    const answer = [];

    for (let i = 0; i < sortedCarNumbers.length; i++) {
        const carNumber = sortedCarNumbers[i];
        const fee = calculateFee(parkingTimes[carNumber], fees);
        answer.push(fee);
    }

    return answer;
}

