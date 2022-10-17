class Solution {
    public int maxProfit(int[] prices) {
        int l = 0, r = 1;
        int maxP = 0;
        while(r < prices.length) {
            if(prices[l] > prices[r]) {
                l = r;
                r = l+1;
            } else {
                int delta = prices[r]-prices[l];
                maxP += delta;
                l=r;
                r=l+1;
            }
        }
        return maxP;
    }
}