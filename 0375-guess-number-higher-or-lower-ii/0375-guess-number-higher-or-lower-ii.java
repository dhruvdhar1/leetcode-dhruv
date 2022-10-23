class Solution {
    
    private int backtrack(int start, int end, int cost, int[][] dp) {
        if(start>=end) return 0;
        if(dp[start][end] != -1) return dp[start][end];
        
        int min = Integer.MAX_VALUE;
        for(int i=start; i<=end; i++) {
            // System.out.println("iiiiiii : "+i);
            min = Math.min(min, i+Math.max(backtrack(start, i-1, cost+i, dp), backtrack(i+1, end, cost+i, dp)));
            // System.out.println("minmmmmmm : "+min);
        }
        dp[start][end] = min;
        return min;
    }
    public int getMoneyAmount(int n) {
        int[][] dp = new int[n+1][n+1];
        for(int i=0; i<n+1;i++) {
            for(int j=0; j<n+1;j++) {
                dp[i][j] = -1;
            }
        }
        return backtrack(1, n, 0, dp);
    }
}