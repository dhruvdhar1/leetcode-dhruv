class Solution {
    public int threeSumClosest(int[] nums, int target) {
        int diff = Integer.MAX_VALUE;
        int closestSum = -1;
        Arrays.sort(nums);
        
        for(int i=0; i<nums.length-2; i++) {
            int l = i+1;
            int r = nums.length-1;
            
            while(l < r) {
                int sum = nums[i] + nums[l] + nums[r];
                if(sum == target) return sum;
                else {
                    int tempDiff = Math.abs(sum-target);
                    if(tempDiff < diff) {
                        diff = tempDiff;
                        closestSum = sum;
                    }
                    
                    if(sum < target) {
                        l++;
                    } else {
                        r--;
                    }
                }
            }
        }
        return closestSum;
    }
}