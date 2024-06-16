function solution(survey, choices) {
    var answer = '';
    let obj = {
        RT:0,
        CF:0,
        JM:0,
        AN:0
    }
    function getPoint(type,choice){
        let word = [...type].sort().join('')
        let num = choice-4
        word == type? num = num : num = -num
        if(choice != 4){ obj[word] += num}
    }
    for(let i=0; i<survey.length;i++){
        getPoint(survey[i],choices[i])
    }
    for(const key in obj){
        if(obj[key]<=0){
            answer += key[0]
        }else{
            answer += key[1]
        }
    }
    return answer;
}