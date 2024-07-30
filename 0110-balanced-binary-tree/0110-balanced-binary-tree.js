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
var isBalanced = function(root) {
    let balanced = true
    
    function dfs(node) {
        if(null === node) return 0
        const lh = dfs(node.left)
        const rh = dfs(node.right)
        // console.log(node.val, " : ", lh, " : ", rh)
        if(Math.abs(lh-rh) > 1) {
            balanced = false
        }
        return Math.max(lh, rh) + 1
    }
    dfs(root)
    return balanced
};