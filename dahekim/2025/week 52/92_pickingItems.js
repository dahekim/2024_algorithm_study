// https://school.programmers.co.kr/learn/courses/30/lessons/87694

function solution(rectangle, characterX, characterY, itemX, itemY) {
    const SIZE = 102;
    const map = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
    
    // 좌표 2배로 확장
    rectangle.forEach(([x1, y1, x2, y2]) => {
        for (let x = x1 * 2; x <= x2 * 2; x++) {
            for (let y = y1 * 2; y <= y2 * 2; y++) {
                // 테두리는 1 내부는 2로 가정
                // 중복 사각형 내부-테두리 처리
                if (x === x1 * 2 || x === x2 * 2 || y === y1 * 2 || y === y2 * 2) {
                    if (map[x][y] !== 2) map[x][y] = 1; // 테두리는 1로 가정
                } else {
                    map[x][y] = 2; // 내부는 2로 가정
                }
            }
        }
    });
    
    // 최단거리 찾기
    const visited = Array.from({ length: SIZE }, () => Array(SIZE).fill(false));
    const queue = [[characterX * 2, characterY * 2, 0]];
    visited[characterX * 2][characterY * 2] = true; // 시작점

    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];

    while (queue.length) {
        const [x, y, dist] = queue.shift();

        if (x === itemX * 2 && y === itemY * 2) {
            return dist / 2;
        }

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if (nx >= 0 && nx < SIZE && ny >= 0 && ny < SIZE && // 범위 내에 있고
                !visited[nx][ny] &&  // 방문안한 좌표이고
                map[nx][ny] === 1) { // 테두리면
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }
}
