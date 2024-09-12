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
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function(root, target, k) {
    const pq = new MaxPriorityQueue({ priority: el => el[1]})
    function dfs(node) {
        if(node == null) return
        const diff = Math.abs(node.val - target)
        if(pq.size() < k) {
            pq.enqueue([node.val, diff])
        } else {
            const top = pq.front().element
            if(diff < top[1]) {
                pq.dequeue()
                pq.enqueue([node.val, diff])
            }
        }
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    const res = []
    while(pq.size() > 0) {
        const pop = pq.dequeue().element
        res.push(pop[0])
    }
    return res
};