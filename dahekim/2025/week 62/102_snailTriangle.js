// https://school.programmers.co.kr/learn/courses/30/lessons/68645

function solution(n) {
  const answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(new Array(i + 1).fill(0));
  }

  let num = 1;
  let x = -1;
  let y = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (i % 3 === 0) {
        // 아래
        x++;
      } else if (i % 3 === 1) {
        // 오른쪽
        y++;
      } else {
        // 왼쪽
        x--;
        y--;
      }
      answer[x][y] = num++;
    }
  }

  return answer.flat();
}
