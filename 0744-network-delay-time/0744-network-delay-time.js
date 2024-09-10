/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const adj = new Map()
    const visited = new Set()
    const distance = new Map()
    const pq = new MinPriorityQueue({priority: el => el[1]})
    pq.enqueue([k, 0])
    for(const time of times) {
        const src = time[0]
        const dest = time[1]
        const w = time[2]

        if(!adj.has(src)) {
            adj.set(src, [])
        }
        adj.get(src).push([dest, w])
    }

    while(pq.size() > 0) {
        const pop = pq.dequeue().element
        const node = pop[0]
        const time = pop[1] //=== -1 ? 0 : pop[1]
        if(!distance.has(node) || distance.get(node) > time) {
            distance.set(node, time)
        }
        const neigh = adj.get(node) || []
        for(const n of neigh) {
            if(!visited.has(n[0])) {
                const dest = n[0]
                const weight = n[1]
                pq.enqueue([dest, time+weight])
            }
        }
        visited.add(node)
    }
    // console.log("dist: ", distance.values())
    if(distance.size != n) return -1
    return Math.max(...distance.values())
};