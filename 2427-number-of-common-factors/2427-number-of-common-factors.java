class Solution {
    public int commonFactors(int a, int b) {
        int higher = a >= b ? a : b;
        int lower = a < b ? a : b;
        int count = 0;
        
        for(int i=2; i<=lower; i++) {
            if(lower%i == 0 && higher%i == 0) {
                count++;
            }
        }
        return count+1;
    }
}