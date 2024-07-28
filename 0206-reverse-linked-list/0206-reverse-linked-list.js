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
var reverseList = function(head) {
    
    if(head === null) return null
    
    let curr = head
    let next = null
    while(curr.next != null) {
        next = curr.next
        curr.next = next.next
        next.next = head
        head = next
    }
    return head
};