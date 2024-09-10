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
    const visited = new Set()
    visited.add(start_node)
    for(let i=0; i<edges.length; i++) {
        const edge = edges[i]
        const s = edge[0]
        const d = edge[1]
        const prob = succProb[i]
        if(!adj.has(s)) {
            adj.set(s, [])
        }
        if(!adj.has(d)) {
            adj.set(d, [])
        }
        adj.get(s).push([d, prob])
        adj.get(d).push([s, prob])
    }

    const pq = new MaxPriorityQueue({ priority: node => node[1]})
    pq.enqueue([start_node, 1])

    while(pq.size() > 0) {
        const pop = pq.dequeue().element
        const node = pop[0]
        const prob = pop[1]
        if(node === end_node) {
            return prob
        }
        const neigh = adj.get(node) || []
        for(const n of neigh) {
            if(!visited.has(n[0])) {
                pq.enqueue([n[0], (prob*n[1])])
            }
        }
        visited.add(node)
    }
    return 0
};