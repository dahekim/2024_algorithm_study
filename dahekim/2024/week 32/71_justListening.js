// https://school.programmers.co.kr/learn/courses/30/lessons/17683

function solution(m, musicinfos) {
    let answer = "(None)";
    let maxTime = 0;     

    // 멜로디 변환 (# 제거 및 대문자 소문자 변환)
    const convertNote = (melody) => {
        return melody.replace(/C#/g, 'c').replace(/D#/g, 'd').replace(/F#/g, 'f').replace(/G#/g, 'g').replace(/A#/g, 'a').replace(/B#/g, 'b');
    };


    m = convertNote(m);  
    for (const info of musicinfos) {
        let sheetResult = '';
        const convertedSheet = convertNote(sheet);      

        const [startTime, endTime, title, sheet] = info.split(',');        
        const [startH, startM] = startTime.split(':').map(Number);
        const [endH, endM] = endTime.split(':').map(Number);
        const playTime = (endH * 60 + endM) - (startH * 60 + startM);
        
        const count = Math.ceil(playTime / convertedSheet.length);
        
        for (let i = 0; i < count ; i++) {
            sheetResult += convertedSheet;
        }
        
        sheetResult = sheetResult.slice(0, playTime);
        
        if (sheetResult.includes(m)) {
            if (playTime > maxTime) {
                maxTime = playTime;
                answer = title;
            }
        }
    }
    
    return answer;
}
