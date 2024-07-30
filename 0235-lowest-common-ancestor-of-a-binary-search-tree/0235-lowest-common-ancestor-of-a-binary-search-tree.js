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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    function dfs(node) {
        if(node === null) return null

        const l = dfs(node.left)
        const r = dfs(node.right)

        if(node.val === p.val || node.val === q.val) return node
        if(l && r) return node
        if(l || r) {
            return l || r
        }
        return null
    }

    return dfs(root)
};