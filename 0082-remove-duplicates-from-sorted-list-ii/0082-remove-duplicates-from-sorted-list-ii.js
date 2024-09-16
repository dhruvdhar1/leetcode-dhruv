/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// p    c                 n     
// D    1   1  1   1   1
var deleteDuplicates = function(head) {
    if(head === null) return null
    let curr = head, next = curr.next
    let prev = new ListNode(-10000, curr)
    let prevCopy = prev
    while(next != null) {
        if(curr.val === next.val) {
            while(next && curr.val === next.val) {
                next = next.next
            }
            // console.log("next: ", next, " prev: ", prev)
            prev.next = next
            curr = next
            if(curr) {

            next = curr.next
            }
            // console.log("head: ", prevCopy)
        } else {
            prev = prev.next
            curr = curr.next
            next = next.next
        }
    }
    return prevCopy.next
};