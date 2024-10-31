// 중도포기.다음주에 마저 풀어올 것!
// const equals = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

// function solution(user_id, banned_id) {
//     var answer = 1;
//     let banArr = []
//     let arr = []
//     banned_id.forEach((e,idx) => {
//         let arr = user_id.filter(id => {
//             if(e.length !== id.length){
//                 return false
//             }else{
//                 return new RegExp(e.replace(/\*/g,'[a-z0-9]{1}')).test(id)
//             }
//         })
//         banArr[idx] = arr
//     })
    
//     banArr.forEach((el,idx) => {
// //         똑같은 배열이 2개 이상 존재할 경우?

//         console.log(el)
//         let arrList = el.filter(item => arr.indexOf(item) == -1)
//         console.log(arrList.length , arr)
//         answer *= arrList.length
//         arr.push(...arrList)
//     })
//     return answer;
// }

function solution(user_id, banned_id) {
    var answer = 0;
    let banObj = new Map()
    let index = 0
    banned_id.forEach(e => {
        let arr = user_id.filter(id => {
            if(e.length !== id.length){
                return false
            }else{
                return new RegExp(e.replace(/\*/g,'[a-z0-9]{1}')).test(id)
            }
        })
        banObj.set(`${e}${index}`,arr)
        index++
    })
    const combinations = [...banObj.values()];
    const n = combinations.length;
    const result = new Set();
    dfs("", 0);

    return result.size;
    
    function dfs(usrStr, level) {
        if (level === n) {
            const usrPair = [...new Set(usrStr.split(","))];
            if (usrPair.length !== n) return;
            
            result.add(usrPair.sort().join());
            return;
        }
        for (const id of combinations[level]) {
            // 이거 왜이러는지 아시는분...? 그냥 id로 하면 안되더라구요.
            if (usrStr.includes(id + ",")) continue;
            dfs(usrStr + (usrStr.length === 0 ? "" : ",") + id, level + 1);
        }
    }
    return answer;
}