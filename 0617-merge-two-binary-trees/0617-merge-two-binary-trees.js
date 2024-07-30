/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
function dfs(root1, root2) {
    if(root1 === null && root2 === null) return null
    
    const root = new TreeNode()    
    if(root1 === null || root2 === null) {
        if(root1) {
            root.val = root1.val
            root.left = dfs(root1.left, null)
            root.right = dfs(root1.right, null)
        } else {
            root.val = root2.val
            root.left = dfs(null, root2.left)
            root.right = dfs(null, root2.right)
        }
    } else {
        root.val = root1.val + root2.val
        root.left = dfs(root1.left, root2.left)
        root.right = dfs(root1.right, root2.right)
    }
    return root
}
var mergeTrees = function(root1, root2) {
    return dfs(root1, root2)
};