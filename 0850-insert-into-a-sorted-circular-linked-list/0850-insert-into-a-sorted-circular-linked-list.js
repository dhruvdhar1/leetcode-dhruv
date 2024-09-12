/**
 * // Definition for a _Node.
 * function _Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {_Node} head
 * @param {number} insertVal
 * @return {_Node}
 */
function insertNode(prev, next, val) {
    const node = new _Node(val)
    prev.next = node
    node.next = next
}
var insert = function(head, insertVal) {
    if(head === null) {
        const node = new _Node(insertVal)
        node.next = node
        return node
    }
    let curr = head
    let next = curr.next

    while(curr.next !== head) {
        if(insertVal >= curr.val && insertVal <= next.val) {
            insertNode(curr, next, insertVal)
            return head
        } 
        if(curr.val > next.val) {
            if(insertVal >= curr.val || insertVal <= next.val) {
                insertNode(curr, next, insertVal)
                return head
            }
        }
        curr = curr.next
        next = next.next
    }
    insertNode(curr, next, insertVal)
    return head
};