/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    const map = new Map()
    let targetNode = null
    function dfs(node, parent) {
        if(node === null) {
            return
        }
        if(node === target) {
            targetNode = node
        }
        if(!map.has(node)) {
            map.set(node, [])
        }
        if(parent && !map.has(parent)) {
            map.set(parent, [])
        }
        if(parent) {
            map.get(parent).push(node)
            map.get(node).push(parent)
        }
        dfs(node.left, node)
        dfs(node.right, node)
    }
    dfs(root, null)
    // console.log(map)
    const res = []
    const q = new Queue([[targetNode, 0]])
    const visited = new Set()
    visited.add(targetNode)
    while(q.size() > 0) {
        const pop = q.dequeue()
        const node = pop[0]
        const dist = pop[1]
        // console.log(node.val, " ------ ", dist)
        if(dist === k) {
            res.push(node.val)
        }

        const neigh = map.get(node) || []
        // console.log("nnn: ", neigh)
        for(const n of neigh) {
            if(!visited.has(n)) {
                q.enqueue([n, dist+1])
            }
        }
        visited.add(node)
    }
    return res
};