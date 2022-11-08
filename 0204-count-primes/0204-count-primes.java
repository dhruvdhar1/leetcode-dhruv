class Solution {
    public int countPrimes(int n) {
        boolean[] primes = new boolean[n];
        int count = 0;
        for(int i=2; i < Math.sqrt(n); i++) {
            for(int j=i; j*i<n; j++) {
                // System.out.println(j*i);
                primes[j*i] = true;
            }
        }
        
        for(int i=2; i<n; i++) {
            if(!primes[i]) count++;
        }
        return count;
    }
}