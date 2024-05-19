function solution(n, arr1, arr2) {
    var answer = [];
    function transTo2(val){
        let s = val.toString(2)
        if(s.length < n){
            return s.padStart(n,'0')
        }
        return s
    }
//     이진수 맵 만들기
    let map1 = []
    let map2 = []
    for(let i=0; i<n; i++){
        map1[i] = transTo2(arr1[i])
        map2[i] = transTo2(arr2[i])
    }
    map1.forEach((e,i) => {
        let word = ''
        let f = map2[i]
        for(let j=0; j<n; j++){
            if(e[j] === '0' && f[j] === '0'){
                word += ' '
            }else{
                word += '#'
            }
        }
        answer[i] = word
    })
    return answer;
}