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
 * @param {number} targetSum
 * @return {number}
 */
let count = 0
function dfs(node, sum, target, map, paths) {
    if(node === null) {
        return
    }
    const currSum = sum + node.val
    const diff = currSum - target
    if(map.has(diff)) {
        paths[0] += map.get(diff)
    }
    if(map.has(currSum)) {
        map.set(currSum, map.get(currSum) + 1)
    } else {
        map.set(currSum, 1)
    }
    dfs(node.left, sum+node.val, target, map, paths)
    dfs(node.right, sum+node.val, target, map, paths)

    map.set(currSum, map.get(currSum) - 1)
    if(map.get(currSum) === 0) {
        map.delete(currSum)
    }
}
var pathSum = function(root, targetSum) {
    let paths = [0]
    const map = new Map()
    map.set(0, 1)
    dfs(root, 0, targetSum, map, paths)
    return paths[0]
};