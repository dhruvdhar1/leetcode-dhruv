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

var pathSum = function(root, targetSum) {
    const map = new Map([[0,1]])
    let count = 0
    function dfs(node, sum) {
        if(node == null) return 

        const currSum = sum + node.val
        const diff = currSum - targetSum
        console.log("diff: ", diff, " : ", currSum)
        if(map.has(diff)) {
            console.log("cnt: ", map.get(diff))
            count += map.get(diff) || 0
        }
        if(map.has(currSum)) {
            map.set(currSum, map.get(currSum) + 1)
        } else {
            map.set(currSum, 1)
        }
        dfs(node.left, currSum)
        dfs(node.right, currSum)

        map.set(currSum, map.get(currSum)-1)
        if(map.get(currSum) === 0) {
            map.delete(currSum)
        }
    }

    dfs(root, 0)
    return count
};