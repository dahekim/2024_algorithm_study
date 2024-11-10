// https://school.programmers.co.kr/learn/courses/30/lessons/150368

function solution(users, emoticons) {
    const discounts = [0.1, 0.2, 0.3, 0.4]; 
    let maxUsers = 0; // 최대 서비스 가입자 수
    let maxSales = 0; // 최대 매출액
    let len = emoticons.length;
    
    function getCase(i, cases) {        
        if (i === len) {
            cal(cases);
            return;
        }
        for (let d of discounts) {
            cases[i] = d;
            getCase(i + 1, cases);
        }
    }

    function cal(cases) {
        let curUsers = 0;
        let curSales = 0;

        for (let [userDiscount, userPrice] of users) {
            let total = 0;
            // 각 이모티콘마다 할인율 적용
            for (let i = 0; i < len; i++) {
                const result = emoticons[i] * (1 - cases[i]); // 할인 적용된 가격                
                // 할인조건에 맞으면 이모티콘 구매
                if (cases[i] * 100 >= userDiscount) {
                    total += result;
                }
            }
            // 구매 금액이 유저 기준가격을 초과하면 서비스에 가입
            if (total >= userPrice) {
                curUsers++;
            } else {
                curSales += total;
            }
        }
        
        if (curUsers > maxUsers || 
            (curUsers === maxUsers && curSales > maxSales)) {
            maxUsers = curUsers;
            maxSales = curSales;
        }
    }
    
    getCase(0, Array(len).fill(0));

    return [maxUsers, Math.floor(maxSales)];
}
