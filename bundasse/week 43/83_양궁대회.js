const getComb = (arr, n, depth, sum) => {
  // arr:배열 / n:화살수 / depth:몇번째인지 / sum:쓴 화살수
    const result = [];
  
    if (depth === 10) return [[...arr, n - sum]];
  
    for (let i = 0; i <= n - sum; i++) {
      if (i + sum > n) break;
      const temp = getComb([...arr, i], n, depth + 1, sum + i);
      result.push(...temp);
    }
    return result;
  };
  const checkScore = (pArr, lArr) => {
    let pS = 0;
    let lS = 0;
  
    for (let i = 0; i < pArr.length; i++) {
      if (pArr[i] === 0 && lArr[i] === 0) continue;
      if (pArr[i] >= lArr[i]) pS += (10 - i);
      else lS += (10 - i);
    }
    return lS - pS;
  };
  
  const getLastNonZero = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] !== 0) return i;
    }
    return null;
  };
  
  function solution (n, info) {
    // n: 총 화살수 / info:어피치 점수획득
    let answer = [];
    let sub = 0;
    // n발의 화살로 쏠 수 있는 모든 패턴 구하기
    const test = getComb([], n, 0, 0);
  
    for (let i = 0; i < test.length; i++) {
        // 라이언이 어피치보다 몇 점 높은지 계산
      const scoreSub = checkScore(info, test[i]);
      if (scoreSub <= 0) continue;
      if (scoreSub > sub) {
        answer = test[i];
        sub = scoreSub;
      }
      else if (scoreSub === sub) {
        const pN = getLastNonZero(answer);
        const nN = getLastNonZero(test[i]);
        // 가장 낮은점수 수 리턴
        if (pN < nN) answer = test[i];
        else if (pN === nN && answer[pN] < test[i][nN]) answer = test[i];
      }
    }
    return answer.length > 0 ? answer : [-1];
  };