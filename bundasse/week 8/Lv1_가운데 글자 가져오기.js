function solution(s) {
    let index = Math.floor(s.length/2)
    return s.length%2 === 0 ? s[index-1] + s[index] : s[index]
}