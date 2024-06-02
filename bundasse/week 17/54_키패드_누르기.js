function solution(numbers, hand) {
    var answer = '';
    let [lhand,rhand] = [10,12]
    for(let i=0; i<numbers.length; i++){
        let h;
        if(numbers[i] == 1 || numbers[i] ==4 || numbers[i] ==7){
            lhand = numbers[i]
            h = 'L'
        }else if(numbers[i] == 3 || numbers[i] == 6 || numbers[i] == 9){
            rhand = numbers[i]
            h = 'R'
        }else{
            let num = numbers[i]
            if(numbers[i] == 0){
                num = 11
            }
            let lengl = Math.abs(lhand - num)
            let lengr = Math.abs(rhand - num)
            lengl = Math.floor(lengl/3)+lengl%3
            lengr = Math.floor(lengr/3)+lengr%3
            if(lengl > lengr){
                h = 'R'
            }else if(lengl < lengr){
                h = 'L'
            }else{
                h = hand.charAt(0).toUpperCase()
            }
            h == 'L' ? lhand=num:rhand=num
        }
        answer += h
    }
    return answer;
}