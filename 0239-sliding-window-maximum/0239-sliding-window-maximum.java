class Solution {
    class Element{
        int el;
        int ind;
        Element(int el, int ind) {
            this.el = el;
            this.ind = ind;
        }
    }
    public int[] maxSlidingWindow(int[] nums, int k) {
        PriorityQueue<Element> maxHeap = new PriorityQueue<>((e1, e2) -> e2.el - e1.el);
        for(int i=0; i<k; i++) {
            Element el = new Element(nums[i], i);
            maxHeap.add(el);
        }
        List<Integer> max = new ArrayList();
        int i=0;
        int start = 0, end = k-1;
        while(end < nums.length) {
            if(start != 0) {
                maxHeap.add(new Element(nums[end], end));
            }
            while(maxHeap.size() > 0 && maxHeap.peek().ind < start) {
                maxHeap.poll();
            }
            if(maxHeap.size() > 0) {
                max.add(maxHeap.peek().el);
            }
            start++;
            end++;
        }
        int[] res = new int[max.size()];
        for(int m: max) {
            res[i++] = m;
        }
        return res;
    }
}