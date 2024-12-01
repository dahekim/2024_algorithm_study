function solution(orders, course) {
    let answer = [];
    const combination = (array, pick) => {
        const result = [];
        if (pick === 1) {
            return array;
        }
        array.forEach((fix, index, origin) => {
            const rest = origin.slice(index + 1);
            const smallC= combination(rest, pick - 1);
            const combinations = smallC.map((el) => [fix, ...el]);
            result.push(...combinations);
        });
        return result;
    };

    course.forEach((el) => {
        const count = {};
        orders.forEach((order) => {
            combination(order.split(""), el).map((el) => {
                const elToString = el.sort().join("");
                count[elToString] = count[elToString] + 1 || 1;
            });
        });
        const tempArray = Object.entries(count)
            .filter((el) => el[1] >= 2)
            .sort((a, b) => b[1] - a[1]);
        const gCount = tempArray[0]?.[1];
        answer.push(...tempArray.filter((el) => el[1] === gCount));
    });
    return answer.map((el) => el[0]).sort();
}