class Solution {
    boolean backtrack(String s, int l, int r, boolean canSkip) {
        if(r <= l) return true;

        if(s.charAt(l) == s.charAt(r)) {
            return backtrack(s, l+1, r-1, canSkip);
        } else {
            if(canSkip) {
                return backtrack(s, l+1, r, false) || backtrack(s, l, r-1, false);
            } else {
                return false;
            }
        }
    }
    public boolean validPalindrome(String s) {
        return backtrack(s, 0, s.length()-1, true);
    }
}