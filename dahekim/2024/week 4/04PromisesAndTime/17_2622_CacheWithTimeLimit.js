// https://leetcode.com/problems/cache-with-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript
// 키-값 쌍을 저장하고 불러오는 클래스를 작성하라. 이 클래스는 각 키에 대한 만료시간을 관리하는 기능을 제공해야 한다.
// 이 클래스는 세 가지의 메소드를 가지고 있다.
// - set(key, value, duration) : 정수 key, 정수 value, 밀리초 단위의 duration을 인자값으로 가짐, duration의 기간이 지나면 key에 접근하지 못해야 한다. 
// 이 메소드는 만료되지 않은 동일한 key가 존재한다면 true를 반환하며, 그렇지 않으면 false를 반환한다. 
// 이미 key가 존재하더라도 만료되었다면 value와 duration를 덮어쓴다.
// -get(key) : 특정 key에 대해 만료되지 않은 키가 존재하면 해당 value를 반환한다. 그렇지 않으면 -1를 반환한다.
// -count(): 만료되지 않은 key의 갯수를 반환한다.


// key-value 쌍, duration을 저장하는 TimeLimitedCache를 Map 객체로 생성한다.
var TimeLimitedCache = function() {
    this.store = new Map();
};


TimeLimitedCache.prototype.set = function(key, value, duration) {
    // 현재 시간
    const currentTime = Date.now();

    // 키가 이미 존재한다면
    if (this.store.has(key)) {
        // 키 항목이 만료되었다면 값을 갱신하고 false를 리턴
        if (this.isExpired(key, currentTime)) {
            this.store.set(key, { value, expiration: currentTime + duration });
            return false;
        // 만료되지 않았다면 값을 갱신하고 true를 리턴
        } else {
            this.store.set(key, { value, expiration: currentTime + duration });
            return true;
        }
    // 키가 존재하지 않는다면 새로운 key-value를 생성하고 false를 반환
    } else {
        this.store.set(key, { value, expiration: currentTime + duration });
        return false;
    }
};

TimeLimitedCache.prototype.get = function(key) {
    // 현재 시간
    const currentTime = Date.now();

    // 키가 존재한다면
    if (this.store.has(key)) {
        const cache = this.store.get(key);
        // 만료되지 않았다면 해당 값을 리턴
        if (!this.isExpired(cache, currentTime)) {
            return cache.value;
        // 만료되었다면 해당 키를 삭제하고 -1 리턴
        } else {
            this.store.delete(key);
        }
    }
    return -1;
};

TimeLimitedCache.prototype.count = function() {
    // 현재 시간
    const currentTime = Date.now();
     // 만료되지 않은 키의 개수 반환
    return Array.from(this.store.values()).filter(cache => !this.isExpired(cache, currentTime)).length;
};


/**
 * @param {Object} cached
 * @param {number} currentTime
 * @return {boolean} 
 */
// 현재 시간을 기준으로 인풋의 duration이 만료되었으면 true, 아니면 false를 반환
TimeLimitedCache.prototype.isExpired = function(cache, currentTime) {
    return cache.expiration < currentTime;
};

