/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    class Pair {
        int element;
        int listInd;
        Pair(int element, int listInd) {
            this.element = element;
            this.listInd = listInd;
        }
        public String toString() {
            return element + " : " + listInd;
        }
    }
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<Pair> minHeap = new PriorityQueue<Pair>(
                                            (p1, p2) -> p1.element-p2.element);
        ListNode res = new ListNode(-1);
        ListNode resHead = res;
        for(int i=0; i<lists.length; i++) {
            ListNode root = lists[i];
            if(null != root) {
                Pair p = new Pair(root.val, i);
                minHeap.add(p);
            }
        }
        while(!minHeap.isEmpty()) {
            Pair pop = minHeap.poll();
            res.next = new ListNode(pop.element);
            res = res.next;
            lists[pop.listInd] = lists[pop.listInd].next;
            if(lists[pop.listInd] != null) {
                Pair p = new Pair(lists[pop.listInd].val, pop.listInd);
                minHeap.add(p);
            }
        }
        return resHead.next;
    }
}