class Solution {
    
    private int backtrack(int i, int j, int k, int r, int c, int[][] apples, int[][][] dp) {
        if(apples[i][j] < k) return 0;
        if(k==1) {
            if(apples[i][j] >= 1) return 1;
            return 0;
        }
        if(dp[i][j][k] != -1) return dp[i][j][k];
        long res = 0;
        for(int h=i+1; h<r; h++) {
            if(apples[i][j] - apples[h][j] >= 1 && apples[h][j] >= 1) {
                res += backtrack(h, j, k-1, r, c, apples, dp);
            }
        }
        
        for(int v=j+1; v<c; v++) {
            if(apples[i][j] - apples[i][v] >= 1 && apples[i][v] >= 1) {
                res += backtrack(i, v, k-1, r, c, apples, dp);
            }
        }
        dp[i][j][k] = (int)(res % (long)(Math.pow(10,9)+7));
        return dp[i][j][k];
    }
    public int ways(String[] pizza, int k) {
        int r = pizza.length;
        int c = pizza[0].length();
        
        int[][][] dp = new int[r+1][c+1][k+1];
        for(int i=0; i<r+1; i++) {
            for(int j=0; j<c+1; j++) {
                for(int m=0; m<k+1; m++) {
                    dp[i][j][m] = -1;
                }
            }
        }
        
        int[][] apples = new int[r+1][c+1];
        for(int i=r-1; i>=0; i--) {
            for(int j=c-1; j>=0; j--) {
                apples[i][j] = apples[i+1][j] + apples[i][j+1] - apples[i+1][j+1] + (pizza[i].charAt(j) == 'A' ? 1 : 0);
            }
        }
        
        return backtrack(0, 0, k, r, c, apples, dp);
    }
}