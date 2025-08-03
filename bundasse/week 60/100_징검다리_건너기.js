function bs(list, k, min, max){
    if(min == max){
        return min
    }
    let mid = Math.round((min+max)/2);
    let count = 0;
    for(let i=0; i<list.length; i++){
        if(count === k){
            break
        }
        let val = list[i] - (mid-1);
        val <= 0 ? count++ : count = 0;
    }
    return count == k ? bs(list,k,min,mid-1): bs(list,k,mid,max)
}
function solution(stones, k) {
    return bs(stones,k,1,200000000);
}
// 망한답안
// function solution(stones, k) {
//     var answer = 0;
//     let str = ''
//     for(let i=0; i<k+1; i++){
//         str +='0'
//     }
//     let flg = true;
//     while(flg){
//         for(let i=0; i<stones.length; i++){
//             if(stones[i]>0){
//                 stones[i] -=1;
//             }
//         }
//         if (stones.join("").includes(str)){
//             flg = false
//         }else{
//             answer +=1;
//         }

//     }

//     return answer;
// }