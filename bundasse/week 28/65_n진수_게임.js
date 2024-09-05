function solution(n, t, m, p) {
    var answer = '';
    
//     string의 길이
    let leng = m*t
    let nowLeng = 0;
    let num = 0;
    let str = '';
    while(nowLeng<=leng){
        str += num.toString(n)
        nowLeng = str.length;
        num++
    }
    console.log(str)
    for(let i=0; i<t; i++){
        let k = i*m+p-1
        answer += str[k].toUpperCase()
    }
    return answer;
}