class Solution {
    private int dfs(int x, int y, int m, int n, int prev, int[][] matrix,
                    Set<String> visited, Map<String, Integer> dp) {
        String key = new StringBuilder().append(x).append(":").append(y).toString();
        if(x < 0 || y < 0 || x >= m || y >= n || visited.contains(key)) {
            return 0;
        }
        if(matrix[x][y] <= prev) return 0;
        if(dp.containsKey(key)) return dp.get(key);
        visited.add(key);
        int d = 1 + dfs(x+1, y, m, n, matrix[x][y], matrix, visited, dp); //down
        int u = 1 + dfs(x-1, y, m, n, matrix[x][y], matrix, visited, dp); //up
        int r = 1 + dfs(x, y+1, m, n, matrix[x][y], matrix, visited, dp); //right
        int l = 1 + dfs(x, y-1, m, n, matrix[x][y], matrix, visited, dp); //left
        visited.remove(key);
        int max = Math.max(d, Math.max(u, Math.max(l,r)));
        dp.put(key, max);
        return max;
    }
    public int longestIncreasingPath(int[][] matrix) {
        int res = -1;
        int m = matrix.length;
        int n = matrix[0].length;
        Map<String, Integer> dp = new HashMap();
        for(int i=0; i<m; i++) {
            for(int j=0; j<n; j++) {
                Set<String> visited = new HashSet();
                // dp = new HashMap();
                int max = dfs(i, j, m, n, -1, matrix, visited, dp);
                res = Math.max(max, res);
            }
        }
        return res;    
    }
}