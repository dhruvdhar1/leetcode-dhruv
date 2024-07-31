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
 * @return {number}
 */

var goodNodes = function(node) {
    let count = 0
    function dfs(root, currMax) {
        if(null === root) return

        if(root.val >= currMax) {
            count++
        }
        dfs(root.left, Math.max(currMax, root.val))
        dfs(root.right, Math.max(currMax, root.val))
    }

    dfs(node, -100000001)
    return count
};