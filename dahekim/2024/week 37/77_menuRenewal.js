// https://school.programmers.co.kr/learn/courses/30/lessons/72411
function solution(orders, course) {
    let result = []; 

    for (const c of course) {
        const cnt = new Map(); 

        for (const order of orders) {
            const sorted = order.split("").sort();

            // 들어온 주문에서 c개의 메뉴 조합 생성
            getCase(sorted, c).forEach(combination => {
                const key = combination.join("");
                if (cnt.has(key)) {
                    cnt.set(key, cnt.get(key) + 1);
                } else {
                    cnt.set(key, 1);
                }
            });
        }

        const max = Math.max(...cnt.values());
        
        if (max >= 2) {
            for (const [combo, count] of cnt.entries()) {
                if (count === max) {
                    result.push(combo);
                }
            }
        }
    }

    return result.sort();
}

// 가능한 메뉴 조합 만들기
function getCase(arr, length) {
    const result = [];
    if (length === 1) return arr.map(e => [e]);

    arr.forEach((cur, i) => {
        const rest = arr.slice(i + 1);
        const cases = getCase(rest, length - 1);
        const attached = cases.map(c => [cur, ...c]);
        result.push(...attached);
    });

    return result;
}
