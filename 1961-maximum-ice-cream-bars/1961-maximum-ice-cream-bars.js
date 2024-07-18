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
    // console.log("bbb: ", bucket)
    let count = 0
    let i=1
    while(i < bucket.length) {
        const buy = Math.min(bucket[i], parseInt(coins/i))
        // console.log(i, "buy: ", buy)
        count += buy
        coins -= (buy*i)
        i++
    }
    return count
};