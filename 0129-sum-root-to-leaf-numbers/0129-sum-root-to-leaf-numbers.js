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
        let sum = path*10 + node.val
        if(node.right === null && node.left === null) {
            total += sum
            return
        }
        dfs(node.left, sum)
        dfs(node.right, sum)
    }

    dfs(root, 0)
    return total
    
};