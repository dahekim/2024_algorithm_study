function solution(n)
{
    var ans = 0;
    let l = n.toString(2)
    for(let i=0; i<l.length; i++){
        ans += Number(l[i])
    }
    return ans;
}