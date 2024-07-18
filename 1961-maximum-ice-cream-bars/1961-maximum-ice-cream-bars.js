/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    const maxCost = Math.max(...costs)
    const bucket = new Array(maxCost+1).fill(0)
    for(let i=0; i<costs.length; i++) {
        bucket[costs[i]]++
    }
    let count = 0
    let i=1
    while(i < bucket.length) {
        const buy = Math.min(bucket[i], Math.trunc(coins/i))
        count += buy
        coins -= (buy*i)
        i++
    }
    return count
};