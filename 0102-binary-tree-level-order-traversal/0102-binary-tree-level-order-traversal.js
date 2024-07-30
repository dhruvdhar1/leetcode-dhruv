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
var levelOrder = function(root) {
    if(null === root) return []
    const queue = [root]
    const res = []
    while(queue.length > 0) {
        const level = []
        const size = queue.length
        for(let i=0; i<size; i++) {
            const pop = queue.shift()
            if(pop) {
                if(pop.left) {
                    queue.push(pop.left)
                }
                if(pop.right) {
                    queue.push(pop.right)
                }
                level.push(pop.val)
            }
        }
        res.push(level)
    }
    return res
};