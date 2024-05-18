function solution(babbling) {
    var answer = 0;
    let arr = [ "aya", "ye", "woo", "ma" ]
    let regexAll
    babbling.forEach(str => {
        let s = str
        arr.forEach(e=>{
            regexAll = new RegExp(e, "g");
            s = s.replace(regexAll, 'x');
        }) 
        s = s.replace(/X/gi, "");
        if(s.length == 0){
            answer ++
        }
    })

    return answer;
}