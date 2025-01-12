// https://leetcode.com/problems/sort-by/description/?envType=study-plan-v2&envId=30-days-of-javascript
// 배열 arr과 함수 fn이 주어졌을 때, 정렬된 배열 sortedArr을 반환하라.


var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};