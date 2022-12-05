class Solution {
    public int search(int[] nums, int target) {
        int len = nums.length;
        int l=0, r = len-1;
        
        while(l<r) {
            int mid = l+(r-l)/2;
            if(nums[mid] == target) return mid;
            else if(nums[l] <= nums[mid]) {
                if(nums[l] > nums[r]) {
                    if(target >= nums[l] && target < nums[mid]) {
                        r = mid-1;
                    } else {
                        l = mid+1;
                    }
                } else {
                    if(target > nums[mid] && target <= nums[r]) {
                        l = mid+1;
                    } else {
                        r = mid-1;
                    }
                }
            } else {
                if(target > nums[mid] && target <= nums[r]) {
                    l = mid+1;
                } else {
                    r = mid-1;
                }
            }
        }
        return nums[l] == target ? l : -1;
    }
}

// [4,5,6,7,0,1,2]