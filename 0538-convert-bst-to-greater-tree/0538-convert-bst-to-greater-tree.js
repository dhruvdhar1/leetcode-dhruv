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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let currSum = 0
    const solve = (node) => {
        if(node == null) return

        solve(node.right)
        const ogValue = node.val
        node.val += currSum
        currSum += ogValue
        solve(node.left)
    }

    solve(root)
    return root
};