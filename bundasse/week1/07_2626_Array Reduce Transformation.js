var reduce = function(nums, fn, init) {
    let accum = init
nums.forEach((e,i)=>{
    fn(accum,e)
    accum = fn(accum,e)
})
return accum
};

/*
문제를 해독하느라 좀 걸렸다...
fn의 accum이 이전 결과값. curr은 nums 배열 순서대로 들어간다.
nums를 기준으로 forEach 반복문을 돌리고 fn을 시행한 다음, 다음 accum값을 fn의 결과값으로 넣어주었다.
최종 결과물만 리턴하면 되므로 반복문이 끝난 후에 accum을 return.
*/

// 런타임 속도를 개선해보려고 이건 5번이나 재제출했다.
var reduce = function(nums, fn, init) {
    for(let i=0; i<nums.length; i++){
        init = fn(init, nums[i])
    }
    return init
};
/*
의외로 forEach보다 for문을 돌린게 더 빨랐음... forEach가 좀 더 세련됐다고 생각했거늘...
여기선 런타임 줄이기를 위해 그냥 init값 자체를 바꿔버리게 만들었는데 실제 직무에서 이런 코드 짜야한다면
init값과 별개로 accum 같은 변수를 짜서 돌리는게 더 좋을 것 같다.
함수가 초기 init값을 따로 유지해야하는 형태로 바뀔지도 모르니까.
*/
