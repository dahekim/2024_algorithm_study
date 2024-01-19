// https://leetcode.com/problems/add-two-promises/?envType=study-plan-v2&envId=30-days-of-javascript
// promise1과 promise2가 주어졌을 때, 새로운 프로미스를 리턴하라.
// 이 때, promise1과 promise2는 숫자로 해결되고, 반환될 프로미스는 두 숫자의 합으로 반환되어야 한다.


var addTwoPromises = async function(promise1, promise2) {
    // promise1과 promise2 가 해결될 때까지 기다리고 (await) 그 값을 변수 i와 j에 담고 두 프로미스의 결과를 더한 값을 리턴한다.
    let i = await promise1;
    let j = await promise2;    
    return i+j;
};