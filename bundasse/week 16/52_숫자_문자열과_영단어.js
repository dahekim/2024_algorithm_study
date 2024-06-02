function solution(s) {
    let arr = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    arr.forEach((e,i) => {
        s = s.replaceAll(e,i)
    })
    // 배열수가 많지 않아 forEach하며 인덱스로 처리
    return parseInt(s);
}