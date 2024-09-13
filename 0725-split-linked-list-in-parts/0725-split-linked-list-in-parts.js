/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    const res = new Array(k).fill(null)
    if(head === null) return res
    let len = 0, curr = head, next = curr.next
    while(curr != null) {
        curr = curr.next
        len++
    }
    curr = head
    const partSize = Math.floor(len/k)
    let extra = len%k, pos = 1, ind = 0
    while(curr != null) {
        let offset = 0
        if(extra > 0) {
            offset = 1
            extra--
        }
        while(pos !== (partSize + offset) && next != null) {
            curr = curr.next
            next = next.next
            pos++
        }
        curr.next = null
        res[ind++] = head
        head = next
        curr = next
        if(next != null) {
            next = next.next
        }
        pos = 1
    }
    return res
};