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
var maxDepth = function(root) {
    if(null === root) return 0
    const lHeight = 1 + maxDepth(root.left)
    const rHeight = 1 + maxDepth(root.right)
    return Math.max(lHeight, rHeight)
};