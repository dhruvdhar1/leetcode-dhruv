class Solution {
    public int minimumDeletions(String s) {
        int aCount = 0;
        int bCount = 0;
        
        for(int i=0; i<s.length(); i++) {
            char ch = s.charAt(i);
            if(ch == 'a') aCount++;
            else bCount++;
        }
        
        int a_left = 0, b_left = 0;
        int a_right = aCount, b_right = bCount;
        int res = b_left+a_right;
        for(int i=0; i<s.length(); i++) {
            if(s.charAt(i) == 'a') {
                a_left++;
                a_right--;
            } else {
                b_left++;
                b_right--;
            }
            res = Math.min(res, b_left+a_right);
        }
        return res;
    }
}