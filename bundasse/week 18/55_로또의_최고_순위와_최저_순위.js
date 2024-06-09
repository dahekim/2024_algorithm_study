function solution(lottos, win_nums) {
    let best;
    let worst;
    let matches = 0;
    let lost = 0;
//     일치하는 숫자 수 확인
    lottos.forEach(e => {
        if(e === 0){
            lost++
        }else if(win_nums.indexOf(e) !== -1){
            matches++
        }
    })
//     최고순위
    matches+lost == 0? best = 6 : best = 7-(matches+lost)
//     최저순위
    matches == 0 ? worst = 6 : worst = 7-matches
    return [best,worst]
}