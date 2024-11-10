function getCombination(arr,select){
    let result = []
    if(select == 1){
        return arr.map((e) => [e])
    }
    arr.forEach((e,i,orgArr)=>{
        let rest = orgArr.slice(i+1)
        let comb = getCombination(rest,select-1)
        let arr2 = comb.map((el) => [e,...el]);
        result.push(...arr2)
    })
    return result
}

function checkUnique(arr,idxArr){
    let keyArr = new Set()
    arr.forEach(e => {
        let s = ''
        idxArr.forEach(idx => {
            s += e[idx]
        })
        keyArr.add(s)
    })
    return arr.length == keyArr.size
}

function checkMin(arr){
    let results=[];
    while(arr.length){
        results.push(arr[0]);
        arr=arr.reduce((acc,cur)=>{
            let notMinimal=arr[0].every(combination=>cur.includes(combination));
            if(!notMinimal) acc.push(cur); 
            return acc;
        },[])
    }
    return results;
    
}

function solution(relation) {
    var answer = 0;
    let columnLen = relation[0].length;
    let rowLen = relation.length;
    let columnIdxArr = []
    for(let i=0; i<columnLen; i++){
        columnIdxArr.push(i)
    }
//  조합으로 모든 keyset 인덱스목록을 만든다
    let keysets = []
        for(let i=1; i<columnLen; i++){
        keysets.push(...getCombination(columnIdxArr,i))
    }
//  유일성 체크
    let uniqueKeysets = []
    keysets.forEach(keyset => {
        let unique = checkUnique(relation, keyset)
        if(unique){
            uniqueKeysets.push(keyset)
        }
    })
//  최소성 체크
    let passedKeysets = checkMin(uniqueKeysets)
    answer = passedKeysets.length
    return answer == 0 ? 1: answer;
}