function solution(dots) {
    var answer = 0;
    let [dot1, dot2, dot3, dot4] = dots
    function calc(a,b,c,d){
        let num1 = (b[1]-a[1])/(d[1]-c[1])
        let num2 = (b[0]-a[0])/(d[0]-c[0])
        if(num1 === num2){
            answer = 1
        }
    }
    calc(dot1,dot2,dot3,dot4)
    calc(dot1,dot3,dot2,dot4)
    calc(dot1,dot4,dot2,dot3)
    return answer;
}