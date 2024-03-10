/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let answer = []
    for(let i = 0 ; i<arr.length ; i+=size){
      answer.push(arr.slice(i, size+i))
    }
    return answer
  };
  