function solution(friends, gifts) {
    var answer = 0;
//     points : 선물지수, sendRecords:주고받은 기록, presents: 받을 선물갯수
    let record = {};
    let presents = {}
    friends.forEach(e => {
        record[e] = {point:0, users:{}};
        presents[e] = 0;
    })
    for(const key in record){
        friends.forEach(e =>{
            if(e !== key){
             record[key].users[e] = 0;   
            }
        })
    }
    gifts.forEach(e => {
        let [suser, guser] = e.split(" ");
        record[suser].point += 1;
        record[guser].point -= 1;
        record[suser].users[guser] += 1;
    })
    for(const key in record){
        let obj = record[key].users;
        for(const k in obj){
            if(obj[k]>0){
//             선물을 주고받은 이력이 있음
                if(record[k].users[key] != obj[k]){
//                     선물 주고받은 수가 다름
                    if(obj[k]>record[k].users[key]){
                       presents[key] +=1 ;
                    }
                }else{
                    if(record[k].point > record[key].point){
                        presents[k] += 1;
                    }
                }
            }else if(obj[k] == 0 && record[k].users[key] == 0){
//              선물을 주고받은 적 없음
                if(record[key].point > record[k].point){
                    presents[key] += 1;
                }
            }
        }
    }
    for(const user in presents){
        if(presents[user] > answer){
         answer = presents[user]   
        }
    }
    return answer;
}