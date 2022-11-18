class Solution {
    public int jump(int[] nums) {
        if(nums.length == 1) return 0;
        Integer[] dp = new Integer[nums.length];
        return backtrack(nums, 0, 0, dp, nums.length);
    }
    
    private int backtrack(int[] nums, int ind, int dist, Integer[] dp, int len) {
        if(ind == len-1) {
            return dist;
        }
        
        if(dp[ind] != null) {
            return dp[ind]+dist;
        }
        int res = Integer.MAX_VALUE;
        for(int i=1; i<=nums[ind]; i++) {
            if(ind+i < len) {
                res = Math.min(res, backtrack(nums, ind+i, dist+1, dp, len));
            }
        }
        dp[ind] = res-dist;
        return res;
    }
}