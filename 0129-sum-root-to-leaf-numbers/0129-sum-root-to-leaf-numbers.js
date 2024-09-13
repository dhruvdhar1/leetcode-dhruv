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

var sumNumbers = function(root) {
    let total = 0
    function dfs(node, path) {
        if(null === node) return
        if(node.right === null && node.left === null) {
            total += path*10+node.val
            return
        }
        dfs(node.left, (path*10+node.val))
        dfs(node.right, (path*10+node.val))

    }

    dfs(root, 0)
    return total
    
};