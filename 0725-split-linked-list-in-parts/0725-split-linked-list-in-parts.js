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
    if(k === 1) return [head]
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
    let flag = len%k === 0 ? false : true
    let partSize = Math.floor(len/k)
    let partInd = len%k
    console.log("part ind: ", partInd, " : ", partSize)
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
            // if(flag) {
            //     partSize = Math.ceil((len-1)/k)
            //     flag = false
            // }
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