class Solution {
    public boolean possibleBipartition(int n, int[][] dislikes) {
        if(dislikes.length == 0) return true;
        Map<Integer, List<Integer>> adjList = new HashMap();
        for(int[] arr: dislikes) {
            int s = arr[0];
            int v = arr[1];
            if(adjList.containsKey(s)) {
                adjList.get(s).add(v);
            } else {
                List<Integer> list = new ArrayList();
                list.add(v);
                adjList.put(s, list);
            }
            
            if(adjList.containsKey(v)) {
                adjList.get(v).add(s);
            } else {
                List<Integer> list = new ArrayList();
                list.add(s);
                adjList.put(v, list);
            }
        }
        
        
        int[] colors = new int[n+1];
        
        for(int k: adjList.keySet()) {
            if(colors[k] == 0) {
                Queue<Integer> q = new LinkedList();
                q.add(k);
                colors[k] = 1;
                while(!q.isEmpty()) {
                    int pop = q.poll();
                    int color = colors[pop];
                    List<Integer> neighbors = adjList.get(pop);
                    for(int nei: neighbors) {
                        if(colors[nei] == 0) {
                            colors[nei] = (color == 1) ? -1 : 1;
                            q.add(nei);
                        } else {
                            if(colors[nei] == color)  {
                                return false;
                            }
                        }
                    }
                }
            }
        }
        return true;
    }
}