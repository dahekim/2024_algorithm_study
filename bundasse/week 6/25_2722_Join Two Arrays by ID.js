/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let joinedArray = arr1;
    arr2.forEach(e => {
        if(joinedArray.some(x => x.id === e.id&&true)){
            const keys = Object.keys(e)
            const index = joinedArray.findIndex(el => el.id == e.id)
            keys.forEach(key => {
                joinedArray[index][key] = e[key]
            })
        }else{
            joinedArray.push(e)
        }
    })
    return joinedArray
};