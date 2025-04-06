// https://school.programmers.co.kr/learn/courses/30/lessons/43164

function solution(tickets) {
    const answer = [];
    const routes = {};


    for (let [from, to] of tickets) {
        if (!routes[from]) routes[from] = [];
        routes[from].push(to);
    }


    for (let from in routes) {
        routes[from].sort();
    }

    function dfs(cur) {
        const arrList = routes[cur];
        while (arrList && arrList.length > 0) {
            const next = arrList.shift(); 
            dfs(next);
        }
        answer.push(cur); 
    }

    dfs("ICN");

    return answer.reverse(); 
}
