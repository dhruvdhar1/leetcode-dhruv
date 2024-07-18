/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set()
    while(n !== 1) {
        const sumOfSq = calcSUmOfSq(n)
        // console.log("---> ", sumOfSq)
        if(sumOfSq !== 1 && set.has(sumOfSq)) {
            return false
        }
        set.add(sumOfSq)
        n = sumOfSq
    }
    return true
};

function calcSUmOfSq(n) {
    let sum = 0
    while(n > 0) {
        const digit = n%10
        sum += digit*digit
        n = parseInt(n/10)
    }
    return sum
}