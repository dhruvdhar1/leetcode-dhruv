class Solution {
    class Pair {
        int el;
        int freq;
        
        public Pair(int el, int freq) {
            this.el = el;
            this.freq = freq;
        }
        public String toString() {
            return el + " : " + freq;
        }
    }
    
    public int findLeastNumOfUniqueInts(int[] arr, int k) {
        Map<Integer, Integer> map = new HashMap();
        for(int num: arr) {
            int f = map.getOrDefault(num, 0);
            map.put(num, f+1);
        }
        PriorityQueue<Pair> minHeap = new PriorityQueue<>((p1, p2) -> p1.freq-p2.freq);
        
        for(int key: map.keySet()) {
            Pair p = new Pair(key, map.get(key));
            minHeap.add(p);
        }
        while(k > 0) {
            Pair poll = minHeap.poll();
            if(poll.freq >= k) {
                poll.freq -= k;
                k = 0;
            } else {
                k -= poll.freq;
                poll.freq = 0;
            }
            if(poll.freq > 0) {
                minHeap.add(poll);
            }
        }
        return minHeap.size();
    }
}