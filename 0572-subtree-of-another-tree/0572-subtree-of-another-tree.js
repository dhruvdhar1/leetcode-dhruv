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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function isEqual(root1, root2) {
    if(root1 === null && root2 === null) return true
    if(root1 === null || root2 === null) return false
    return root1.val === root2.val && isEqual(root1.left, root2.left) && isEqual(root1.right, root2.right)
}
function dfs(root, subRoot) {
    if(root === null) return false
    let equal = false
    if(root.val === subRoot.val) {
        equal = isEqual(root, subRoot)
        if(equal) return true
    }
    return equal || dfs(root.left, subRoot) || dfs(root.right, subRoot)
}
var isSubtree = function(root, subRoot) {
    return dfs(root, subRoot)
};