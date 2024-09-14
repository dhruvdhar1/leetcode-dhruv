/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**   
                    10
                 5      -3
               3   2      11  
             3  -2   1

    {
        0: 1
        10: 1
        5: 1
        18:2
        21:1
        16:1
        17:1

    }

    sum-target is in the dict
    count = 3
    sum=18
 */
var pathSum = function(root, targetSum) {
    const map = new Map([[0,1]])
    let count = 0

    function dfs(node, sum) {
        if(node === null) return null
        const curr = sum+node.val
        const diff = curr-targetSum
        if(map.has(diff)) {
            count += map.get(diff)
        }
        if(map.has(sum)) {
            const f = map.get(curr) || 0
            map.set(curr, f+1)
        } else {
            map.set(curr, 1)
        }
        dfs(node.left, curr)
        dfs(node.right, curr)
        sum -= node.val
        map.set(curr, map.get(curr)-1)
        if(map.get(curr) === 0) {
            map.delete(curr)
        }
    }

    dfs(root, 0)
    return count
};