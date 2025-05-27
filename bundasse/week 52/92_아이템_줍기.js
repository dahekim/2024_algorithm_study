function solution(rectangle, characterX, characterY, itemX, itemY) {
    var answer = 0;
    
    function checkIsOnLine(x,y, rect=undefined) {
        let isOnLine = false;
        for(const sq of rectangle){
            if(x >= sq[0] && x <= sq[2] && y >= sq[1] && y <= sq[3] && !checkIsInRect(x,y)){
            isOnLine = true
            }
        }
        return isOnLine
    }

    function checkIsInRect(x,y) {
        let isInRect = false
        for(const sq of rectangle){
            if(x > sq[0] && x < sq[2] && y > sq[1] && y < sq[3]){
            isInRect = true;
            break;
            }
        }
    return isInRect
    }

    function goItemToGet(curX,curY,count = 0){
        const visited = []
        const queue = []
        const dir = [[0, 0.5], [0, -0.5], [0.5, 0], [-0.5, 0]];

        queue.push([characterX, characterY, 0])
        visited[[characterX, characterY]] = true;

        while(queue.length>0){
            const [curX, curY, curCount] = queue.shift();
            if(curX == itemX && curY == itemY){
                answer = curCount/2;
                break;
            }
            for(let j=0; j<dir.length; j++){
                const [nextX, nextY] = [curX+dir[j][0], curY+dir[j][1]];
                if(!visited[[nextX, nextY]] && checkIsOnLine(nextX, nextY)){
                    visited[[nextX, nextY]] = true;
                    queue.push([nextX, nextY, curCount+1]);
                }
            }
        }
    }
    
    goItemToGet(characterX, characterY);

    return answer;
}