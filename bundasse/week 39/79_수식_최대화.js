// 순열
function getComb(arr,selectCount){
    if(selectCount == 1){
        return arr.map((e) => [e])
    }
    let result = []
    arr.forEach((fix,idx,origin)=>{
        let rest = [...origin.slice(0,idx),...origin.slice(idx+1)]
        let combArr = getComb(rest, selectCount-1)
        let attach = combArr.map((e) => [...fix,...e])
        result.push(...attach)
    })
    return result
}

function calc(a,b,yeonsan){
    switch(yeonsan){
        case '*':
            return a*b
        case '+':
            return a+b
        case '-':
            return a-b
    }
}

function solution(expression) {
    var answer = 0;
//     현재 포함되어 있는 연산자들 필터
    let yeonsan = ['+','-','*'].filter(e => expression.includes(e))
//     연산순서를 순열로 만든다
    let combArr = getComb(yeonsan,yeonsan.length)
    combArr.forEach(item =>{
        let numbers = expression.match(/[0-9]+/g).map(e => Number(e))
        let yeonsans = expression.match(/[\+\-\*]/g)
        for(const e in item){
            let idx = yeonsans.indexOf(item[e])
            if(idx != -1){
                while(idx > -1){
                    numbers[idx] = calc(numbers[idx],numbers[idx+1],item[e])
                    numbers.splice(idx+1,1)
                    yeonsans.splice(idx,1)
                    idx = yeonsans.indexOf(item[e])
                }
            }
        } 
        if(Math.abs(numbers[0]) > answer){
            answer = Math.abs(numbers[0])
        }
    })
    return answer;
}