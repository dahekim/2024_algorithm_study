// https://school.programmers.co.kr/learn/courses/30/lessons/12927

function solution(n, works) {
  let answer = 0;

  works.sort((a, b) => b - a);

  while (n > 0) {
    const max = Math.max(...works);
    if (max === 0) break;

    let idx = works.findIndex((v) => v === max);

    while (max === works[idx] && n > 0) {
      works[idx]--;
      n--;
      idx++;
    }
  }

  return works.filter((v) => v !== 0).reduce((acc, cur) => acc + cur * cur, 0);
}
