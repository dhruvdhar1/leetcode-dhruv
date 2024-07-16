/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    const maxCost = Math.max(...costs)
    const bucket = new Array(maxCost+1).fill(0)
    let ans = 0
    for(let i=0; i<costs.length; i++) {
        const cost = costs[i]
        bucket[cost]++
    }
    // console.log("bbb: ", bucket)
    for(let i=0; i<bucket.length; i++) {
        if(bucket[i] === 0) continue

        const maxSpend = Number.parseInt(coins/i)
        const minRequired = Math.min(bucket[i], maxSpend)
        // console.log(maxSpend, " : ", minRequired)
        if(coins < i*minRequired) return ans
        ans += minRequired
        coins -= i*minRequired
    }
    return ans
};