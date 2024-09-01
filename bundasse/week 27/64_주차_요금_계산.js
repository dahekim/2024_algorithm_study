function solution(fees, records) {
    var answer = [];
    let cars = {};
    records.forEach(e => {
        let [time, num, inout] = e.split(" ")
        if(Object.keys(cars).includes(num)){
            cars[num].push(inout +","+time)
        }else{
        cars[num] = [inout +","+ time]
        }
    })
    
    function calcCost(intime, outtime){
        let cost = 0
        let [ohour,omin] = outtime.split(":")
        let [inhour,inmin] = intime.split(":")
        let min = (Number(ohour)-Number(inhour))*60 + (Number(omin)-Number(inmin))
        return min
    }
//     자동차번호 적은 순서부터 배열
    let arr = Object.keys(cars).sort((a,b) => a-b)
    arr.forEach(e => {
        console.log(e)
        let fee = 0;
        let totalTime = 0;
        let arr = cars[e]
        for(let i =0 ; i<arr.length; i++){
            let [inout, time] = arr[i].split(",")
            if(inout == 'OUT'){
                let intime = arr[i-1].split(",")[1]
                let t = calcCost(intime, time)
                totalTime += t
            }else if(i == arr.length-1){
                let t = calcCost(time, '23:59')
                totalTime += t
            }
        }
        if(totalTime<=fees[0]){
            fee = fees[1]
        }else{
            fee = fees[1] + (Math.ceil((totalTime-fees[0])/fees[2])*fees[3])
        }
        answer.push(fee)
    })
    return answer;
}