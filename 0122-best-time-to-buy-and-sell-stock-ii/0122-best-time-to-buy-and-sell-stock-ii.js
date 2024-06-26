/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxP = 0
    for(let i=1; i<prices.length; i++) {
        if(prices[i] - prices[i-1] > 0) {
            maxP += prices[i] - prices[i-1]
        }
    }
    return maxP
};