function solution(k, dungeons) {
    var answer = 0;
    const getArray = (arr, num)=>{
        let results = []
        if(num == 1) return arr.map(e => [e])
        arr.forEach((fixed, i, origin) => {
            const rest = [...origin.slice(0, i), ...origin.slice(i + 1)];
            const per = getArray(rest, num - 1);
            const attached = per.map(e => [fixed, ...e]);
            results.push(...attached);
        })
        return results
    }
    let arrayList = getArray(dungeons, dungeons.length)
    
    for(let i=0; i<arrayList.length; i++){
        let count = 0;
        let energy = k;
        arrayList[i].forEach(dun => {
            if(dun[0] <= energy){
                energy -= dun[1]
                count++
            }
        })
        // let num = arrayList[i].reduce((acc,curr) => {
        //     if(curr[0] <= energy){
        //         count++
        //         return acc -= curr[1]
        //     }else{
        //         return acc
        //     }
        // })
        answer = Math.max(count, answer)
        
    }

    return answer;
}