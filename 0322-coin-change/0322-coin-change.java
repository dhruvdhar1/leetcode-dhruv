class Solution {
    private int backtrack(int[] coins, int amount, int curr, int numCoins, int[] dp) {
        // System.out.println("AAAAAA: " + curr);
        if(curr > amount) return -1;
        if(curr == amount) return 0;
        
        if(dp[curr] != 0) return dp[curr];
        
        int num = 1000001;
        for(int i=coins.length-1; i>=0; i--) { //1,2,5
            int c;
            if(coins[i] <= amount) {
                c = backtrack(coins, amount, curr+coins[i], numCoins+1, dp);
                if(c != -1) {
                    num = Math.min(num, c+1);
                }
            }
        }        
        int res = (num == 1000001) ? -1 : num;
        dp[curr] = res;
        return res;
    }
    public int coinChange(int[] coins, int amount) {
        Arrays.sort(coins);
        // System.out.println("sorted: " + Arrays.toString(coins));
        int[] dp = new int[amount+1];
        return backtrack(coins, amount, 0, 0, dp);
    }
}

/*
curr = 0 + 1+1+1...
coins = 0+1
*/