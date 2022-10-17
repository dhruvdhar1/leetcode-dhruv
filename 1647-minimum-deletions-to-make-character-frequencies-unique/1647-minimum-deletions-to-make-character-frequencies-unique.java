class Solution {
    public int minDeletions(String s) {
        int[] arr = new int[27];
        Set<Integer> set = new HashSet();
        for(int i=0; i<s.length(); i++) {
            char ch = s.charAt(i);
            int ind = ch - 'a';    
            arr[ind]++;
        }
        int numDeletions = 0;
        for(int num: arr) {
            if(num > 0) {
                if(set.contains(num)) {
                    while(set.contains(num) && num > 0) {
                        num--;
                        numDeletions++;
                    }
                }
                set.add(num);
            }
        }
        return numDeletions;
    }
}