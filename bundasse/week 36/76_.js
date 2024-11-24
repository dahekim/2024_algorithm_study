
function solution(p) {
    if(p === '') return '';
    let u, v;
    let idx = 0;
    for(let i=0; i<p.length; i++){
        p[i] === '('? idx++: idx--;
        if(idx === 0){
            u = p.slice(0,i+1)
            v = p.slice(i+1,p.length)
            break;
        }
    }
    let str = ''
    if(u[u.length-1] === ')'){
        return  u += solution(v)
    }else{
        let str = '('+solution(v)+')'
        for(let j=1; j<u.length-1;j++){
            str += u[j] === '('?')':'('
        }
        return str
    }
}