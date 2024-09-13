/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function hasCycle(root, adj, visited) {
    if(visited.has(root)) return true
    visited.add(root)
    const neigh = adj.get(root) || []
    for(const n of neigh) {
        const cycle = hasCycle(n, adj, visited)
        if(cycle) return true
    }
    visited.delete(root)
}
function dfs(root, adj, res, visited) {
    if(visited.has(root)) return true
    // if(adj.get(root) === null)
    visited.add(root)
    const neigh = adj.get(root) || []
    for(const n of neigh) {
        dfs(n, adj, res, visited)
    }
    res.push(root)
    // adj.set(root, null)
}
var findOrder = function(numCourses, prerequisites) {
    const res = []

    const adj = new Map()
    for(const prereq of prerequisites) {
        const c1 = prereq[0]
        const c2 = prereq[1]

        if(!adj.has(c1)) {
            adj.set(c1, [])
        }
        if(!adj.has(c2)) {
            adj.set(c2, [])
        }
        adj.get(c1).push(c2)
    }
    const visited = new Set()
    for(const [key, val] of adj) {
        const cycle = hasCycle(key, adj, visited)
        if(cycle) return []
    }
    // visited = new Set()
    for(const [key, val] of adj) {
        dfs(key, adj, res, visited)
    }
    for(let i=0; i<numCourses; i++) {
        if(!visited.has(i)) {
            res.push(i)
        }
    }
    return res
};