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

var isCompleteTree = function(root) {
    const q = [root]
    let prevNull = false
    while(q.length > 0) {
        const pop = q.shift()
        if(pop === null) {
            prevNull = true
            continue;
        }
        if(prevNull) return false
        q.push(pop.left)
        q.push(pop.right)
        
    }
    return true
};