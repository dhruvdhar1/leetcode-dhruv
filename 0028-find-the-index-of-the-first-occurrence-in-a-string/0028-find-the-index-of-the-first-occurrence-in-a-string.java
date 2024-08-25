class Solution {
    public int strStr(String haystack, String needle) {
        if(needle.length() > haystack.length()) return -1;
        for(int i=0; i<haystack.length(); i++) {
            if(haystack.charAt(i) == needle.charAt(0) 
                && i+needle.length() <= haystack.length()
                && haystack.substring(i, i+needle.length()).equals(needle)) {
                    return i;
                }
        }
        return -1;
    }
}