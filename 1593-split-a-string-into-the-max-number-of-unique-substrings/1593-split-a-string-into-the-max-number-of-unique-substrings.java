class Solution {
    private int backtrack(String s, int i, int j, Set<String> set) {
        if(j == s.length()) {
            // System.out.println("return : " + set.size());
            return set.size();
        }
        
        int max = -1;
        for(int k=j+1; k<=s.length(); k++) {
            String substr = s.substring(j, k);
            if(!set.contains(substr)) {
                // System.out.println(j + ":" + k + " : " + substr);
                set.add(substr);
                int res = backtrack(s, j, k, set);
                // System.out.println(substr + " : " + res);
                max = Math.max(res, max);
                set.remove(substr);
            }
        }
        return max;
    }
    public int maxUniqueSplit(String s) {
        Set<String> set = new HashSet();
        return backtrack(s, 0, 0, set);
    }
}