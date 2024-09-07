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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let len = 0
    let curr = head
    while(curr != null) {
        curr = curr.next
        len++
    }
    if(len === n) {
        return head.next
    }
    // console.log("len: ", len)
    curr = head
    let i=0
    while(curr != null && (len-i !== n+1)) {
        // console.log("curr: ", curr)
        curr = curr.next
        i++
    }
    const next = curr.next
    curr.next = next.next
    next.next = null
    return head
};