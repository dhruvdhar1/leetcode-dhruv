/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
    let slow = head, fast = head
    let cycle = false
    if(head == null) return null
    while(slow.next != null && fast.next != null && fast.next.next != null) {
        slow = slow.next
        fast = fast.next.next
        if(slow === fast) {
            cycle = true
            break
        }
    }
    if(!cycle) {
        return null
    }
    while(head != slow) {
        head = head.next
        slow = slow.next
    }
    return head
};