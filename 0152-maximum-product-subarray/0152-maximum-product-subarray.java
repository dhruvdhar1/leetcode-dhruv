class Solution {
    public int maxProduct(int[] nums) {
        int min = nums[0];
        int max = nums[0];
        int res = nums[0];
        for(int i=1; i<nums.length; i++) {
            int minEl = Math.min(nums[i], Math.min(nums[i]*min, nums[i] * max));
            int maxEl = Math.max(nums[i], Math.max(nums[i]*min, nums[i] * max));
            min = minEl;
            max = maxEl;
            res = Math.max(res, max);
        }
        return res;
    }
}