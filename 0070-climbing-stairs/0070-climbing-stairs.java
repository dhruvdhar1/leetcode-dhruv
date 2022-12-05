class Solution {
    private int backtrack(int step, int n, int[] dp) {
        if(step == n) return 1;
        if(step > n) return 0;
        if(dp[step] != 0) return dp[step];
        
        int res = backtrack(step+1, n, dp) + backtrack(step+2, n, dp);
        return dp[step] = res;
    }
    public int climbStairs(int n) {
        int[] dp = new int[n+1];
        return backtrack(0, n, dp);
    }
}