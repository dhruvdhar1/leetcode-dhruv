class Solution {
    boolean backtrack(String s, int l, int r, int k) {
        if(r <= l) return true;

        if(s.charAt(l) == s.charAt(r)) {
            return backtrack(s, l+1, r-1, k);
        } else {
            if(k > 0) {
                return backtrack(s, l+1, r, k-1) || backtrack(s, l, r-1, k-1);
            } else {
                return false;
            }
        }
    }
    public boolean validPalindrome(String s) {
        return backtrack(s, 0, s.length()-1, 1);
    }
}