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
    banned_id.forEach((e,i) => {
        let arr = user_id.filter(id => {
            if(e.length !== id.length){
                return false
            }else{
                return new RegExp(e.replace(/\*/g,'[a-z0-9]{1}')).test(id)
            }
        })
        banObj.set(`${e}${i}`,arr)
    })
    
    
    const combinations = [...banObj.values()];
    const n = combinations.length;
//     combinations > 각 banned_id에 맞는 이름 목록. n > 제재타입 목록(banned_id길이)
    const result = new Set();
    dfs("", 0);
    console.log(result)
    return result.size;
    
    function dfs(usrStr, level) {
        if (level === n) {
//             아이디목록 세트가 완성되었을 경우(banned_id를 다 채움)
            const usrPair = [...new Set(usrStr.split(","))];
//             중복된 아이디를 삭제해서 배열을 만들어본다
            if (usrPair.length !== n) return;
            result.add(usrPair.sort().join());
//             중복아이디가 뽑힌 케이스는 리턴해버리고, 중복 없는 경우만 result에 추가
            return;
        }
        for (const id of combinations[level]) {
            if (usrStr.includes(id + ",")) continue;
//             이미 포함되어있음>건너뜀
            dfs(usrStr + (usrStr.length === 0 ? "" : ",") + id, level + 1);
//             아닐경우 ',아이디' 붙이기를 반복. 레벨을 +1추가해서 다음 아이디세트에서 뽑을 수 있게 한다
        }
    }
    return answer;
}