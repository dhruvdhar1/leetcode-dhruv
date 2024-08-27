/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */

const backtrack = (prices, fee, i, canBuy, dp) => {
    //base case
    if(i >= prices.length) {
        return 0;
    }
    const key = `${i}:${canBuy}`

    if(dp.has(key)) return dp.get(key)

    if(canBuy) {
        const profit = Math.max(
            -prices[i] + backtrack(prices, fee, i+1, false, dp),
            backtrack(prices, fee, i+1, canBuy, dp),
        )
        dp.set(key, profit)
    } else {
        const profit = Math.max(
            prices[i] - fee + backtrack(prices, fee, i+1, true, dp),
            backtrack(prices, fee, i+1, canBuy, dp),
        )
        dp.set(key, profit)
    }
    return dp.get(key)
}

var maxProfit = function(prices, fee) {
    // TC: O(2 * n) = O(n)
    // const dp = new Map()
    // return backtrack(prices, fee, 0, true, dp);

    let lastBuy = 0, lastSell = 0;
    let currBuy = 0, currSell = 0;
    // const dp = new Array(prices.length+1)
    // for(let i=0; i<dp.length; i++) {
    //     dp[i] = [0,0]
    // }
    for(let i=prices.length-1; i>=0; i--) {
        for(let j=0; j<=1; j++) {
            let profit = Number.MIN_SAFE_INTEGER;
            if(j === 1) {
                profit = Math.max((-prices[i] + lastBuy), lastSell)
                currSell = profit
            } else {
                profit = Math.max((prices[i] - fee + lastSell), lastBuy)
                currBuy = profit
            }
        }
        lastBuy = currBuy
        lastSell = currSell
    }
    return currSell;
};