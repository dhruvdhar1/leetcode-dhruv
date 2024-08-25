class Solution {
    public int removeDuplicates(int[] nums) {
        int l=0, r = 1;
        while(r < nums.length) {
            while(r < nums.length && nums[r] == nums[l]) {
                r++;
            }
            if(r < nums.length) {
                nums[l+1] = nums[r];
                l++;
            }
        }
        // System.out.println("l: "+ l);
        return l+1;
    }
}