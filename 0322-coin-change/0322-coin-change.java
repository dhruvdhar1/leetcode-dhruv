class Solution {
    private int backtrack(int currAmount, int[] coins, int amount, int[] dp) {
        if(currAmount > amount) return -1;
        if(currAmount == amount) return 0;
        
        if(dp[currAmount] != 0) return dp[currAmount];
        
        int res = 100000001;
        for(int i=coins.length-1; i>=0; i--) {
            if(coins[i] <= amount && currAmount+coins[i] <= amount) {
                int temp = backtrack(currAmount+coins[i], coins, amount, dp);
                if(temp >= 0) {
                    res = Math.min(res, 1+temp);
                }
            }
        }
        return dp[currAmount] = (res == 100000001) ? -1 : res;
        
    }
    public int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount+1];
        Arrays.sort(coins);
        return backtrack(0, coins, amount, dp);
    }
}