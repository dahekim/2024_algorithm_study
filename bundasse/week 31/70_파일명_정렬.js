function numberIdx(str){
    let arr = [...str]
    let head = ''
    let num = ''
    let numExist = false
    arr.forEach((e,i)=>{
        if(!isNaN(parseInt(e)) && e !== ' '){
            if(!numExist){
                num += e                
            }
        }else{
            if(num.length>0 &&!numExist){
                numExist = true
            }else if(!numExist){
                head += e   
            }
        }
    })
    return [head.toUpperCase(),Number(num)]
}

function solution(files) {
    var answer = [];
    answer = files.sort((a,b)=>{
        let [ahead,anum] = numberIdx(a)
        let [bhead,bnum] = numberIdx(b)
        if(ahead !== bhead){
            return ahead > bhead ? 1: -1
        }else{
            if(anum !== bnum){
                return anum - bnum
            }else{
                return 0
            }
        }
    })
    return answer;
}