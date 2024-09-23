function solution(s) {
    var answer = [];
    let str = s.slice(1,s.length-1);
    let arr = str.split('}')
    arr.pop()
    arr.sort((a,b) => a.length - b.length)
    arr.forEach(e =>{
        let arr2 = []
        e.split(',').forEach(num => {
            if(num != ''){
                let n = num.replaceAll(/[\D]/gi, "");
                arr2.push(n)
            }
        })
        arr2.filter(num => {
            if(answer.indexOf(Number(num)) == -1){
                answer.push(Number(num))
            }
            
        })

    })
    
    return answer;
}