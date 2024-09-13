/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head == null) return null
    let len = 0
    let slow = head, fast = slow.next
    while(slow != null) {
        len++
        slow = slow.next
    }
    const target = len-n-1
    if(target < 0) {
        return head.next
    }
    let ind = 0
    slow = head
    while(fast != null) {
                if(ind === target) {
            slow.next = fast.next
            fast.next = null
            break
        }
        slow = slow.next
        fast = fast.next
        ind++

    }
    return head
};