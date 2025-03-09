// https://school.programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps) {
    const m = maps[0].length; // 가로
    const n = maps.length; // 세로
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]; 
    const queue = [[0, 0, 1]]; 

    while (queue.length > 0) {
        const [x, y, visited] = queue.shift(); // 현재 위치

        if (x === n - 1 && y === m - 1) return visited;

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

             // 맵 안에 있고 + 벽이 아니고 + 방문하지 않은 곳이면 이동
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
                queue.push([nx, ny, visited + 1]); // 이동 거리 증가
                maps[nx][ny] = 0;
            }
        }
    }

    return -1; 
}
