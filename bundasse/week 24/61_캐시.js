function solution(cacheSize, cities) {
    var answer = 0;
    let cache = [];
    /*
    cache hit: 캐시목록에 값이 있다
    cache miss: 캐시목록에 값이 없다
    LRU
    1.값 있으면 호출한 값을 배열 맨 끝으로 옮김
    2.값 없으면 가장 끝에 캐시를 추가함. 이때 캐시값보다 데이터값이 많으면 첫번째값을 삭제
    */ 
    cities.forEach(e =>{
        let w = e.toUpperCase()
        let idx = cache.indexOf(w);
        if(idx == -1){
            if(cacheSize != 0){
                if(cache.length == cacheSize){
                    cache.splice(0,1)    
                    cache.push(w)
                }else{
                    cache.push(w)
                }   
            }
            answer += 5
        }else{
            cache.splice(idx,1)
            cache.push(w)
            answer += 1
        }
    })
    
    return answer;
}