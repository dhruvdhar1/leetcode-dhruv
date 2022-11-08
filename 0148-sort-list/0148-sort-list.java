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
    private ListNode merge(ListNode head1, ListNode head2) {
        ListNode left = head1;
        ListNode right = head2;
        ListNode sorted = new ListNode(-1);
        ListNode sortedHead = sorted;
        
        while(left != null && right != null) {
            if(left.val <= right.val) {
                sorted.next = new ListNode(left.val);
                left = left.next;
            } else {
                sorted.next = new ListNode(right.val);
                right = right.next;
            }
            sorted = sorted.next;
        }
        while(left != null) {
            sorted.next = new ListNode(left.val);
            left = left.next;
            sorted = sorted.next;
        }
        while(right != null) {
            sorted.next = new ListNode(right.val);
            right = right.next;
            sorted = sorted.next;
        }
        // System.out.println("sorted: " + sortedHead.val);
        return sortedHead.next;
    }
    
    public ListNode sortList(ListNode head) {
        if(head == null || head.next == null) return head;
        
        ListNode newHead = head;
        ListNode temp = head;
        ListNode slow = head;
        ListNode fast = head;
        
        while(fast != null && fast.next != null) {
            temp = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        temp.next = null;
        ListNode sortLeft = sortList(newHead);
        ListNode sortRight = sortList(slow);
        
        return merge(sortLeft, sortRight);
    }
}