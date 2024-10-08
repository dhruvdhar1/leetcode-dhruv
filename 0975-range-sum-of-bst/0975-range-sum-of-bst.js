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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    const dfs = (node) => {
        if(node == null) return 0
        let sum = 0
        if(node.val >= low && node.val <= high) {
            sum += node.val
        }
        const a = dfs(node.left)
        const b = dfs(node.right)
        return sum + a + b
    }

    return dfs(root)
};