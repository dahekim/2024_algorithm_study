
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
function solution(m, musicinfos) {
    var answer = '(None)';
    let answerArr = []
    let m2 = m.replace(/(C#)/g,'c')
            .replace(/(D#)/g,'d')
            .replace(/(F#)/g,'f')
            .replace(/(G#)/g,'g')
            .replace(/(A#)/g,'a')
            .replace(/(B#)/g,'b'); 
    for(let idx = 0; idx<musicinfos.length; idx++){
                let [startt,endt,title,melody] = musicinfos[idx].split(",");
        let [sh,sm] = startt.split(":");
        let [eh,em] = endt.split(":");
        let time = (Number(em)-Number(sm)) + (Number(eh)-Number(sh))*60;
        let str = ''
        let melody2 = melody.replace(/(C#)/g,'c')
            .replace(/(D#)/g,'d')
            .replace(/(F#)/g,'f')
            .replace(/(G#)/g,'g')
            .replace(/(A#)/g,'a')
            .replace(/(B#)/g,'b'); 
        for(let i=0; i<Math.floor(time/melody2.length); i++){
            str+= melody2
        }
        str += melody2.slice(0,time%melody2.length)
        if(str.includes(m2)){
            answerArr.push({
                time:time,
                sort:idx,
                title:title
            })
        }
    }
    if(answerArr.length > 1){
        answerArr.sort((a,b) =>{
           return b.time-a.time == 0 ? a.sort-b.sort : b.time-a.time 
        })
        answer = answerArr[0].title
    }else if(answerArr.length >0){
        answer = answerArr[0].title
    }
    return answer;
}