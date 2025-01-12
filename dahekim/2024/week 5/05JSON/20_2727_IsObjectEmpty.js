// https://leetcode.com/problems/is-object-empty/description/?envType=study-plan-v2&envId=30-days-of-javascript
// 빈 객체 혹은 빈 배열이 주어질 경우에 true를 리턴하라.

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    return typeof obj === 'object' && obj !== null ? Object.keys(obj).length === 0 : false;
};