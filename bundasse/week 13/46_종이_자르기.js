function solution(M, N) {
    var answer = M*N-1
    return answer;
}

// 왜 M*N-1이 되는지 한참 고민해봤는데
// (M-1) + M*(N-1) = M - 1 + MN - M = MN -1 이 된다는 결론으로!