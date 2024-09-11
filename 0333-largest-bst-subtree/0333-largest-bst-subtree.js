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
var largestBSTSubtree = function(root) {
    function dfs(node) {
        if(node === null) {
            return [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0]
        }

        const l = dfs(node.left)
        const r = dfs(node.right)

        if(node.val > l[1] && node.val < r[0]) {
            const min = Math.min(node.val, l[0])
            const max = Math.max(node.val, r[1])
            const size = l[2] + r[2] + 1
            return [min, max, size]
        }
        return [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Math.max(l[2], r[2])]
    }
    const ans = dfs(root)
    console.log(ans)
    return ans[2]
};