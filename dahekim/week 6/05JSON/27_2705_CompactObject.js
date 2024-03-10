// https://leetcode.com/problems/compact-object/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    let result = {};
    if (typeof obj !== 'object' || obj === null) {
        return obj; 
    }

    if (Array.isArray(obj)) {
        return obj.filter(value => Boolean(value)).map(compactObject);
    }

    for (const id in obj){
        let value = compactObject(obj[id]);
        if (value) result[id] = value;
    }
    return result;
};