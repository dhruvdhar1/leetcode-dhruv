class Solution {
    Map<Integer, List<Integer>> map;

    public Solution(int[] nums) {
        this.map = new HashMap();
        for(int i=0; i<nums.length; i++) {
            if(!map.containsKey(nums[i])) {
                map.put(nums[i], new ArrayList());
            }
            map.get(nums[i]).add(i);
        }
    }
    
    public int pick(int target) {
        List<Integer> arr = map.get(target);
        int rand = (int) Math.floor(Math.random() * arr.size());
        return arr.get(rand);
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(nums);
 * int param_1 = obj.pick(target);
 */