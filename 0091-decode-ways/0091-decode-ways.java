class Solution {
    int backtrack(String s, int ind, int[] dp) {
        if(ind >= s.length()) return 1;

        if(dp[ind] != -1) return dp[ind];
        int a = 0, b=0;
        if(ind+1 <= s.length()) {
            String substr1 = s.substring(ind, ind+1);
            if(!substr1.equals("0")) {
                a = backtrack(s, ind+1, dp);
            }
        }
        if(ind+2 <= s.length()) {
            String substr2 = s.substring(ind, ind+2);
            if(substr2.charAt(0) != '0' && Integer.parseInt(substr2) <= 26) {
                b = backtrack(s, ind+2, dp);
            }
        }
        dp[ind] = a+b;
        return dp[ind];
    }
    public int numDecodings(String s) {
        int[] dp = new int[s.length()+1];
        Arrays.fill(dp, -1);
        return backtrack(s, 0, dp);
    }
}