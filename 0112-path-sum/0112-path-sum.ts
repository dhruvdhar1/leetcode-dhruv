/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    //base case
    if(root == null) {
        return false
    }
    if(root.left == null && root.right == null) {
        return root.val === targetSum
    }

    const l = hasPathSum(root.left, targetSum-root.val)
    if(l) {
        return true
    }
    const r = hasPathSum(root.right, targetSum-root.val)
    return l || r
};