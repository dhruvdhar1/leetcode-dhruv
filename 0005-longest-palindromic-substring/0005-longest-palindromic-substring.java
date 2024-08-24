class Solution {
    String getPalindrome(String s, int l, int r) {
        String res = "";
        while(l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {
            res = s.substring(l, r+1);
            l--;
            r++;
        }
        return res;
    }

    public String longestPalindrome(String s) {
        String res = "";
        for(int i=0; i<s.length(); i++) {
            String a = getPalindrome(s, i, i);
            String b = getPalindrome(s, i, i+1);
            String str = a.length() > b.length() ? a : b;
            if(str.length() > res.length()) {
                res = str;
            }
        }
        return res;
    }
}