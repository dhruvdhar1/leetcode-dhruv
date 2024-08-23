class Solution {
    public int backtrack(int[] prices, int ind, boolean canBuy, int[][] dp) {
        if(ind >= prices.length) {
            return 0;
        }
        int yInd = canBuy ? 0 : 1;
        if(dp[ind][yInd] != -1) {
            return dp[ind][yInd];
        }
        if(canBuy) {
            int max = Math.max(-prices[ind] + backtrack(prices, ind+1, false, dp), backtrack(prices, ind+1, true, dp));
            dp[ind][yInd] = max;
            return max;
        } else {
            int max = Math.max(prices[ind] + backtrack(prices, ind+1, true, dp), backtrack(prices, ind+1, false, dp));
            dp[ind][yInd] = max;
            return max;
        }
    }
    public int maxProfit(int[] prices) {
        int[][] dp = new int[prices.length+1][2];
        for(int i=0; i<dp.length; i++) {
            for(int j=0; j<2; j++) {
                dp[i][j] = -1;
            }
        }
        return backtrack(prices, 0, true, dp);
    }
}