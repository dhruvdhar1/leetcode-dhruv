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

const insertHelper = (prev, next, val) => {
    const node = new _Node(val)
    prev.next = node
    node.next = next
}
var insert = function(head, insertVal) {
    if(head == null) {
        const node = new _Node(insertVal)
        node.next = node
        return node
    }

    let curr = head
    while(curr.next != head) {
        console.log("node: ", curr.val, " : ", head.val)
        if(insertVal >= curr.val && insertVal <= curr.next.val) {
            console.log("hello")
            insertHelper(curr, curr.next, insertVal)
            return head
        } else if(curr.val > curr.next.val) {
            if(insertVal >= curr.val || insertVal <= curr.next.val) {
                console.log("hello2")
                insertHelper(curr, curr.next, insertVal)
                return head
            }
        }
        curr = curr.next
    }
    insertHelper(curr, curr.next, insertVal)
    return head
};