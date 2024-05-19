function solution(id_pw, db) {
    var answer = '';
    const [id,pw] = id_pw
    let filtered = db.filter(e =>  id === e[0])
    console.log(filtered)
    if(filtered.length>0){
        filtered[0][1] == pw ? answer = "login" : answer = "wrong pw"
    }else{
        answer = "fail"
    }
    return answer;
}