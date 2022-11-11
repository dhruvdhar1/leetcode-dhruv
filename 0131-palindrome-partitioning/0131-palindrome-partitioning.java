class Solution {
    private boolean isPalindrome(String str) {
        StringBuilder sb = new StringBuilder(str);
        boolean res = sb.toString().equals(sb.reverse().toString());
        return res;
    }
    private void backtrack(String s, int ind, List<String> set, List<List<String>> res) {
        
        if(ind == s.length()) {
            List<String> copy = new ArrayList(set);
            res.add(copy);
            return;
        }
        
        for(int i=ind+1; i<=s.length(); i++) {
            String subStr = s.substring(ind, i);
            if(isPalindrome(subStr)) {
                set.add(subStr);
                backtrack(s, i, set, res);
                set.remove(set.size()-1);
            }
        }
    }
    
    public List<List<String>> partition(String s) {
        List<List<String>> res = new ArrayList();
        List<String> set = new ArrayList();
        backtrack(s, 0, set, res);
        return res;
    }
}