

function solution(users, emoticons) {
    let saleArray = [10,20,30,40]
    let combination = []
    dfs("", 0);
    combination.forEach(item => {
        let [c,p] = getBuyUserCount(item.comb)
        item.count = c
        item.profit = p
    })
    combination.sort((a,b) => {
        return  b.count - a.count || b.profit-a.profit
    })
    return [combination[0].count,combination[0].profit]
    
//     가능한 세일 조합수를 만들기
    function dfs (str,level){
        if(level == emoticons.length){
            combination.push({comb:str,count:null,profit:0})
            return
        }
        for(const e of saleArray){
            dfs(str + (str.length === 0 ? "" : ",") + e, level + 1);
        }
    }
    
//     플러스 가입자수와 총 수익을 구하기
    function getBuyUserCount(s){
        let arr = s.split(",")
//         플러스 가입자수
        let count = 0
//         구매액
        let totalCost = 0
        users.forEach((user,i) => {
            let [rate, buy] = user
            let cost = 0
            emoticons.forEach((curr,idx) =>{
                if(arr[idx] >= rate){
                    let r = (100-arr[idx])/100
                    cost += curr*r;
                }
            })
            cost >= buy? count++ : totalCost += cost
        })
        return [count,totalCost]
    }
}