/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */

var maxProbability = function(n, edges, succProb, start_node, end_node) {
    const adj = new Map()
    for(let i=0; i<edges.length; i++) {
        const edge = edges[i]
        const src = edge[0]
        const dest = edge[1]
        if(!adj.has(src)) {
            adj.set(src, [])
        }
        if(!adj.has(dest)) {
            adj.set(dest, [])
        }
        adj.get(src).push([dest, succProb[i]])
        adj.get(dest).push([src, succProb[i]])
    }
    const visited = new Set()
    const pq = new MaxPriorityQueue({ priority: el => el[1]})
    pq.enqueue([start_node, 1])
    while(pq.size() > 0) {
        const pop = pq.dequeue().element
        const node = pop[0]
        const p = pop[1]
        if(node === end_node) {
            return p
        }
        const neigh = adj.get(node) || []
        for(const n of neigh) {
            if(!visited.has(n[0])) {
                const child  = n[0]
                const newProb = n[1] * p
                pq.enqueue([child, newProb])
            }
        }
        visited.add(node)
    }
    return 0
};