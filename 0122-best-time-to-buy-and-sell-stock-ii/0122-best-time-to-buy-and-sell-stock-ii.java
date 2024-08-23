class Solution {
    public int backtrack(int[] prices, int ind, boolean canBuy, Map<String, Integer> dp) {
        if(ind >= prices.length) {
            return 0;
        }
        String key = new StringBuilder().append(ind).append(":").append(canBuy).toString();
        if(dp.get(key) != null) {
            return dp.get(key);
        }
        if(canBuy) {
            int max = Math.max(-prices[ind] + backtrack(prices, ind+1, false, dp), backtrack(prices, ind+1, true, dp));
            dp.put(key, max);
            return max;
        } else {
            int max = Math.max(prices[ind] + backtrack(prices, ind+1, true, dp), backtrack(prices, ind+1, false, dp));
            dp.put(key, max);
            return max;
        }
    }
    public int maxProfit(int[] prices) {
        Map<String, Integer> dp = new HashMap();
        return backtrack(prices, 0, true, dp);
    }
}