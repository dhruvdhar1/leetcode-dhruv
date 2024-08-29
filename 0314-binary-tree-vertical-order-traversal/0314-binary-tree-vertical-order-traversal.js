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
 * @return {number[][]}
 */

/**
    TC: O(n)
    SC: O(n)
 */
var verticalOrder = function(root) {
    if(null === root) return []
    const map = new Map()
    let minCol = Number.MAX_SAFE_INTEGER
    let maxCol = Number.MIN_SAFE_INTEGER

    const q = new Queue([[root,0]])
    while(q.size() > 0) {
        const pop = q.pop() //O(1)
        const node = pop[0]
        const col = pop[1]
        if(!map.has(col)) {
            minCol = Math.min(minCol, col)
            maxCol = Math.max(maxCol, col)
            map.set(col, [])
        }
        map.get(col).push(node.val)
        if(node.left != null) {
            q.push([node.left, col-1])
        }
        if(node.right != null) {
            q.push([node.right, col+1])
        }
    }
    const res = []
    for(let i=minCol; i<=maxCol; i++) {
        const values = map.get(i)
        res.push(values)
    }
    return res
};