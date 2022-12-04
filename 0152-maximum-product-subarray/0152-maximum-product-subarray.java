class Solution {
    public int maxProduct(int[] nums) {
        int min = nums[0];
        int max = nums[0];
        int ans = nums[0];
        
        for(int i=1; i<nums.length; i++) {
            int tempMin = Math.min(nums[i], Math.min(nums[i]*min, nums[i]*max));
            int tempMax = Math.max(nums[i], Math.max(nums[i]*max, nums[i]*min));
            ans = Math.max(ans, Math.max(tempMin, tempMax));
            min=tempMin;
            max=tempMax;
        }
        return ans;
    }
}

//[-2,3,-2,4]

//ans= 3

//min= -12

//max= 3