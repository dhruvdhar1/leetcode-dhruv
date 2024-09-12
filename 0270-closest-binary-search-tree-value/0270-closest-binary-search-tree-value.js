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
 * @return {number}
 */
var closestValue = function(root, target) {
    let diff = Number.MAX_SAFE_INTEGER, res = -1
    function dfs(node) {
        if(node == null) return
        if(Math.abs(node.val - target) < diff) {
            diff = Math.abs(node.val - target)
            res = node.val
        } else if(Math.abs(node.val - target) == diff && node.val < res) {
            res = node.val
        }

        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return res
};