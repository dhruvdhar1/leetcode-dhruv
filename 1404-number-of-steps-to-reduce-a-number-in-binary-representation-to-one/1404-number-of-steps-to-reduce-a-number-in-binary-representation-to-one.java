class Solution {
    
    private String addOne(String s) {
        int carry = 0;
        int sum = 1;
        StringBuilder res = new StringBuilder();
        for(int i=s.length()-1; i>=0; i--) {
            char ch = s.charAt(i);
            if(ch == '0') {
                if(sum == 1 || carry == 1) {
                    res.append("1");
                    sum = 0;
                    carry = 0;
                } else {
                    res.append("0");
                }
            } else {
                if(sum == 1) {
                    sum = 0;
                    carry = 1;
                    res.append("0");
                } else if(carry == 1) {
                    carry = 1;
                    res.append("0");
                } else {
                    res.append("1");
                }
            }
        }
        if(carry == 1) res.append("1");
        return res.reverse().toString();
    }
    public int numSteps(String s) {
        int count = 0;
        while(!s.equals("1")) {
            if(s.charAt(s.length()-1) == '1') {
                s = addOne(s);
            } else {
                s = s.substring(0, s.length()-1);
            }
            // System.out.println(s);
            count++;
        }
        return count;
    }
}