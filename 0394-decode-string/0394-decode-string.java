class Solution {
    public String decodeString(String s) {
        Stack<Character> stk = new Stack();
        int len = s.length();
        StringBuilder res = new StringBuilder();
        for(int i=0; i<len; i++) {
            char ch = s.charAt(i);
            if(ch == ']') {
                //pop logic
                StringBuilder temp  = new StringBuilder();
                while(stk.peek() != '[') {
                    temp.append(stk.pop());
                }
                stk.pop(); //pop [
                StringBuilder numStr = new StringBuilder();
                while(!stk.isEmpty() && (char)(stk.peek() - '0') >= 0 
                            && (char)(stk.peek() - '0') <= 9) {
                    numStr.append(stk.pop());
                }
                int num = Integer.parseInt(numStr.reverse().toString());
                String result = temp.reverse().toString().repeat(num);
                
                for(int j=0; j<result.length(); j++) {
                    stk.add(result.charAt(j));
                }
                
            } else {
                stk.add(ch);
            }
        }
        // System.out.println(stk.toString());
        while(!stk.isEmpty()) {
            res.append(stk.pop());
        }
        return res.reverse().toString();
    }
}