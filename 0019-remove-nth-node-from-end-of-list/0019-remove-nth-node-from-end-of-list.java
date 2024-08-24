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
    int getListLength(ListNode head) {
        int len = 0;
        ListNode curr = head;
        while(curr != null) {
            len++;
            curr = curr.next;
        }
        return len;
    }
    public ListNode removeNthFromEnd(ListNode head, int n) {
        int len = getListLength(head);
        int targetInd = len - n;
        if(targetInd == 0) return head.next;
        ListNode prev = head;
        ListNode curr = head.next;
        int i = 0;
        while(i < targetInd-1) {
            prev = curr;
            curr = curr.next;
            i++;
        }
        if(curr == null) {
            prev.next = null;
        } else {
            prev.next = curr.next;
            curr.next = null;
        }
        return head;
    }
}