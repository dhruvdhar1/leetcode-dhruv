class Solution {
    int backtrack(int[] coins, int amount, int[] dp) {
        if(amount == 0) {
            return 0;
        }
        if(amount < 0) return 10001;
        if(dp[amount] != -1) return dp[amount];
        int minCoins = 10001;
        for(int i=0; i<coins.length; i++) {
            if(coins[i] <= amount) {
                int res = backtrack(coins, amount-coins[i], dp);
                minCoins = Math.min(minCoins, 1+res);
            }
        }
        dp[amount] = minCoins;
        return dp[amount];
    }

    public int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount+1];
        for(int i=0; i<dp.length; i++) {
            dp[i] = -1;
        }
        Arrays.sort(coins);
        int res = backtrack(coins, amount, dp);
        return res >= 10001 ? -1 : res;
    }
}