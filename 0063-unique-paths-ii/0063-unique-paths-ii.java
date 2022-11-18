class Solution {
    private int dfs(int[][] grid, int m, int n, int i, int j, int[][] dp) {
        
        if(i<0 ||j<0 || i>=m || j>=n || grid[i][j] == 1) return 0;
        if(i == m-1 && j == n-1) return 1;
        
        if(dp[i][j] != 0) return dp[i][j];
        
        int d = dfs(grid, m, n, i+1, j, dp);
        int l = dfs(grid, m, n, i, j+1, dp);
        dp[i][j] = d+l;
        return d+l;
    }
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        int m = obstacleGrid.length;
        int n = obstacleGrid[0].length;
        int[][] dp = new int[m+1][n+1];
        return dfs(obstacleGrid, m, n, 0, 0, dp);
    }
}