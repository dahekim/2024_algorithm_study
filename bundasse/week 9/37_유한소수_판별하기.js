function solution(a, b) {
    var answer = 0;
    let gcd = 1;
    for(let i=2; i<=Math.min(a,b);i++){
        if(a%i ===0 && b%i === 0){
            gcd = i
        }
    }
    b /= gcd;
    while (b%2 === 0){
        b/=2;
    }
    while(b%5 ===0){
        b/=5;
    }
    b === 1? answer = 1: answer =2
    return answer;
}