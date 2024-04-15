// https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw, db) {
    const [id, pw] = id_pw;
    
    const user = db.find(e => e[0] === id);
    
    return user ? (user[1] === pw ? "login" 
                                  : "wrong pw") 
                : "fail";
}
