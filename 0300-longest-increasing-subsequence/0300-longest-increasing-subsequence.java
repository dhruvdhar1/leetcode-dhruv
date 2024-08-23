class Solution {
    int backtrack(int[] nums, int prev, int ind, int[][] dp) {
        if(ind >= nums.length) return 0;
        if(prev !=-1 && dp[prev][ind] != -1) return dp[prev][ind];

        int a = -1;
        int b = -1;
        if(prev == -1 || nums[ind] > nums[prev]) {
            a = Math.max(1 + backtrack(nums, ind, ind+1, dp), backtrack(nums, prev, ind+1, dp));
        } else {
            b = backtrack(nums, prev, ind+1, dp);
        }
        int res = Math.max(a, b);
        if(prev != -1) {
            dp[prev][ind] = res;
        }
        return res;
    }
    public int lengthOfLIS(int[] nums) {
        int[][] dp = new int[nums.length+1][nums.length+1];
        for(int i=0; i<dp.length; i++) {
            for(int j=0; j<dp.length; j++) {
                dp[i][j] = -1;
            }
        }
        return backtrack(nums, -1, 0, dp);
    }
}