/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l=0, r=1
    let maxP = 0

    for(let i=0; i<prices.length; i++) {
        if(prices[r] - prices[l] > 0) {
            maxP = Math.max(maxP, prices[r] - prices[l])
            r++
        } else {
            l = r
            r = r + 1
        }
    }
    return maxP

};