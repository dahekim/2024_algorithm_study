// 중도포기.다음주에 마저 풀어올 것!
const equals = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

function solution(user_id, banned_id) {
    var answer = 1;
    let banArr = []
    let arr = []
    banned_id.forEach((e,idx) => {
        let arr = user_id.filter(id => {
            if(e.length !== id.length){
                return false
            }else{
                return new RegExp(e.replace(/\*/g,'[a-z0-9]{1}')).test(id)
            }
        })
        banArr[idx] = arr
    })
    
    banArr.forEach((el,idx) => {
//         똑같은 배열이 2개 이상 존재할 경우?
        if (banArr.filter(e =>{ return equals(el, e)}).length > 1){

            el = el.splice(0,1)
        }
        console.log(el)
        let arrList = el.filter(item => arr.indexOf(item) == -1)
        console.log(arrList.length , arr)
        answer *= arrList.length
        arr.push(...arrList)
    })
    return answer;
}

