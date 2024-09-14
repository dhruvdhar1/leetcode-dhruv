/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const left = new ListNode(-300)
    const right = new ListNode(-300)
    let l = left, r = right

    while(head != null) {
        if(head.val >= x) {
            r.next = head
            r = r.next
        } else {
            l.next = head
            l = l.next
        }
        head = head.next
    }
    r.next = null
    l.next = right.next
    return left.next
};