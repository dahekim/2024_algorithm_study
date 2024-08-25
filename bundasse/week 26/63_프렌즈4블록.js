function solution(m, n, board) {
    var answer = 0;
    function find(y, x, bo){
        let dIndexs = []
        for(let r=0; r<y-1; r++){
            for(let c=0; c<x-1; c++){
                if(bo[r][c] != 0
                   && bo[r][c] == bo[r][c+1]
                   && bo[r][c] == bo[r+1][c]
                   && bo[r][c] == bo[r+1][c+1]
                  ){
                    let arr = [[r,c],[r+1,c],[r,c+1],[r+1,c+1]]
                    arr.forEach(e => {
                        let exist = dIndexs.some((el) => {
                            let [x1,y1] = e
                            let [x2,y2] = el
                            return x1==x2 && y1==y2
                        })
                        if(!exist){
                             dIndexs.push(e)   
                        }
                    })
                }
            }
        }
    return dIndexs
    }

    function changeBoard(a, bo){
        a.forEach(item => {
            const [r,c] = item
            bo[r] = bo[r].slice(0,c) + '0' + bo[r].slice(c+1,n)
        })
        
        for(let r=m-1; r>0; r--){
            if(bo[r].includes('0')){
                for(let c=0; c<n; c++){
                    if(bo[r][c]== '0'){
                         for(let k=r-1; k>=0; k--){
                            if(bo[k][c] != '0'){
                                let num = bo[k][c]
                                bo[r] = bo[r].slice(0,c) + num + bo[r].slice(c+1,n)
                                bo[k] = bo[k].slice(0,c) + '0' + bo[k].slice(c+1,n)
                                break;
                            }
                        }   
                    }   
                }   
            }
        }
        
        return bo
    }
    
    let arr = []
    arr = find(m, n, board)
    answer += arr.length
    let boardChanged = changeBoard(arr,board)
    while(arr.length >0){
        arr = find(m,n,boardChanged)
        answer += arr.length
        boardChanged = changeBoard(arr,boardChanged)
    }
    return answer;
}

