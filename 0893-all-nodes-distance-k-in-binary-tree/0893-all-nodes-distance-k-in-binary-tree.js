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
function dfs(node, parent, target, map) {
    let tn = null
    if(node === null) {
        return
    }
    if(node === target) {
        tn = node
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
    const l = dfs(node.left, node, target, map)
    const r = dfs(node.right, node, target, map)
    return l || r || tn
}

var distanceK = function(root, target, k) {
    const map = new Map()
    const targetNode = dfs(root, null, target, map, map)

    const res = []
    const q = new Queue([[targetNode, 0]])
    const visited = new Set()
    visited.add(targetNode)
    while(q.size() > 0) {
        const pop = q.dequeue()
        const node = pop[0]
        const dist = pop[1]
        if(dist === k) {
            res.push(node.val)
        }

        const neigh = map.get(node) || []
        for(const n of neigh) {
            if(!visited.has(n)) {
                q.enqueue([n, dist+1])
            }
        }
        visited.add(node)
    }
    return res
};