/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**

    1 --> null
    Q: [2,3]
    len=1
 */
var connect = function(root) {
    if(null === root) return null
    const q = new Queue([root])

    while(q.size() > 0) {
        const len = q.size()
        for(let i=0; i<len; i++) {
            const pop = q.dequeue()
            if(i < len-1) {
                pop.next = q.front()
                // console.log("connecting ", pop.val," to ", q.front())
            } else {
                pop.next = null
            }
            if(pop.left) {
                q.enqueue(pop.left)
            }
            if(pop.right) {
                q.enqueue(pop.right)
            }
        }
    }
    return root
};