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
    
    function dfs(node, pval, qval) {
        // console.log("node: ", node, " p: ", pval, " q: ", qval)
        if(node === null) return null

        const l = dfs(node.left, pval, qval)
        const r = dfs(node.right, pval, qval)

        if(node.val === p.val || node.val === q.val) return node
        if(l!==null && r!==null) return node
        if(l!==null || r!==null) {
            return l!==null ? l : r
        }
        return null
    }

    return dfs(root, p.val, q.val)
};