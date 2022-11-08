class Solution {
    public String makeGood(String s) {
        int len = s.length();
        
        StringBuilder sb = new StringBuilder();
        for(int i=0; i<len; i++) {
            char peek = sb.length() > 0 ? sb.charAt(sb.length()-1) : ' ';
            char ch = s.charAt(i);
            int diff = Math.abs((int)(ch - peek));
            if(diff == 32) {
                sb.deleteCharAt(sb.length()-1);
            } else {
                sb.append(ch);
            }
        }
        return sb.toString();
    }
}