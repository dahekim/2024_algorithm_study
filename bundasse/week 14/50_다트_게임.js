function solution(dartResult) {
    var answer = 0;
    let arr = []
    let scores = []
    const square = {
        'S':1,
        'D':2,
        'T':3
    }
    const bonus = {
        '*':2,
        '#':-1
    }
    let word = ''
    const regex = /[0-9]/g
    for(let i=0; i<dartResult.length; i++){
        if(regex.test(dartResult[i])){
            arr.push(word)
            word = ''
        }else if(i == dartResult.length -1){
                    word += dartResult[i]
            arr.push(word)
        }
        word += dartResult[i]
    }
    arr.shift()
    console.log(arr)
    arr.forEach((e , i) => {
        let score = 0;
        let sq = 1;
        let bo = 1;
        for(let sqs in square){
            if(e.includes(sqs)){
                sq = square[sqs]
                e = e.replace(sqs, '')
            }
        }
        for(let bos in bonus){
            if(e.includes('*') && i !== 0){
                scores[(i-1)] *= 2 
            }
            if(e.includes(bos)){
                bo = bonus[bos]
                e = e.replace(bos, '')
            }

        }
        score = (Number(e) ** sq) *bo
        scores.push(score)
    })
    console.log(scores)
    answer = scores.reduce((acc,curr) => acc+curr)
    return answer;
}


// 더럽지만 저만의 길을 고수해서 해결했습니다