class Solution {
    public int maximumPopulation(int[][] logs) {
        Map<Integer, Integer> map = new HashMap();
        
        for(int[] interval: logs) {
            int start = interval[0];
            int end = interval[1];
            
            for(int i=start; i<end; i++) {
                int freq = map.getOrDefault(i, 0);
                map.put(i, freq+1);
            }
            // map.put(end, map.getOrDefault(end, 0)-1);
        }
        
        // for(int key: map.keySet()) {
        //     System.out.println(key +" : " +map.get(key));
        // }
        
        int maxFreq = -1; //2
        int minYear = 2051; //1950
        for(int key: map.keySet()) {
            int f = map.get(key);
            if(f > maxFreq) {
                if(key > minYear && f > maxFreq) {
                    maxFreq = f;
                    minYear = key;
                } else {
                    maxFreq = f;
                    minYear = key;
                }
            } else if(f == maxFreq) {
                if(key<minYear) {
                    minYear = key;
                }
            }
        }
        return minYear;
    }
}