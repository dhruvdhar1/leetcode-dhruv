class Solution {
    int getLowerBound(List<Integer> temp, int num) {
        int l=0, r=temp.size()-1;
        while(l < r) {
            int mid = l + (r-l)/2;
            if(num == temp.get(mid)) {
                return mid;
            } else if (num > temp.get(mid)) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        return r;
    }
    public int lengthOfLIS(int[] nums) {
        List<Integer> temp = new ArrayList();
        temp.add(nums[0]);
        for(int i=1; i<nums.length; i++) {
            int num = nums[i];
            if(num > temp.get(temp.size()-1)) {
                temp.add(num);
            } else {
                int ind = getLowerBound(temp, num);
                temp.set(ind, num);
            }
        }
        return temp.size();
    }
}