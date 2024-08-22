class Solution {
    public int maxProfit(int[] prices) {
        int l=0, r=1;
        int totalP = 0;
        while(r < prices.length) {
            if(prices[r] > prices[l]) {
                totalP += prices[r] - prices[l];
            }
            l = r;
            r = r+1;
        }
        return totalP;
    }
}