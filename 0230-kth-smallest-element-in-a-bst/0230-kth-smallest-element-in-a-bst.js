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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let ind = 0
    function dfs(node) {
        if(node === null) return -1
        const l = dfs(node.left)
        ind++
        if(ind === k) return node.val
        
        const r = dfs(node.right)
        return l!==-1 ? l : r
    }
    return dfs(root)
};