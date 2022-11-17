class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> res = new ArrayList();
        Set<String> set = new HashSet();
        for(int i=0; i<nums.length-2; i++) {
            int l = i+1;
            int r = nums.length-1;
            
            while(l<r) {
                int sum = nums[i] + nums[l] + nums[r];
                if(sum == 0) {
                    List<Integer> triplet = new ArrayList();
                    triplet.add(nums[i]);
                    triplet.add(nums[l]);
                    triplet.add(nums[r]);
                    Collections.sort(triplet);
                    String tStr = triplet.toString();
                    if(!set.contains(tStr)) {
                        res.add(triplet);
                        set.add(tStr);
                    }
                    l++;
                    while(nums[l] == nums[l-1] && l < r) l++;
                } else if(sum > 0) {
                    r--;
                } else {
                    l++;
                }
            }
        }
        return res;
    }
}