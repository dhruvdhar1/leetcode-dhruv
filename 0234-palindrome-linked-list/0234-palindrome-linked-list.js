/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
    -----------v
    1 <-- 2  3 --> null
    c     nh  
          -------------
         c     h     V n
    2 --> 1    3  null
    ^-----------
 */

function reverse(head) {
    if(head === null) return null
    let curr = head, next = curr.next

    while(next != null) {
        curr.next = next.next
        next.next = head
        head = next
        next = curr.next
    }
    return head
}
var isPalindrome = function(head) {
    let slow = head, fast = head
    if(head === null || head.next === null) return true
    while(fast.next != null && fast.next.next != null) {
        slow = slow.next
        fast = fast.next.next
    }
    const rev = reverse(slow.next)
    slow.next = rev

    let p1 = head, p2 = slow.next
    while(p1 != null && p2 != null) {
        if(p1.val != p2.val) return false
        p1 = p1.next
        p2 = p2.next
    }
    return true
};