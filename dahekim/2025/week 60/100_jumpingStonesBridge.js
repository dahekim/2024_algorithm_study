// https://school.programmers.co.kr/learn/courses/30/lessons/64062

function solution(stones, k) {
  let answer = 0;
  let left = 1;
  let right = 0;

  for (let i = 0; i < stones.length; i++) {
    if (stones[i] > right) {
      right = stones[i];
    }
  }

  function cross(nums) {
    let skip = 0;
    for (let i = 0; i < stones.length; i++) {
      if (stones[i] - nums < 0) {
        skip++;
        if (skip >= k) return false;
      } else {
        skip = 0;
      }
    }
    return true;
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (cross(mid)) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}
