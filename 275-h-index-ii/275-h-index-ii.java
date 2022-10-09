class Solution {
    public int hIndex(int[] citations) {
        int len = citations.length;
        int l = 0;
        int r = len-1;
        int m = l + ((r-l)/2);
        int mm = l + ((r-l)/2);;
        while(l<r) {
            m = l + ((r-l)/2);
            int windowSize = len-m;
            
            if(citations[m] == windowSize) {
                return len-m;
            } else if(citations[m] > windowSize) {
                mm = m;
                r = m-1;
            } else {
                l = m+1;
            }
        }
        // System.out.println("l : " + l);
        if(citations[l] == 0) return 0;
        else if (citations[l] < len-l) {
            return len-mm;
        }
        return citations[l] == 0 ? 0 : len-l;
    }
}