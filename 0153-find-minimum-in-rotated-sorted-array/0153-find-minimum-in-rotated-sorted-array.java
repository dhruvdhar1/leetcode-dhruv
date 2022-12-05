class Solution {
    public int findMin(int[] nums) {
        int len = nums.length;
        int l=0, r = len-1;
        
        while(l<r) {
            int mid = l + ((r-l)/2);
            
            if(mid > 0 && nums[mid-1] > nums[mid]) return nums[mid];
            
            else if(nums[l] <= nums[mid]) {
                if(nums[l] > nums[r]) {
                    l = mid+1;
                } else {
                    r = mid-1;
                }
            } else {
                r = mid-1;
            }
        }
        return nums[l];
    }
}

//[5,1,2,3,4]

//[4,5,1,2,3]

//[3,4,5,1,2]

//[2,3,4,5,1]

//[1,2,3,4,5]