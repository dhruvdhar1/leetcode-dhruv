/**
    [10,9,2,5,3,7,101,18]
    
    [3,5,6,2,5,4,19,5,6,7,12]

    [2, 4, 5, 6, 7, 12]

        lr
    [2, 5, 6]
 */
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
            // System.out.println("arr: "+ temp.toString());
            int num = nums[i];
            if(num > temp.get(temp.size()-1)) {
                temp.add(num);
            } else {
                int ind = getLowerBound(temp, num);
                // System.out.println("ind: "+ ind);
                temp.set(ind, num);
            }
        }
        return temp.size();
    }
}