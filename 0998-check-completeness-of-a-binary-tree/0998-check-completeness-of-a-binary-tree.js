/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    let null_seen = false
    const q = new Queue([root])
    while(q.size() > 0) {
        const pop = q.dequeue()
        if(pop != null) {
            if(null_seen) return false
            q.enqueue(pop.left)
            q.enqueue(pop.right)
        } else {
            null_seen = true
        }
    }
    return true
};