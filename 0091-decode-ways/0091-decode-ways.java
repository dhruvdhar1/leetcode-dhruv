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
        for(int i=0; i<dp.length; i++) {
            if(i >= s.length()) {
                dp[i] = 1;
            }
        }

        for(int i=s.length()-1; i>=0; i--) {
            int a=0, b=0;
            if(i+1 <= s.length()) {
                String substr1 = s.substring(i, i+1);
                if(!substr1.equals("0")) {
                    a = dp[i+1];
                }
            }
            if(i+2 <= s.length()) {
                String substr2 = s.substring(i, i+2);
                if(substr2.charAt(0) != '0' && Integer.parseInt(substr2) <= 26) {
                    b = dp[i+2];
                }
            }
            dp[i] = a+b;
        }

        return dp[0];
    }
}