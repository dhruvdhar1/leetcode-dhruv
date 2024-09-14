/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
                1
              /   \
             10     4
           3        7  9
         12  8     6     2    

         [[1], [10,4], [3, 7, 9], [12, 8, 6, 2]]
  */
var isEvenOddTree = function(root) {
    const MAX_VAL = 10000000
    const q = new Queue([root])
    let level = 0

    while(q.size() > 0) {
        const len = q.size()
        const levelEl = []
        if(level%2 === 0) {
            levelEl.push(-1)
        } else {
            levelEl.push(MAX_VAL)
        }
        for(let i=0; i<len; i++) {
            const pop = q.dequeue()
            if(level%2 === 0 && (pop.val%2 === 0 || pop.val <= levelEl[levelEl.length-1])) {
                return false
            }
            if(level%2 !== 0 && (pop.val%2 !== 0 || pop.val >= levelEl[levelEl.length-1])) {
                return false
            }
            levelEl.push(pop.val)
            if(pop.left) {
                q.enqueue(pop.left)
            }
            if(pop.right) {
                q.enqueue(pop.right)
            }
        }
        level++
    }
    return true
};
