function solution(board, moves) {
    var answer = 0;
    let arr = []
    // 이차원배열을 돌리는 부분
    // pop을 활용하기 위해 각 크레인줄(세로)의 밑에서부터 인형 순서를 배치했다. 인형이 없는 0은 필터.
    let board2 = []
    let board3 = []
    for(let j=0; j<board.length; j++){
        board2.push([])
        board3.push([])
        }
    for(let i=board.length-1; i>=0; i--){
        for(let j=0; j<board.length; j++){
            board2[j][i] = board[i][j]
        }
    }
    board2.forEach((e,i) => {
        board3[i] = [...e].filter(item => item != 0).reverse()
    })

    // 인형뽑기 파트
    moves.forEach(e => {
        let pop = board3[e-1].pop()
        if(pop != undefined){
            arr.push(pop)
            if(arr[arr.length-1] == arr[arr.length-2]){
                arr.splice(arr.length - 2)
                answer +=2
                // 한 번 터질때 인형 2개씩 나가므로 +=2해야함
            }
        }
    })    
    return answer;
}