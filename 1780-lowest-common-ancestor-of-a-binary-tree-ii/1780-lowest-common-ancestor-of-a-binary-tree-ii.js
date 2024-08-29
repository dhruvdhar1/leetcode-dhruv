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
const checkNodes = (root, p, q) => {
    if(root === null) return 0
    let sum = 0;
    if(root === p || root === q) {
        sum += 1
    }
    const l = checkNodes(root.left, p, q)
    const r = checkNodes(root.right, p, q)
    return sum + l + r;
}
const lca = (root, p, q) => {
    if(root === null) return null;
    if(root === p || root === q) return root;

    const l = lca(root.left, p, q);
    const r = lca(root.right, p, q);

    if((l === p && r === q) || (l === q && r === p)) return root;
    return l || r;
}
var lowestCommonAncestor = function(root, p, q) {
    const sum = checkNodes(root, p, q)
    if(sum !== 2) return null
    return lca(root, p, q)
};