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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(null === root) return []
    const q = [root]
    const res = []
    while(q.length > 0) {
        const level = []
        const size = q.length
        for(let i=0; i<size; i++) {
            const pop = q.shift()
            if(!pop) continue;
            
            level.push(pop.val)
            if(pop.left) {
                q.push(pop.left)
            }
            if(pop.right) {
                q.push(pop.right)
            }
        }
        res.push(level.pop())
    }
    return res
};