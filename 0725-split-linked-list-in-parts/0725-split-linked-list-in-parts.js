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
    const arr = new Array(k).fill(null)
    if(head === null) return arr
    let curr = head
    let next = curr.next
    let pos = 2
    let len = 0
    let arrInd = 0
    while(curr != null) {
        len++
        curr = curr.next
    }
    curr = head
    let partSize = Math.floor(len/k)
    let partInd = len%k
    while(next != null) {
        let offset = partInd > 0 ? 1 : 0
        if(pos > partSize + offset) {
            pos = 2
            arr[arrInd++] = head
            curr.next = null
            curr = next
            head = next
            next = next.next
            partInd--
        } else {
            pos++
            curr = curr.next
            next = next.next
        }
    }
    if(head != null) {
        arr[arrInd] = head
    }
    return arr
};