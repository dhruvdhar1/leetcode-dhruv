class Solution {
    private boolean backtrack(String s, String p, int sInd, int pInd) {
        // System.out.println("sInd : "+ sInd + " - pInd: " + pInd);
        if(pInd == p.length()) return sInd == s.length();
        
        
        if(pInd+1 < p.length() && p.charAt(pInd+1) == '*') {
            return sInd < s.length() && (p.charAt(pInd) == s.charAt(sInd) || p.charAt(pInd)  == '.') && 
                        backtrack(s, p, sInd+1, pInd) || backtrack(s, p, sInd, pInd+2);
        } else if (sInd < s.length() && p.charAt(pInd) == '.') {
            return backtrack(s, p, sInd+1, pInd+1);
        } else {
            if(sInd < s.length() && p.charAt(pInd) == s.charAt(sInd)) {
                return backtrack(s, p, sInd+1, pInd+1);
            } else {
                return false;
            }
        }
    }
    public boolean isMatch(String s, String p) {
        return backtrack(s, p, 0, 0);
    }
}