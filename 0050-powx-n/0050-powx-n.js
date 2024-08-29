/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const backtrack = (x, n) => {
    if(n === 0) return 1
    if(n === 1) return x
    if(n === 2) return x*x
    if(n%2 === 0) {
        return backtrack(x*x, n/2)
    } else {
        return x * backtrack(x*x, (n-1)/2)
    }
}

var myPow = function(x, n) {
    const res = backtrack(x, Math.abs(n))
    return n<0 ? 1/res : res
};