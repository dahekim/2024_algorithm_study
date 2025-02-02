// https://school.programmers.co.kr/learn/courses/30/lessons/81302

function solution(places) {
    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1], // 상하좌우
        [-1, -1], [-1, 1], [1, -1], [1, 1], // 대각선
        [-2, 0], [2, 0], [0, -2], [0, 2] // 두 칸 거리
    ];
    
    function isSafe(place) {
        let persons = [];

        // 응시자 위치 탐색
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (place[i][j] === 'P') {
                    persons.push([i, j]);
                }
            }
        }
        
        
        for (let [x, y] of persons) {
            // 거리 확인
            for (let [dx, dy] of directions) {
                let nx = x + dx;
                let ny = y + dy;
                if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue; 
                
                if (place[nx][ny] === 'P') {
                    if (Math.abs(dx) + Math.abs(dy) === 1) return 0;
                    
                  
                    if (Math.abs(dx) + Math.abs(dy) === 2) {
                        if (dx === 0) { // 가로로 2칸 떨어진 경우
                            if (place[x][(y + ny) / 2] !== 'X') return 0;
                        } else if (dy === 0) { // 세로로 2칸 떨어진 경우
                            if (place[(x + nx) / 2][y] !== 'X') return 0;
                        } else { // 대각선인 경우 (양쪽 다 파티션)
                            if (place[x][ny] !== 'X' || place[nx][y] !== 'X') return 0;
                        }
                    }
                }
            }
        }
        return 1;
    }
    
    return places.map(isSafe);
}
