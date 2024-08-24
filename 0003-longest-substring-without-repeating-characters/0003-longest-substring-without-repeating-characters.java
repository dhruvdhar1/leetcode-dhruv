class Solution {
    public int lengthOfLongestSubstring(String s) {
        Set<Character> set = new HashSet();
        int maxlen = 0;
        int l=0, r=0;

        while(r < s.length()) {
            char ch = s.charAt(r);
            if(set.contains(ch)) {
                set.remove(s.charAt(l));
                l++;
                // set = new HashSet();
            } else {
                set.add(ch);
                maxlen = Math.max(maxlen, r-l+1);
                r++;
            }
        }
        return maxlen;
    }
}