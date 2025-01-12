// https://leetcode.com/problems/sleep/description/?envType=study-plan-v2&envId=30-days-of-javascript
// 양의 정수 millis가 주어졌을 때, 밀리 초 단위로 주어진 시간동안 대기하는 비동기 함수를 작성하라. 이 함수는 어떤 값이 들어와도 해결되어야 한다.


async function sleep(millis) {
    // 1. 새로운 프로미스를 반환한다.
    return new Promise(resolve => {
        // 2. setTimeout()으로 비동기 대기를 설정한다.
        setTimeout(() => {
            // 3. 주어진 millis만큼의 시간이 지난 후에는 resolve 함수를 호출하여 프로미스를 완료한다.
            resolve(millis);
        }, millis);
    });
}

// 하긴 했는데 프로미스 잘 모르겟더염ㄱ- 