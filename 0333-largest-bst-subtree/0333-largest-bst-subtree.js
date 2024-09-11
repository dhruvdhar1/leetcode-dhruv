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
 * @return {number}
 */
function dfs(root) {
    if(root == null) {
        return [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0]
    }
    const l = dfs(root.left)
    const r = dfs(root.right)
    // console.log("l: ", l, " r: ", r)
    if(root.val > l[1] && root.val < r[0]) {
        const min = Math.min(root.val, l[0])
        const max = Math.max(root.val, r[1])
        const count = 1 + l[2] + r[2]
        return [min, max,count]
    }
    return [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Math.max(l[2], r[2])]
}
var largestBSTSubtree = function(root) {
    const res = dfs(root)
    return res[2]
};