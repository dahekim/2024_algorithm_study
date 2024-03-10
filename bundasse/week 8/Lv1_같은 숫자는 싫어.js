function solution(arr)
{
    let answer = arr.filter((e, i) => e !== arr[i-1])
    return answer;
}