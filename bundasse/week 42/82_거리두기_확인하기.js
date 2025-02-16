function checkSG(p,x,y){
    let dx = [-1, 0, 1, 0]
    let dy = [0, -1, 0, 1]
//     상하좌우 좌표체크용
    for(let k=0; k<4; k++){
        let posX = x + dx[k]
        let posY = y + dy[k]
        if((0<=posX&& posX<5) && (0<=posY && posY<5)){
            if(p[posX][posY] == 'P'){
//             바로 상/하/좌/우에 사람 있으면 false
                return false
            }else if(p[posX][posY] == 'O'){
//             테이블 있을 경우 테이블 기준으로 다시 체크
                for(let l=0; l<4; l++){
                    let newPosX = posX+ dx[l]   
                    let newPosY = posY+ dy[l]
                    if((0<=newPosX&& newPosX<5) && (0<=newPosX && newPosX<5)){
                        if((newPosX != x || newPosY != y) && p[newPosX][newPosY]== 'P'){
//                             테이블 기준으로 체크한 곳이 원점좌표가 아님 & 그런데 사람이 있으면 false
                            return false
                        }
                    }
                }
            }
        }
    }
    return true
}

function solution(places) {
    var answer = [];
    places.forEach(p => {
        let isOk = 1
        for(let i=0; i<5; i++){
            for(let j=0; j<5; j++){
//                 사람있어요
                if(p[i][j] == 'P'){
//                     거리두기 깨지면 0체크
                    if(!checkSG(p,i,j)){
                        isOk = 0;
                        break;
                    }
                }
            }
            if(isOk == 0){
                break;
            }
        }
        answer.push(isOk)
    })

    return answer;
}