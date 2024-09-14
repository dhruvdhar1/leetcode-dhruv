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
function getHeight(root) {
    if(null === root) return 0
    const l = getHeight(root.left)
    const r = getHeight(root.right)
    return 1 + Math.max(l, r)
}
var isCompleteTree = function(root) {
    const height = getHeight(root)
    const q = new Queue([root])
    let level = 1
    console.log(height)
    while(q.size() > 0 && level <= height) {
        const levelEl = []
        let len = q.size()
        for(let i=0; i<len; i++) {
            const pop = q.dequeue()
            levelEl.push(pop)
            if(pop != null) {
                if(pop.left || level === height-1) {
                    q.push(pop.left)
                }
                if(pop.right || level === height-1) {
                    q.push(pop.right)
                }
            }
        }
        if(level < height) {
            if(levelEl.length < Math.pow(2, level-1)) return false
        } else {
            let pivot = -1
            for(let i=0; i<levelEl.length; i++) {
                if(levelEl[i] == null) {
                    pivot = i
                    break
                }
            }
            if(pivot != -1) {
            for(let i=pivot; i<levelEl.length; i++) {
                if(levelEl[i] != null) {
                    return false
                }
            }
            }
        }
        level++
    }
    return true
};  