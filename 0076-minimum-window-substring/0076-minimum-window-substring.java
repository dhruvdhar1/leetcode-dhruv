class Solution {
    public String minWindow(String s, String t) {
        int l=0, r=0;
        int minLen = Integer.MAX_VALUE;
        int startInd = -1;
        int count = 0;
        Map<Character, Integer> map = new HashMap();
        for(int i=0; i<t.length(); i++) {
            char ch = t.charAt(i);
            map.put(ch, map.getOrDefault(ch, 0) + 1);
        }
        
        while(r < s.length()) {
            char ch = s.charAt(r);
            if(map.get(ch) != null && map.get(ch) > 0) {
                count++;
            }
            map.put(ch, map.getOrDefault(ch, 0)-1);

            while(count == t.length()) {
                if(r-l+1 < minLen) {
                    minLen = r-l+1;
                    startInd = l;
                }
                map.put(s.charAt(l), map.getOrDefault(s.charAt(l), 0)+1);
                if(map.get(s.charAt(l)) > 0) {
                    count--;
                }
                l++;
            }
            r++;
        }
        return startInd == -1 ? "" : s.substring(startInd, (startInd+minLen));
    }
}