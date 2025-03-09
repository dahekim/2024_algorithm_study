function solution(maps) {
    var n = maps.length; 
    var m = maps[0].length;
    var dir = [[-1, 0], [1, 0], [0, -1], [0, 1]]; 

    // bfs
    var bfs = () => {
        var queue = [[0, 0, 1]];
        maps[0][0] = 0;

        while (queue.length > 0) {
            var [row, col, distance] = queue.shift();

            if (row == n - 1 && col == m - 1) {
                return distance;
            }

            for (var [r, c] of dir) {
                var newRow = row + r;
                var newCol = col + c;  
                if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < m && maps[newRow][newCol] === 1) {
                    queue.push([newRow, newCol, distance + 1]);
                    maps[newRow][newCol] = 0;
                }
            }
        }
        return -1;
    };
    return bfs();
}

// 안풀린 오답. 뭐가 문제인지 나중에 체크해보기
// function solution(maps) {
//     var answer = 0;
//     const n = maps.length
//     const m = maps[0].length
    
//     const d = [[0,1],[0,-1],[-1,0],[1,0]]
    
//     let queue = []
//     queue.push([0,0,1])
//     maps[0,0] = 0
//     while(queue.length){
//         let [x, y, distance] = queue.shift();
//         if (y === n - 1 && x === m - 1) return distance;
//         for (let [dx,dy] of d) {
//             let newY = y + dy;
//             let newX = x + dx;
//             if(newY >= 0 && newY < n && newX >= 0 && newX < m){
//                 if(maps[newY][newX] === 1) {
//                     queue.push([newY, newX, distance + 1]);
//                     maps[newY][newX] = 0;
//                 }    
//             }
//         }
//     }
//     return -1
// }