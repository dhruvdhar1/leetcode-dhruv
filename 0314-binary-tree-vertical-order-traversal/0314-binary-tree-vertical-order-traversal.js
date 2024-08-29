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

var verticalOrder = function(root) {
    if(null === root) return []
    const map = new Map()
    let minCol = Number.MAX_SAFE_INTEGER
    let maxCol = Number.MIN_SAFE_INTEGER

    const q = [[root, 0]]

    while(q.length > 0) {
        const pop = q.shift()
        ///
        const col = pop[1]
        if(!map.has(col)) {
            minCol = Math.min(minCol, col)
            maxCol = Math.max(maxCol, col)
            map.set(col, [])
        }
        map.get(col).push(pop[0].val)
        ///
        if(pop[0].left != null) {
            q.push([pop[0].left, col-1])
        }
        if(pop[0].right != null) {
            q.push([pop[0].right, col+1])
        }
    }
    // console.log("min: ", minCol, " : ", maxCol)
    const res = []
    for(let i=minCol; i<=maxCol; i++) {
        const values = map.get(i)
        res.push(values)
    }
    return res
};