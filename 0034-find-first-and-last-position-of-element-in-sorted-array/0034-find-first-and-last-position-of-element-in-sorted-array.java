class Solution {
    private int firstPos(int[] nums, int target) {
        int l = 0, r = nums.length-1;
        while(l<=r) {
            int mid = l+((r-l)/2);
            if(nums[mid] == target) {
                if(mid>0 && nums[mid-1] != target) {
                    return mid;
                } else if(mid == 0) {
                    return mid;
                } else {
                    r = mid-1;
                }
            } else if(nums[mid] > target) {
                r = mid-1;
            } else {
                l = mid+1;
            }
        }
        return -1;
    }
    
    private int lastPos(int[] nums, int target) {
        int len = nums.length;
        int l = 0, r = len-1;
        while(l<=r) {
            int mid = l+((r-l)/2);
            if(nums[mid] == target) {
                if(mid<len-1 && nums[mid+1] != target) {
                    return mid;
                } else if(mid == len-1) {
                    return mid;
                } else {
                    l = mid+1;
                }
            } else if(nums[mid] > target) {
                r = mid-1;
            } else {
                l = mid+1;
            }
        }
        return -1; //---
    }
    public int[] searchRange(int[] nums, int target) {
        // int[] arr = new int[]{1,2,2,2,2,2,2,2,3};
        
        int ind1 = firstPos(nums, target);
        int ind2 = lastPos(nums, target);
        // System.out.println(ind1);
        // System.out.println(ind2);
        
        return new int[]{ind1,ind2};
    }
}