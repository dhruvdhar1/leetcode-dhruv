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
function dfs(root, targetSum, path=[], paths=[]) {
    if(root == null) {
        return
    }
    path.push(root.val)
    if(root.left == null && root.right == null && root.val === targetSum) {
        const pathClone = [...path]
        // console.log("path: ", path)
        paths.push(pathClone)
    }
    dfs(root.left, targetSum-root.val, path, paths)
    dfs(root.right, targetSum-root.val, path, paths)
    path.pop()
    return
}

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const paths = []
    dfs(root, targetSum, [], paths)
    return paths
};