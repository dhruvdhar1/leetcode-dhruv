/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    const visited = new Set()
    visited.add(0)
    const adj = new Map()
    for(const edge of edges) {
        const src = edge[0]
        const dest = edge[1]
        if(!adj.has(src)) {
            adj.set(src, [])
        }
        if(!adj.has(dest)) {
            adj.set(dest, [])
        }
        adj.get(src).push(dest)
        adj.get(dest).push(src)
    }
    // console.log(adj)
    const q = new Queue([[0,-1]])
    while(q.size() > 0) {
        const pop = q.dequeue()
        // console.log("ppp: ", pop)
        const node = pop[0]
        const parent = pop[1]

        const neigh = adj.get(node) || []
        // console.log(node, " : ", neigh)
        for(const n of neigh) {
            if(!visited.has(n)) {
                visited.add(n)
                q.enqueue([n, node])
            } else {
                if(parent != n) {
                    return false
                }
            }
        }
        visited
    }
    // return true
    return visited.size === n
};