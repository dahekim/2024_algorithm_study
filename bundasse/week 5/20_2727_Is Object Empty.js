/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(typeof obj == 'array'){
        return obj.length === 0 ? true : false
    }else{
        return Object.keys(obj).length === 0? true : false
    }
    
};