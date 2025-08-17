function solution(n) {
    var answer = [];
    let array = Array.from({length:n}, () => { return new Array(n).fill(null)})
    let num = 1;
    let [row,col] = [-1,0]
    for(let i=0; i<n; i++){
        for(let j=i; j<n; j++){
            if(i%3 == 0) row += 1;
            if(i%3 == 1) col += 1;
            if(i%3 == 2){
                row -= 1;
                col -= 1;
            }
        array[row][col] = num;
        num++;
        }
    }
    array.forEach(arr => {
        let filtered = arr.filter(e => e !== null)
        answer.push(...filtered)
    })
    return answer;
}