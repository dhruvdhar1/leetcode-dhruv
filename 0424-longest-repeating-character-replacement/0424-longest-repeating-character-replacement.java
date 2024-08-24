class Solution {
    int getMapFreq(Map<Character, Integer> map) {
        int max = 0;
        for(int val: map.values()) {
            max = Math.max(max, val);
        }
        return max;
    }

    public int characterReplacement(String s, int k) {
        int l=0, r=0;
        Map<Character, Integer> map = new HashMap();
        int longestWindowSize = 0;
        while(r < s.length()) {
            char ch = s.charAt(r);
            map.put(ch, map.getOrDefault(ch, 0) + 1);
            int maxMapFreq = getMapFreq(map);
            // System.out.println("ff: "+ maxMapFreq);
            if((r-l+1 - maxMapFreq) <= k) {
                longestWindowSize = Math.max(longestWindowSize, r-l+1);
            } else {
                char charAtL = s.charAt(l);
                map.put(charAtL, map.getOrDefault(charAtL, 0) - 1);
                l++;
            }
            r++;
        }
        return longestWindowSize;
    }
}