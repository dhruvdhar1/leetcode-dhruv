class Solution {
    int backtrack(int m, int n, int i, int j, int[][] dp) {
        if(i == m-1 && j == n-1) return 1;
        String key = new StringBuilder().append(i).append(":").append(j).toString();
        if(i < 0 || i >= m || j < 0 || j >= n) return 0;

        if(dp[i][j] != 0) return dp[i][j];
        int r = backtrack(m, n, i, j+1, dp);
        int d = backtrack(m, n, i+1, j, dp);
        dp[i][j] = r+d;
        return dp[i][j];
    }
    
    public int uniquePaths(int m, int n) {
        int [][] dp = new int[m+1][n+1];
        return backtrack(m, n, 0, 0, dp);
    }
}