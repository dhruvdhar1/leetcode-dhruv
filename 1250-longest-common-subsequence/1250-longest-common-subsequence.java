class Solution {
    int backtrack(String text1, String text2, int ind1, int ind2, int[][] dp) {
        if(ind1 >= text1.length() || ind2 >= text2.length()) {
            return 0;
        }
        if(dp[ind1][ind2] != -1) return dp[ind1][ind2];

        int a = -1;
        int b = -1;
        if(text1.charAt(ind1) == text2.charAt(ind2)) {
            a = 1 + backtrack(text1, text2, ind1+1, ind2+1, dp);
        }  else {
            b = Math.max (
                backtrack(text1, text2, ind1+1, ind2, dp),
                backtrack(text1, text2, ind1, ind2+1, dp));
        }
        dp[ind1][ind2] = Math.max(a, b);
        return dp[ind1][ind2];
    }
    public int longestCommonSubsequence(String text1, String text2) {
        //TC: O(N * M)
        //SC: O(N * M)
        int[][] dp = new int[text1.length()+1][text2.length()+1];
        
        // for(int i=1; i<=text1.length(); i++) {
        //     for(int j=1; j<=text2.length(); j++) {
        //         if(text1.charAt(i-1) == text2.charAt(j-1)) {
        //             dp[i][j] = 1 + dp[i-1][j-1];
        //         } else {
        //             dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]);
        //         }
        //     }
        // }

        for(int i=text1.length()-1; i>=0; i--) {
            for(int j=text2.length()-1; j>=0; j--) {
                if(text1.charAt(i) == text2.charAt(j)) {
                    dp[i][j] = 1 + dp[i+1][j+1];
                } else {
                    dp[i][j] = Math.max(dp[i+1][j],dp[i][j+1]);
                }
            }
        }

        // System.out.println("arr: "+ Arrays.toString(dp[0]));
        // return dp[text1.length()][text2.length()];
        return dp[0][0];
    }
}