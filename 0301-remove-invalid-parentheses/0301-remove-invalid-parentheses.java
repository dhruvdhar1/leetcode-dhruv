class Solution {
    private void backtrack(int len, int open, int close, int minLength, String curr, String s,
                                int ind, Set<String> list) {
        if(close > open) return;
        if(ind >= len) {
            if(open == close) {
                if(curr.length() == minLength) {
                    // System.out.println("Add: " + curr);
                    list.add(curr);
                }
            }
            // System.out.println("skip: " + curr);
            return;
        }
        if(s.charAt(ind) == '(') {
            String newStr = new StringBuilder(curr).append('(').toString();
            backtrack(len, open+1, close, minLength, newStr, s, ind+1, list);
            backtrack(len, open, close, minLength, curr, s, ind+1, list);
        } else if (s.charAt(ind) == ')') {
            String newStr = new StringBuilder(curr).append(')').toString();
            backtrack(len, open, close+1, minLength, newStr, s, ind+1, list);
            backtrack(len, open, close, minLength, curr, s, ind+1, list);
        } else {
            String newStr = new StringBuilder(curr).append(s.charAt(ind)).toString();
            backtrack(len, open, close, minLength, newStr, s, ind+1, list);
        }
    }
    public List<String> removeInvalidParentheses(String s) {
        int minToRemove = 0;
        int opening = 0;
        int closing = 0;
        int len = s.length();
        Stack<Character> stk = new Stack();
        
        for(int i=0; i<len; i++) {
            char ch = s.charAt(i);
            if(ch != '(' && ch !=')') continue;
            if(stk.size() == 0) {
                stk.add(ch);
            } else {
                char peek = stk.peek();
                if(peek == '(' && ch == ')') stk.pop();
                else {
                    stk.add(ch);
                }
            }
        }
        // System.out.println("min remove: " + stk.size());
        minToRemove = stk.size();
        Set<String> res = new HashSet();
        backtrack(len, 0, 0, len-minToRemove, "", s, 0, res);
        if(res.size() == 0) {
            res.add("");
        }
        return new ArrayList(res);
    }
}