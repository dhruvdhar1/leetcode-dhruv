/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n === 0) return false
    if(n === 1) return true
    const power = Math.log(n)/Math.log(2)
    console.log(Math.floor(power), " : ", Math.ceil(power))
    return Math.floor(power.toFixed(10)) === Math.ceil(power.toFixed(10))
};