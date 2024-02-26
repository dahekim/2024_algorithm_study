// https://leetcode.com/problems/array-prototype-last/?envType=study-plan-v2&envId=30-days-of-javascript


/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    return this.length === 0 ? -1 : this[this.length -1];
};
