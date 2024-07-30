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
var diameterOfBinaryTree = function(root) {
    let maxD = 0
    function dfs(node) {
        if(node === null) return 0

        const lh = dfs(node.left)
        const rh = dfs(node.right)

        maxD = Math.max(maxD, lh+rh)

        return Math.max(lh, rh) + 1
    }
    dfs(root)
    return maxD
};