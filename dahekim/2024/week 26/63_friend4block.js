// https://school.programmers.co.kr/learn/courses/30/lessons/17679

function solution(m, n, board) {
    let answer = 0;
    board = board.map(row => row.split(''));
    while (true) {
        const tmp = check(m, n, board);
        if (tmp === 0) break;
        answer += tmp;
    }
    return answer;
}

function check(m, n, board) {
    let count = 0;
    const filter = Array.from({ length: m }, () => Array(n).fill(0));    

    // 삭제 가능한 블록 체크
    for (let i = 0; i < m - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
            const a = board[i][j];
            const b = board[i][j + 1];
            const c = board[i + 1][j];
            const d = board[i + 1][j + 1];
            if ( a !== '0' && a === b && b === c && c === d ) {
                filter[i][j] = 1;
                filter[i][j + 1] = 1;
                filter[i + 1][j] = 1;
                filter[i + 1][j + 1] = 1;

            }
        }
    }
    // 값이 1로 되어있으면 지워진 블록 갯수값 증가시키고 0으로 초기화
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (filter[i][j] === 1) {
                board[i][j] = '0';
                count++;
            }
        }
    }
    if (count === 0) return 0;
    // 블록 아래로 떨어뜨리기
    for (let i = m - 2; i >= 0; i--) {
        for (let j = 0; j < n; j++) {
            let k = i; // 현재 행            
            // 어디까지 떨어지나
            while (k + 1 < m // 현재 행이 마지막 행 넘지 않음
                   && board[k + 1][j] === '0') { // 바로 아래칸이 빈칸임
                k++;
            }            
                        if (k !== i) {
                // 아래로 떨어짐
                board[k][j] = board[i][j];
                board[i][j] = '0';
            }
        }
    }
    return count;
}

