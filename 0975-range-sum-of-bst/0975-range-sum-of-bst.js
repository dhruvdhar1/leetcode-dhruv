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
    let sum = 0
    function dfs(node) {
        if(null === node) return 0
        // console.log("node: ", node.val)
        if(node.val >= low && node.val <= high) {
            return node.val + dfs(node.left) + dfs(node.right)
        } else if(node.val < low) {
            return dfs(node.right)
        } else if(node.val > high) {
            return dfs(node.left)
        }
    }
    return dfs(root)
    // return sum
};