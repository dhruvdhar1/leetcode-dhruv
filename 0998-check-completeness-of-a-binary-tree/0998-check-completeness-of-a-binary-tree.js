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
    const l = 1 + getHeight(root.left)
    const r = 1 + getHeight(root.right)
    return Math.max(l, r)
}
function checkLastLevel(arr) {
    let r = arr.length-1
    while(arr[r] === null) {
        r--
    }
    while(r >= 0) {
        if(!arr[r]) return false
        r--
    }
    return true
}
var isCompleteTree = function(root) {
    const totalHeight = getHeight(root)
    // console.log("th: ", totalHeight)
    const q = [root]
    let level = []
    let height = 0
    while(q.length > 0 && height < totalHeight) {
        level = []
        const size = q.length
        for(let i=0; i<size; i++) {
            const pop = q.shift()
            if(pop === null) {
                if(height < totalHeight-1) return false
                level.push(null)
                continue
            }
            level.push(pop.val)
            const lchild = pop.left
            const rchild = pop.right
            q.push(lchild)
            q.push(rchild)
        }
        // console.log("ccc: ", height, " : ", level)
        height++
    }
    // console.log("ccc: ", height, " : ", level)
    return checkLastLevel(level)
};