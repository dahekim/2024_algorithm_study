// https://leetcode.com/problems/group-by/description/?envType=study-plan-v2&envId=30-days-of-javascript
// 모든 배열에서 array.groupBy(fn) 메소드를 호출할 수 있도록 코드를 작성하라. 이 메소드는 배열의 그룹화된 버전을 반환해야 한다.

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let result = {};
    
    this.forEach(i =>{
        const key = fn(i);
        if(!result[key]){
            result[key] = []
        }
        result[key].push(i);
    });
    return result;
};
