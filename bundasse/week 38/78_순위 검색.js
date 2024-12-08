function solution(infos, querys) {

    const rule = new Map();
    infos.forEach(v => {
        const info = v.split(' ');
        const score = Number(info.pop());

        let key = info.join(''); 
        rule.set(key, rule.has(key) ? [...rule.get(key), score] : [score]);
    });
    for(let [key, value] of rule){
        rule.set(key, value.sort((a, b) => a - b));
    }
    return querys.map(e => {
        const conditions = e.split(/ and | |-/i).filter(e => e);
        return search(rule, conditions);
    });
}

const search = (rule, conditions) => {
    const score = conditions.pop();
    console.log(rule, conditions, score)
    return Array.from(rule.keys())
        .filter(key => conditions.every(v => key.includes(v)))
        .reduce((a, c) => a + rule.get(c).slice(lowerBound(rule.get(c), score)).length, 0);
}

const lowerBound = (arr, target) => {
    let left = 0;
    let right = arr.length; 
    while(left < right){
        const mid = Math.floor((left + right) / 2);

        if(arr[mid] >= target) right = mid;
        else left = mid + 1;
    }

    return left;
}

// 효율성검사 실패
// function solution(info, query) {
//     var answer = [];
//         let queryData = query.map(q => {
//         return q.split(" ").filter(e => e != 'and')
//     })
//     let infoData = info.map(person => {
//         return person.split(" ")
//     }).sort((a,b) =>{ return Number(a[4]) - Number(b[4])})
//     queryData.forEach(condition => {
//         let filteredInfo = infoData.filter(e => { return Number(e[4]) >= Number(condition[4]) })
//         for(let i=0; i<4; i++){
//             filteredInfo = filteredInfo.filter(e => {
//                 return condition[i] =='-' ? true : e[i] == condition[i]
//             })
//         }
//         answer.push(filteredInfo.length)
//     })
//     return answer;
// }
