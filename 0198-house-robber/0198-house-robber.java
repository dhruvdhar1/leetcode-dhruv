class Solution {
    int backtrack(int[] nums, int ind, int[] dp) {
        if(ind >= nums.length) return 0;

        if(dp[ind] != -1) return dp[ind];
        int a = nums[ind] + backtrack(nums, ind+2, dp);
        int b = backtrack(nums, ind+1, dp);
        dp[ind] = Math.max(a, b);
        return dp[ind];
    }
    public int rob(int[] nums) {
        int[] dp = new int[nums.length+1];
        for(int i=0; i<dp.length; i++) {
            dp[i] = -1;
        }
        return backtrack(nums, 0, dp);
    }
}