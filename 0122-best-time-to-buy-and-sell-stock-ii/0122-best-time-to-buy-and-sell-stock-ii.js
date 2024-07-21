/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l=0, r=1
    let p = 0
    while(r < prices.length) {
        if(prices[r] < prices[l]) {
            l=r
            r=l+1
        } else {
            p += (prices[r]-prices[l])
            l++
            r++
        }
    }
    return p
};