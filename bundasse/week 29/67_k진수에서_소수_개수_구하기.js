function solution(n, k) {
    var answer = 0;
    let arr = n.toString(k).split("0").filter(item => item != '')
    arr.forEach(e =>{
        let isSosu = true;
        if(e == 1){
            isSosu = false
        }else if(e % 2 == 0){
            e == 2? isSosu = true : isSosu = false
        }else{
            for(let i=3; i<Math.ceil(Math.sqrt(e)); i+=2){
                if(e%i == 0){
                    isSosu = false;
                    break;
                }
            }   
        }
        if(isSosu){
            answer++;
        }
    })
    
    return answer;
}