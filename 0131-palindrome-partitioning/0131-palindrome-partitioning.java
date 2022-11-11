class Solution {
    private boolean isPalindrome(String str) {
        StringBuilder sb = new StringBuilder(str);
        boolean res = sb.toString().equals(sb.reverse().toString());
        // System.out.println("-------palindrome " + str + " : " + res);
        return res;
    }
    private void backtrack(String s, int ind, String curr, List<String> set, List<List<String>> res) {
        
        if(ind == s.length()) {
            List<String> copy = new ArrayList(set);
            // System.out.println(">>>>>> " + copy);
            res.add(copy);
            return;
        }
        
        for(int i=ind+1; i<=s.length(); i++) {
            String subStr = s.substring(ind, i);
            // System.out.println("-------substr " + subStr);
            if(isPalindrome(subStr)) {
                set.add(subStr);
                // System.out.println("-------set " + set.toString());
                backtrack(s, i, subStr, set, res);
                set.remove(set.size()-1);
            }
        }
    }
    
    public List<List<String>> partition(String s) {
        List<List<String>> res = new ArrayList();
        List<String> set = new ArrayList();
        backtrack(s, 0, "", set, res);
        return res;
    }
}