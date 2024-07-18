/**
 * @param {number[]} reward1
 * @param {number[]} reward2
 * @param {number} k
 * @return {number}
 */
var miceAndCheese = function(reward1, reward2, k) {
    const arr = []
    let res = reward2.reduce((acc, curr) => {
        acc += curr
        return acc
    }, 0)
    for(let i=0; i<reward1.length; i++) {
        const diff = reward1[i] - reward2[i]
        arr.push(diff)
    }
    arr.sort((a, b) => a-b)

    while(k-- > 0) {
        res += arr.pop()
    }
    return res
};