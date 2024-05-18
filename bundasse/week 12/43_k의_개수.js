function solution(i, j, k) {
    var answer = 0;
    function isK(val){
      let arr = Array.from(val.toString())
      arr.forEach(e =>{
          if(e == k){
              answer += 1
          }
      })
    }
     for(let x=i; x<=j; x++){
         isK(x)
     } 
    return answer;
}