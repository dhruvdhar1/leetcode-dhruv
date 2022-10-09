class Solution {
    public int lengthOfLongestSubstring(String s) {
        Set<Character> set = new HashSet();
        int res = 0;
        int len = s.length();
        int l=0, r=0;
        while(r < len) {
            char ch = s.charAt(r);
            if(set.contains(ch)) {
                while(set.contains(ch)) {
                    set.remove(s.charAt(l++));
                }
            } else {
                res = Math.max(res, r-l+1);
            }
            set.add(ch);
            r++;
        }
        return res;
    }
    
}