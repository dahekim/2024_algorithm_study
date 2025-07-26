function solution(n, works) {
//     남은시간 내에 업무 다 마치면 피로도 0
    if(works.reduce((acc,curr) => acc+curr) <= n) return 0
    
    while(n){
        let max = Math.max(...works)
        for(let i=0; i<works.length; i++){
            if(works[i]>=max){
                works[i]--;
                n--;
            }
            if(!n) break
        }
    }    
    return works.reduce((acc,curr) => acc += curr**2,0)
}