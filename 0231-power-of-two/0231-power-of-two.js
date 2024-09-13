/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n === 0) return false
    if(n === 1) return true
    const power = Math.log2(n)
    return power%1 === 0
};