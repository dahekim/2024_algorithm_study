function solution(cap, n, deliveries, pickups) {
    var answer = 0;
    for(let i=n-1; i>=0; i--){
        if(deliveries[i] == 0 && pickups[i] == 0){
            deliveries.pop()
            pickups.pop()
        }else{
            break
        }
    }
    
    function checkCount(num,cap,arr){
        let count = 0;
        for(let i=arr.length-1; i>=0; i--){
            if(cap - count >= arr[i]){
                count += arr[i]
                arr.pop()
            }else{
                arr[i] -= cap - count
                return;
            }
        }
    }

    let delL= deliveries.length -1 
    let picL = pickups.length-1
    while(delL >=0 || picL >=0){
        let len = Math.max(delL,picL)
        answer += (len+1)*2
        checkCount(delL,cap,deliveries)
        checkCount(picL,cap,pickups)
        delL = deliveries.length-1
        picL = pickups.length-1
    }
    return answer;
}