var promiseAll = function(functions) {
    let result = Promise.all(functions.map(fn => fn()));
    return result
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

/*
들어온 함수들을 모두 Promise.all로 묶어서 동시에 시작하고 전부 처리가 끝났을 때 값을 받게 하기.
Promise.all은 하나라도 에러가 나면 알아서 reject로 에러로 던져버리기 때문에 그냥 result만 리턴해주면 된다.

Promise.all, Promise.race 등등에 대한 글 https://im-developer.tistory.com/150
*/