function solution(record) {
    var answer = [];
    let user = {};
    let rec = []
    record.forEach(str => {
        let [act,id,name] = str.split(" ")
        if(act == 'Enter' || act == 'Change'){
            user[id] = name   
        }
        if(act != 'Change'){
            let obj = {act:act,id:id}
            rec.push(obj)
        }
    })
    rec.forEach(item => {
        let s = user[item.id]+ '님이 '
        s += item.act == 'Enter' ? '들어왔습니다.': '나갔습니다.'
        answer.push(s)
    })
    return answer;
}