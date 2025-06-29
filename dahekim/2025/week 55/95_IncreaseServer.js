// https://school.programmers.co.kr/learn/courses/30/lessons/389479?language=javascript

function solution(players, m, k) {
  const queue = []; // [만료시각, 서버 개수]
  let cur = 0; // 현재 서버 수
  let answer = 0;

  for (let time = 0; time < 24; time++) {
    // 만료된 서버 제거
    while (queue.length > 0 && queue[0][0] === time) {
      cur -= queue.shift()[1];
    }

    // 필요한 서버 수 계산
    const required = Math.floor(players[time] / m);

    // 부족한 서버 수만큼 증설
    if (cur < required) {
      const add = required - cur;
      cur += add;
      answer += add;
      queue.push([time + k, add]); // 증설된 서버는 time + k에 만료
    }
  }

  return answer;
}
function solution(players, m, k) {
  const queue = []; // [만료시각, 서버 개수]
  let cur = 0; // 현재 서버 수
  let answer = 0;

  for (let time = 0; time < 24; time++) {
    // 만료된 서버 제거
    while (queue.length > 0 && queue[0][0] === time) {
      cur -= queue.shift()[1];
    }

    // 필요한 서버 수 계산
    const required = Math.floor(players[time] / m);

    // 부족한 서버 수만큼 증설
    if (cur < required) {
      const add = required - cur;
      cur += add;
      answer += add;
      queue.push([time + k, add]); // 증설된 서버는 time + k에 만료
    }
  }

  return answer;
}
