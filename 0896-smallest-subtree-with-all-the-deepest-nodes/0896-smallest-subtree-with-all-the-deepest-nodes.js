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
 * @return {TreeNode}
 */
function dfs(root) {
    if(root === null) return [null, 0]
    const l = dfs(root.left)
    const r = dfs(root.right)
    if(l[1] === r[1]) {
        return [root, l[1]+1]
    } else if(l[1] > r[1]) {
        return [l[0], l[1]+1]
    } else {
        return [r[0], r[1]+1]
    }
}
var subtreeWithAllDeepest = function(root) {
    const res = dfs(root) 
    return res[0]
};