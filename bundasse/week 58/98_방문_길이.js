function solution(dirs) {
    const control = {
        U:[0,1],
        D:[0,-1],
        R:[1,0],
        L:[-1,0]
    }
    let arr = dirs.split("")
    let location = [0,0]
    let route = new Set()
    arr.forEach(dir => {
        let newX = location[0]+control[dir][0]
        let newY = location[1]+control[dir][1]
        if(newX <= 5 && newX >= -5 && newY <=5 && newY >= -5){
            route.add(`${location[0]}${newX}${location[1]}${newY}`)
            route.add(`${newX}${location[0]}${newY}${location[1]}`)
            location = [newX, newY]
        }
    })
    return route.size/2;
}