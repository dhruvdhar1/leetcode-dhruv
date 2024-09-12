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
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function(root, target, k) {
    const q = new Queue()
    function dfs(node) {
        if(node == null) return
        dfs(node.left)
        if(q.size() < k) {
            q.enqueue(node.val)
        } else {
            if(Math.abs(node.val - target) < Math.abs(q.front() - target)) {
                q.dequeue()
                q.enqueue(node.val)
            } else {
                return
            }
        }
        dfs(node.right)
    }
    dfs(root)
    return q.toArray()
};