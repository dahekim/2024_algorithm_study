var TimeLimitedCache = function() {
    this.cache = {}
 };
 
 /*
  * @param {number} key
  * @param {number} value
  * @param {number} duration time until expiration in ms
  * @return {boolean} if un-expired key already existed
  */
 TimeLimitedCache.prototype.set = function(key, value, duration) {
         if (this.cache[key] && this.cache[key].limit){
             clearTimeout(this.cache[key].limit)
             this.cache[key].val = value
             this.cache[key].limit = setTimeout(()=> delete this.cache[key], duration)
             return true
         }else{
             this.cache[key] = {val: value , limit : setTimeout(()=> delete this.cache[key], duration)} 
             return false
         }
 };
 
 /*
  * @param {number} key
  * @return {number} value associated with key
  */
 TimeLimitedCache.prototype.get = function(key) {
     if (this.cache[key] && this.cache[key].limit){
         return this.cache[key].val
     }else{
         return -1
     }
     
 };
 
 /*
  @return {number} count of non-expired keys
  */
 TimeLimitedCache.prototype.count = function() {
     if(this.cache !== {}){
     return Object.keys(this.cache).length
     }else{
         return 0
     }
 };
 
 /**
  * const timeLimitedCache = new TimeLimitedCache()
  * timeLimitedCache.set(1, 42, 1000); // false
  * timeLimitedCache.get(1) // 42
  * timeLimitedCache.count() // 1
  */


 /*
 몬가 앞에서 풀었던 문제의 요소들이 합체한듯한 느낌의 문제였어요
 memoize closure promise가 응용된...
 
 timeLimitedCache 안에 함수가 세 개 있음. set,get,count.

 set은 key, value, duration을 받고 key와 value를 쌍으로 넣음.
 이 set된 key는 duration초 후에는 삭제되어야 한다.
만약 이미 key가 있는 상태에서 또 같은 key를 set했다면 key의 유효시간을 리셋하고 true를 리턴.
없다면 false를 리턴한다.

get은 key를 받는데 그 key의 value를 가져온다. 만약 해당하는 key가 없다면 -1을 리턴한다.

count는 현재 살아있는(expired되지 않은) key의 수를 리턴한다.

get과 count는 하기 쉬웠는데 set에서 헤맸네요.
할땐 꽤 힘들었던 것 같은데 또 풀고나니 이전에 했던 문제를 돌아보면서
한땀한땀 작성하면 생각보다 못풀 문제는 아니었?을지도...(이 문제모음집이 다 좀 그런느낌인듯)
 */