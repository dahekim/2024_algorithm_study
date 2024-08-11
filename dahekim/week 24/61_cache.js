// https://school.programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize, cities) {
    if (cacheSize === 0) {
        return cities.length * 5;
    }

    const cache = [];
    let answer = 0;

    for (let city of cities) {
        city = city.toLowerCase();
        if (cache.includes(city)) {
            // Cache hit일 경우
            answer += 1;
            cache.splice(cache.indexOf(city), 1); 
            cache.push(city); // 가장 최근 사용된 것으로 추가
        } else {
            // Cache miss일 경우
            answer += 5;
            if (cache.length === cacheSize) { // 캐시가 꽉 차면
                cache.shift(); // 가장 오래된 도시 삭제
            }
            cache.push(city);
        }
    }

    return answer;
}
