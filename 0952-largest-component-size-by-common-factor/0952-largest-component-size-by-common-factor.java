class Solution {
    
    private void union(int a, int b, int[] parent) {
        int parentA = find(a, parent);
        int parentB = find(b, parent);
        
        if(parentA != parentB) {
            parent[parentA] = parentB;
        }
    }
    
    private int find(int a, int[] parent) {
        while(a != parent[a]) {
            a = parent[a];
            parent[a] = parent[parent[a]];
        }
        return a;
    }
    
    public int largestComponentSize(int[] nums) {
        int max = 0;
        for(int num: nums) {
            max = Math.max(num, max);
        }
        
        int[] parent = new int[max+1];
        
        for(int i=0; i<parent.length; i++) {
            parent[i] = i;
        }
        
        for(int i: nums) {
            for(int j=2; j*j<=i; j++) {
                if(i%j == 0) {
                    union(j, i, parent);
                    union(i/j, i, parent);
                }
            }
        }
        
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
		int maxComponet = 0;
		for(int el:nums){
			int p = find(el, parent);
			map.put(p, map.getOrDefault(p, 0) + 1);
			maxComponet= Math.max(maxComponet, map.get(p));
		}
        return maxComponet;
    }
}