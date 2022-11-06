class Solution {
    public boolean increasingTriplet(int[] nums) {
        int len = nums.length;
        int[] leftMin = new int[len];
        int[] rightMax = new int[len];
        
        for(int i=0; i<len; i++) {
            if(i == 0) {
                leftMin[i] = nums[i];
            } else {
                leftMin[i] = Math.min(leftMin[i-1], nums[i]);
            }
        }
        
        for(int i=len-1; i>=0; i--) {
            if(i == len-1) {
                rightMax[i] = nums[i];
            } else {
                rightMax[i] = Math.max(rightMax[i+1], nums[i]);
            }
        }
        
        for(int i=1; i<len-1; i++) {
            if(leftMin[i] < nums[i] && rightMax[i] > nums[i]) return true;
        }
        return false;
    }
}