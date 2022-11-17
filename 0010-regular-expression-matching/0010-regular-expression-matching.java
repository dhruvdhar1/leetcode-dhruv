class Solution {
    public boolean isMatch(String text, String pattern) {
        return isMatch(text, 0, pattern, 0);
    }
    
    private boolean isMatch(String text, int i, String pattern, int j) {
        if (j == pattern.length()) {
            return i == text.length();
        }
        
        boolean charsMatch = (i != text.length()) && (text.charAt(i) == pattern.charAt(j) || pattern.charAt(j) == '.');
        
        if (j + 2 <= pattern.length() && pattern.charAt(j + 1) == '*') {
            return (charsMatch && isMatch(text, i + 1, pattern, j)) || isMatch(text, i, pattern, j + 2);
        } else {
            return charsMatch && isMatch(text, i + 1, pattern, j + 1);
        }
    }
}