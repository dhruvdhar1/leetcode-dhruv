/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

function isCycle(adj, node, visited) {
    if(visited.has(node)) return true

    visited.add(node)
    const neigh = adj.get(node) || []
    for(const n of neigh) {
        const cycle = isCycle(adj, n, visited)
        if(cycle) return true
    }
    visited.delete(node)
    adj.set(node, [])
    return false
}
var canFinish = function(numCourses, prerequisites) {
    const adj = new Map()
    for(const prereq of prerequisites) {
        const course1 = prereq[0]
        const course2 = prereq[1]
        // course2 --> course1
        if(!adj.has(course2)) {
            adj.set(course2, [])
        }
        adj.get(course2).push(course1)
    }

    const visited = new Set()
    for(const [key, _] of adj) {
        if(!visited.has(key)) {
            const cycle = isCycle(adj, key, visited)
            if(cycle) return false
        }
    }
    return true
};