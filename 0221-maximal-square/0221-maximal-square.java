class Solution {
    public int maximalSquare(char[][] matrix) {
        int m = matrix.length;
        int n = matrix[0].length;
        int[][] dp = new int[m+1][n+1];
        
        for(int i=1; i<=m; i++) {
            for(int j=1; j<=n; j++) {
                dp[i][j] = matrix[i-1][j-1] == '1' ? 1 : 0;
            }
        }
        
        for(int i=m; i>=1; i--) {
            for(int j=n; j>=1; j--) {
                if(dp[i][j] > 0) {
                    int top = dp[i-1][j];
                    int left = dp[i][j-1];
                    int diagnol = dp[i-1][j-1];
                    
                    if(top > 0 && left > 0 && diagnol > 0) {
                        int min = Math.min(top, Math.min(left, dp[i][j]));
                        dp[i-1][j-1] = min + 1;
                    }
                }
            }
        }
        
        int max = -1;
        for(int i=1; i<=m; i++) {
            for(int j=1; j<=n; j++) {
                // System.out.print(dp[i][j] + " ");
                max = Math.max(max, dp[i][j]);
            }
            // System.out.println();
        }
        return max*max;
    }
}