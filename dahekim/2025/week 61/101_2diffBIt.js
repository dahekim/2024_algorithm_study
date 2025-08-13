// https://school.programmers.co.kr/learn/courses/30/lessons/77885
function solution(numbers) {
  const answer = [];

  for (let i = 0; i < numbers.length; i++) {
    let n = numbers[i];

    if (n % 2 === 0) {
      answer.push(n + 1);
    } else {
      let bit = 1n;
      let num = BigInt(n);

      while (num & bit) {
        bit <<= 1n;
      }

      let result = num + bit - (bit >> 1n);
      answer.push(Number(result));
    }
  }
  return answer;
}
