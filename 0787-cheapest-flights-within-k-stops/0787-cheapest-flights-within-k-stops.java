class Solution {
    
    private int dfs(Map<Integer, List<int[]>> adjList, int curr, int dest, int k, int cost, Map<String, Integer> dp) {
        if(k >= 0 && curr == dest) return cost;
        if(k == 0 && curr != dest) return -1;
        
        String key = new StringBuilder().append(curr).append(":").append(dest).append(":").append(k).toString();
        if(dp.containsKey(key)) return dp.get(key);
        
        int minCost = Integer.MAX_VALUE;
        List<int[]> neighbors = adjList.get(curr);
        if(neighbors == null) return -1;
        for(int[] n: neighbors) {
            int d = n[0];
            int c = n[1];
            int res = dfs(adjList, d, dest, k-1, cost, dp);
            if(res == -1) continue;
            minCost = Math.min(minCost, res+c);
        }
        int finalRes = (minCost == Integer.MAX_VALUE) ? -1 : minCost;
        dp.put(key, finalRes);
        return finalRes;
    }
    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        Map<Integer, List<int[]>> adjList = new HashMap();
        Map<String, Integer> dp = new HashMap();
        
        for(int[] route: flights) {
            int s = route[0];
            int d = route[1];
            int cost = route[2];
            
            if(adjList.containsKey(s)) {
                adjList.get(s).add(new int[]{d, cost});
            } else {
                List<int[]> neighbors = new ArrayList();
                neighbors.add(new int[]{d, cost});
                adjList.put(s, neighbors);
            }
        }
        return dfs(adjList, src, dst, k+1, 0, dp);
        
    }
}