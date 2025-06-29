// https://school.programmers.co.kr/learn/courses/30/lessons/12980

function solution(N) {
  let answer = 0;

  while (N > 0) {
    if (N % 2 === 1) {
      answer++; // 홀수면 점프
      N--;       // 한 칸 뒤로
    } else {
      N = N / 2; // 짝수면 순간이동
    }
  }

  return answer;
}
