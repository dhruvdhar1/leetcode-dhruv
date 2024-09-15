/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    const inorder = []
    let node_found = false
    let successor = null
    function dfs(node) {
        if(node == null) return null
        if(node.val > p.val) {
            dfs(node.left)
            if(node_found) {
                node_found = false
                successor = node
            }
        } else {
            if(node.val === p.val) {
                node_found = true
            }
            dfs(node.right)
        }
    }
    dfs(root)
    return successor
};