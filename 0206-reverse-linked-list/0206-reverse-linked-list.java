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
    public ListNode reverseList(ListNode head) {
        if(head == null) return null;
        
        ListNode prev = head;
        ListNode curr = head.next;

        while(curr != null) {
            prev.next = curr.next;
            curr.next = head;
            head = curr;
            curr = prev.next;
        }

        return head;
    }
}