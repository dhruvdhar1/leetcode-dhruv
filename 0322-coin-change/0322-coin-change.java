class Solution {
    private int backtrack(int[] coins, int amount, int numCoins, int[] dp) {
        if(amount == 0) {
            return 0;
        }
        if(dp[amount] != 0) {
            return dp[amount];
        }
        
        int minCoins = Integer.MAX_VALUE;
        for(int i=coins.length-1; i>=0; i--) {
            if(coins[i] <= amount) {
                int res = backtrack(coins, amount-coins[i], numCoins+1, dp);
                if(res < minCoins && res != -1) {
                    minCoins = 1+res;
                }
            }
        }
        dp[amount] = (minCoins == Integer.MAX_VALUE) ? -1 : minCoins;
        return dp[amount];
    }
    public int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount+1];
        Arrays.sort(coins);
        return backtrack(coins, amount, 0, dp);
    }
}