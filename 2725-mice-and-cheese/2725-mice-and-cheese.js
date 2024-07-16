/**
 * @param {number[]} reward1
 * @param {number[]} reward2
 * @param {number} k
 * @return {number}
 */
var miceAndCheese = function(reward1, reward2, k) {
    let sum = reward2.reduce((acc, curr) => {
        acc += curr
        return acc
    }, 0)
    
    const arr = []
    for(let i=0; i<reward1.length; i++) {
        const val = reward1[i] - reward2[i]
        arr.push(val)
    }
    arr.sort((a, b) => b-a)
    for(let i=0; i<k; i++) {
        sum += arr[i]
    }
    return sum
};