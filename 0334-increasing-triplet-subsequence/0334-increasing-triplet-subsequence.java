class Solution {
    public boolean increasingTriplet(int[] nums) {
        int len = nums.length;
        int l = Integer.MAX_VALUE;
        int r = Integer.MAX_VALUE;
        for(int i=0; i<len; i++) {
            if(nums[i] <= l) l = nums[i];
            else if(nums[i] <= r) r = nums[i];
            else return true;
        }
        return false;
    }
}