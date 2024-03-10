var addTwoPromises = async function(promise1, promise2) {
    const [val1, val2] = await Promise.all([promise1, promise2])
    return val1 + val2
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

var addTwoPromises = async function(promise1, promise2) {
    return promise1.then(res => promise2.then(res2 => res + res2));
};

/*
두 가지 방법으로 풀어봤는데 위의 쪽이 런타임이 조금 더 빨랐습니다.
아마 아래는 1 response기다림 > 2 response 받아서 더함 이란 순서고
위는 1 2 response 둘 다 받아서 각 변수에 넣음 > 더함 이라서 살짝 처리속도에 차이가 있었을지도요
*/