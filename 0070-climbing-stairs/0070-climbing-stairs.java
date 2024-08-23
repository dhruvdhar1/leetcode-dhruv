class Solution {
    int backtrack(int n, int[] dp) {
        if(n == 0) return 1;
        if(n < 0) return 0;
        if(dp[n] != -1) return dp[n];
        dp[n] = backtrack(n-1, dp) + backtrack(n-2, dp);
        return dp[n];
    }
    public int climbStairs(int n) {
        int[] dp = new int[n+1];
        for(int i=0; i<dp.length; i++) {
            dp[i] = -1;
        }
        return backtrack(n, dp);
    }
}