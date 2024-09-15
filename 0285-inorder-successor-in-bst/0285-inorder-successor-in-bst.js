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
        const l = dfs(node.left)
        if(node_found) {
        //    successor = node
           node_found = false
           return node
        }
        if(node === p) {
            node_found = true
        }
        const r = dfs(node.right)
        return l || r
    }
    return dfs(root)
    // return successor
    
};