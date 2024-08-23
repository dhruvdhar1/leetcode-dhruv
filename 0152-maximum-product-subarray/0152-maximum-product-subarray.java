class Solution {
    public int maxProduct(int[] nums) {
        int[] min = new int[nums.length];
        int[] max = new int[nums.length];
        min[0] = nums[0];
        max[0] = nums[0];
        
        for(int i=1; i<nums.length; i++) {
            int minEl = Math.min(nums[i], Math.min(nums[i]*min[i-1], nums[i] * max[i-1]));
            int maxEl = Math.max(nums[i], Math.max(nums[i]*min[i-1], nums[i] * max[i-1]));
            min[i] = minEl;
            max[i] = maxEl;
        }
        int res = max[0];
        for(int i=1; i<max.length; i++) {
            res = Math.max(res, max[i]);
        }
        return res;
    }
}