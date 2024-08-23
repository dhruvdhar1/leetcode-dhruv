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
        if(nums.length == 1) return nums[0];
        int[] dp = new int[nums.length+2];
        
        Arrays.fill(dp, -1);
        int[] arr1 = Arrays.copyOfRange(nums, 0, nums.length-1);
        int[] arr2 = Arrays.copyOfRange(nums, 1, nums.length);
        int res1 = backtrack(arr1, 0, dp);
        
        Arrays.fill(dp, -1);
        int res2 = backtrack(arr2, 0, dp);
        return Math.max(res1, res2);
    }
}