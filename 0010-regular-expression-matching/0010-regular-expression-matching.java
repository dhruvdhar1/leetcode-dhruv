class Solution {
    boolean backtrack(String s, String p, int i, int j, Boolean[][] dp) {
        if(i >= s.length() && j >= p.length()) return true;
        if(j >= p.length()) return false;

        if(dp[i][j] != null) return dp[i][j];

        if(j+1 < p.length() && p.charAt(j+1) == '*') {
            if(i < s.length() && (s.charAt(i) == p.charAt(j) || p.charAt(j) == '.')) {
                dp[i][j] = backtrack(s, p, i+1, j, dp) || backtrack(s, p, i, j+2, dp);
            } else {
                dp[i][j] = backtrack(s, p, i, j+2, dp);
            }
        } else if(i < s.length() && (s.charAt(i) == p.charAt(j) || p.charAt(j) == '.')) {
            dp[i][j] = backtrack(s, p, i+1, j+1, dp);
        } else {
            dp[i][j] = false;
        }
        return dp[i][j];
    }
    public boolean isMatch(String s, String p) {
        Boolean[][] dp = new Boolean[s.length()+1][p.length()+1];
        return backtrack(s, p, 0, 0, dp);
    }
}