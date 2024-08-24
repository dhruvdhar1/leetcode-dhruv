class Solution {
    int backtrack(int[] nums, int target, int[] dp) {
        if(target == 0) {
            return 1;
        }
        if(dp[target] != -1) return dp[target];
        int maxComb = 0;
        for(int i=0; i<nums.length; i++) {
            if(nums[i] <= target) {
                maxComb += backtrack(nums, target - nums[i], dp);
            } else {
                break;
            }
        }
        dp[target] = maxComb;
        return maxComb;
    }
    public int combinationSum4(int[] nums, int target) {
        Arrays.sort(nums);
        int[] dp = new int[target+1];
        dp[0] = 1;


        for(int i=1; i<=target; i++) {
            for(int j=0; j<nums.length; j++) {
                if(nums[j] <= i) {
                    dp[i] += dp[i - nums[j]];
                }
            }
        }
        return dp[target];
    }
}