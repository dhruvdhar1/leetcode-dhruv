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

function averageOfSubtree(root: TreeNode | null): number {
    let count = 0
    function dfs(node) {
        if(node === null) {
            return [0,0]
        }
        const l = dfs(node.left)
        const r = dfs(node.right)
        const totalNodes = l[1] + r[1] + 1
        const sum = l[0] + r[0] + node.val
        const avg = Math.floor(sum/totalNodes)
        if(avg === node.val) {
            count++
        }
        return [sum, totalNodes]
    }
    dfs(root)
    return count
};