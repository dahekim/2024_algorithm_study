function solution(numbers) {
    var answer = [];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]%2 == 0){
           answer.push(numbers[i]+1)    
        }else{
           let num2 = '000'+numbers[i].toString(2)
           let idx = num2.lastIndexOf('01')
           let newNum = num2.slice(0,idx)+'10'+num2.slice(idx+2)
           answer.push(parseInt(newNum,2))   
        }
    }
    return answer;
}