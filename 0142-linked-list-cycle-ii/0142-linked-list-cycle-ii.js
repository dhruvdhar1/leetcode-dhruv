/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head, fast = head
    let cycle = false
    while(fast && fast.next != null && fast.next.next != null) {
        slow = slow.next
        fast = fast.next.next
        if(slow === fast) {
            cycle = true
            break
        }
    }
    if(cycle) {
        // console.log("slow: ", slow.val)
        while(head != slow) {
            head = head.next
            slow = slow.next
        }
        return head
    }
    return null
};