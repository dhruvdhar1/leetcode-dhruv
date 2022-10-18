class Solution {
    private int backtrack(int start, int end, int[][] dp) {
        if(start >= end) return 0;
        if(dp[start][end] != -1) return dp[start][end];
        int res = Integer.MAX_VALUE;
        for(int i=start; i<=end; i++) {
            res = Math.min(res, i+Math.max(backtrack(start, i-1, dp), backtrack(i+1, end, dp)));
        }
        dp[start][end] = res;
        return res;
    }
    public int getMoneyAmount(int n) {
        // Map<String, Integer> dp = new HashMap();
        int[][] dp = new int[n+1][n+1];
        for(int i=0; i<dp.length; i++) {
            for(int j=0; j<dp[0].length; j++) {
                dp[i][j] = -1;
            }
        }
        return backtrack(1, n, dp);
    }
}