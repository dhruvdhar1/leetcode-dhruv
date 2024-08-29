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
    let sum = 0
    const lca = (node, p, q) => {
        if(node === null) return null;

        const l = lca(node.left, p, q);
        const r = lca(node.right, p, q);
        if(node === p || node === q) {
            sum++;
            return node;
        }

        if(l && r) return node;
        return l || r;
    }
    const res = lca(root, p, q)
    if(sum !== 2) return null
    return res
};