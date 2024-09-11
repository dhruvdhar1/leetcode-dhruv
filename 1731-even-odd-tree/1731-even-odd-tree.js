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
 * @return {boolean}
 */
 
var isEvenOddTree = function(root) {
    const q = [root] //dequeue
    let level = 0

    while(q.length > 0) {
        const aux = []
        let prev = null
        while(q.length > 0) {
            const pop = q.shift()
            
            if(level%2 === 0 && ((prev && prev >= pop.val) || pop.val%2 === 0)) return false
            if(level%2 !== 0 && ((prev && prev <= pop.val) || pop.val%2 !== 0)) return false
            prev = pop.val
            if(pop.left) {
                aux.push(pop.left)
            }
            if(pop.right) {
                aux.push(pop.right)
            }
        }
        q.push(...aux)
        level++
    }
    return true

};