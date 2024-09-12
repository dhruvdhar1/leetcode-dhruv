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
    let pFound = false, qFound = false
    function dfs(node) {
        if(node == null) return null

        const l = dfs(node.left)
        const r = dfs(node.right)

        if(l === p || r === p || node === p) {
            pFound = true
        }
        if(l === q || r === q || node === q) {
            qFound = true
        }

        if((l === p || l === q) && (r === q || r === p)) {
            return node
        } else if(node === p || node === q) {
            return node
        }
        return l || r
    }   

    const lca = dfs(root)
    return pFound && qFound ? lca : null
};