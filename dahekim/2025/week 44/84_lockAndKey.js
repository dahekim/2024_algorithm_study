// https://school.programmers.co.kr/learn/courses/30/lessons/60059

function rotate90(matrix) {
    const M = matrix.length;
    const rotated = Array.from({ length: M }, () => Array(M).fill(0));

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < M; j++) {
            rotated[j][M - 1 - i] = matrix[i][j]; // 90도 회전
        }
    }
    return rotated;
}


// 자물쇠가 다 채워졌는지 확인
function check(newLock, N, M) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (newLock[M + i][M + j] !== 1) return false; 
        }
    }
    return true;
}

function solution(key, lock) {
    const M = key.length;
    const N = lock.length;
    
    const newSize = N + 2 * M;
    const newLock = Array.from({ length: newSize }, () => Array(newSize).fill(0));

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            newLock[M + i][M + j] = lock[i][j]; // 자물쇠를 중앙에 배치 
        }
    }

    for (let r = 0; r < 4; r++) {
        key = rotate90(key);

        for (let x = 0; x < N + M; x++) {
            for (let y = 0; y < N + M; y++) {
                for (let i = 0; i < M; i++) {
                    for (let j = 0; j < M; j++) {
                        newLock[x + i][y + j] += key[i][j];
                    }
                }

                if (check(newLock, N, M)) return true;

                for (let i = 0; i < M; i++) {
                    for (let j = 0; j < M; j++) {
                        newLock[x + i][y + j] -= key[i][j];
                    }
                }
            }
        }
    }

    return false;
}
