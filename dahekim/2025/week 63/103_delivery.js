// https://school.programmers.co.kr/learn/courses/30/lessons/12978
function solution(N, road, K) {
  let answer = 0;
  const arr = Array.from({ length: N }, () => Array(N).fill(500001));
  for (let i = 0; i < N; i++) arr[i][i] = 0;
  for (let i = 0; i < road.length; i++) {
    const [a, b, c] = road[i];
    if (arr[a - 1][b - 1] > c) {
      arr[a - 1][b - 1] = c;
      arr[b - 1][a - 1] = c;
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < N; k++) {
        if (arr[j][k] > arr[j][i] + arr[i][k]) {
          arr[j][k] = arr[j][i] + arr[i][k];
        }
      }
    }
  }
  for (let i = 0; i < N; i++) {
    if (arr[0][i] <= K) {
      answer++;
    }
  }
  return answer;
}
