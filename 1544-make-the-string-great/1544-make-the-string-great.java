class Solution {
    public String makeGood(String s) {
        System.out.println('z'-'Z');
        Stack<Character> stk = new Stack();
        int len = s.length();
        for(int i=0; i<len; i++) {
            char peek = stk.size() > 0 ? stk.peek() : ' ';
            char ch = s.charAt(i);
            int diff = Math.abs((int)(ch - peek));
            if(diff == 32) {
                stk.pop();
            } else {
                stk.add(ch);
            }
        }
        // System.out.println(stk.toString());
        StringBuilder sb = new StringBuilder();
        while(!stk.isEmpty()) {
            sb.append(stk.pop());
        }
        return sb.reverse().toString();
    }
}