// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
    let answer = 0;      // 터진 인형 갯수
    const box = [];   // 인형을 순서대로 담을 바구니
    
    for (let m = 0; m < moves.length; m++) {
        let move = moves[m];
        let chk = false;
        
        for (let l = 0; l < board.length; l++) {
            const doll = board[l][move - 1];

            if (chk === false) {
                if (doll !== 0) {
                    board[l][move - 1] = 0;                    
                    
                    // 같은 인형인지 확인
                    if (box[box.length - 1] === doll) {
                        box.splice((box.length - 1), 1);
                        answer += 2;
                    } else {
                        box.push(doll);
                    }
                    chk = true;
                }
            }
        }
    }
    return answer;
}
