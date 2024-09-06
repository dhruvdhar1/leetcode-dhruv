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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let p = l1, q = l2
    let head = new ListNode(-1)
    let curr = head
    let carry = 0
    while(p != null || q != null) {
        let pVal = 0, qVal = 0
        if(p != null) {
            pVal = p.val
            p = p.next
        }
        if(q != null) {
            qVal = q.val
            q = q.next
        }
        const sum = pVal + qVal + carry
        carry = Math.floor(sum/10)
        const val = sum%10
        curr.next = new ListNode(val)
        curr = curr.next
    }
    // while(p != null) {
    //     const sum = p.val + carry
    //     carry = Math.floor(sum/10)
    //     const val = sum%10
    //     curr.next = new ListNode(val)
    //     curr = curr.next
    //     p = p.next
    // }
    // while(q != null) {
    //     const sum = q.val + carry
    //     carry = Math.floor(sum/10)
    //     const val = sum%10
    //     curr.next = new ListNode(val)
    //     curr = curr.next
    //     q = q.next
    // }
    if(carry) {
        curr.next = new ListNode(carry)
    }
    return head.next
};