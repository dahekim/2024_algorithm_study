// https://school.programmers.co.kr/learn/courses/30/lessons/49994?language=javascript

function solution(dirs) {
    const visited = new Set();
    const moves = {
        U: [0, 1],
        D: [0, -1],
        R: [1, 0],
        L: [-1, 0],
    };

    let x = 0;
    let y = 0;

    for (const dir of dirs) {
        const [dx, dy] = moves[dir];
        const nx = x + dx;
        const ny = y + dy;

        if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;

        const path = `${x},${y},${nx},${ny}`;
        const reverse = `${nx},${ny},${x},${y}`;
        visited.add(path);
        visited.add(reverse);

        // 위치 갱신
        x = nx;
        y = ny;
    }
    
    return visited.size / 2;
}
