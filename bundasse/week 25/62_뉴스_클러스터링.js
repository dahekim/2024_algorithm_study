function solution(str1, str2) {
    var answer = 0;
    let arr1 = makeArr(str1);
    let arr2 = makeArr(str2);
    let gyozip = [];
    let hapzip = [...arr1];
    let tmp = [...arr1]
    arr2.forEach(e =>{
        let idx = tmp.indexOf(e)
        if(idx == -1){
            hapzip.push(e)
        }else{
            tmp.splice(idx,1)
        }
    })
    arr1.forEach(e =>{
        let idx = arr2.indexOf(e)
        if(idx != -1){
            arr2.splice(idx,1)
            gyozip.push(e)
        }
    })
    if(gyozip.length == 0 && hapzip.length == 0){
        answer = 65536
    }else if(gyozip.length == 0 ){
        answer = 0
    }else{
        let g = gyozip.length
        let h = hapzip.length
        answer = Math.floor((g/h)*65536)
    }
    return answer;
}

function makeArr(str){
    let arr = []
    let regex = /[a-zA-Z]/
    str.split("").reduce((acc,curr,idx)=>{
        let before = str[(idx-1)]
        let t1 = regex.test(curr)
        let t2 = regex.test(before)
        if(t1 && t2){
            arr.push(before.toUpperCase()+curr.toUpperCase())            
        }
    })
    return arr
}