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
    public void reorderList(ListNode head) {
        ListNode slow = head;
        ListNode fast = head.next;
        while(fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        ListNode p2 = slow.next;
        slow.next = null;

        p2 = reverseList(p2);
        // while(p2 != null) {
        //     System.out.print(p2.val + " : ");
        //     p2 = p2.next;
        // }
        // System.out.print("\n");
        // while(p1 != null) {
        //     System.out.print(p1.val + " : ");
        //     p1 = p1.next;
        // }

        ListNode p1 = head;
        while(p2 != null) {
            // System.out.println ("p2: "+ p2.val);
            ListNode temp = p2;
            p2 = p2.next;
            temp.next = p1.next;
            p1.next = temp;
            p1 = p1.next.next;
        }
    }
}