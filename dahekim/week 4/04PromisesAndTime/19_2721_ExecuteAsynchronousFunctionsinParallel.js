// https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/?envType=study-plan-v2&envId=30-days-of-javascript
// 일련의 비동기 함수 functions가 주어졌을 때, 새로운 프로미스 promise를 리턴하라.
// 다 해석했는데 하고 보니까 결국은 promise.all을 구현하라는 말이었음...

var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        // 각 함수의 실행 결과를 저장할 배열
        const result = [];
        let completedCount = 0;

        // 모든 함수가 완료되었는지 확인
        const checkCompletion = () => {
            if (completedCount === functions.length) {
                resolve(result);
            }
        };

        // 주어진 함수를 차례대로 실행
        for (let i = 0; i < functions.length; i++) {
            const currentFunction = functions[i];

            // 현재 함수를 실행하고 결과를 처리
            currentFunction()
                .then((x) => {
                    result[i] = x;
                })
                .catch((error) => {
                    // 함수 실행이 실패할 경우 첫 번째 오류로 프로미스를 거절
                    reject(error);
                })
                .finally(() => {
                    // 현재 함수를 완료로 표시
                    completedCount++;
                    // 모든 함수가 완료되었는지 확인
                    checkCompletion();
                });
        }
    });
};

