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
var verticalTraversal = function(root) {
    let minCol = 0, maxCol = 0
    const q = [[root, 0, 0]]
    const map = new Map()
    while(q.length > 0) {
        const pop = q.shift()
        const col = pop[2]
        const row = pop[1]
        const node = pop[0]
        minCol = Math.min(minCol, col)
        maxCol = Math.max(maxCol, col)
        if(!map.has(col)) {
            map.set(col, [])
        }
        map.get(col).push([node.val, row])
        if(node.left) {
            q.push([node.left, row+1, col-1])
        }
        if(node.right) {
            q.push([node.right, row+1, col+1])
        }
    }
    const res = []
    for(let i=minCol; i<=maxCol; i++) {
        const arr = map.get(i)
        arr.sort((a,b) => a[1]===b[1] ? a[0]-b[0] : null)
        const mapped = arr.map(el => el[0])
        res.push(mapped)
    }
    return res
};