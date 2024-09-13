/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function dfs(root, adj, res, visited) {
    if(visited.has(root) && visited.get(root) === -1) return true
    if(visited.has(root)) return false

    visited.set(root, -1)
    const neigh = adj.get(root) || []
    for(const n of neigh) {
        const cycle = dfs(n, adj, res, visited)
        if(cycle) return true
    }
    res.push(root)
    visited.set(root, 1)
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
    const visited = new Map()
    for(const [key, val] of adj) {
        const cycle = dfs(key, adj, res, visited)
        if(cycle) return []
    }
    for(let i=0; i<numCourses; i++) {
        if(!visited.has(i)) {
            res.push(i)
        }
    }
    return res
};