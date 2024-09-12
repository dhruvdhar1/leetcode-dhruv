/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    const map = new Map()
    let curr = head
    while(curr != null) {
        const clone = new _Node(curr.val)
        map.set(curr, clone)
        curr = curr.next
    }
    curr = head
    while(curr != null) {
        const clone = map.get(curr)
        const random = map.get(curr.random) || null
        const next = map.get(curr.next) || null
        clone.next = next
        clone.random = random
        curr = curr.next
    }
    return map.get(head)
};