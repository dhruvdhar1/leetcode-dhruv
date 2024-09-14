/**
    {
        2: [[1,1], [3,1]]
        3: [[4,1]][5, 1]
    }
    n=4, k=2
    maxHeap: [[1,1][3,1]]
    {
        1:1
        3:1
        4:1
    }

 */
var networkDelayTime = function(times, n, k) {
    const adj = new Map()
    const dists = new Map([[k, 0]])
    const visited = new Set()
    for(const time of times) {
        const src = time[0]
        const dest = time[1]
        const w = time[2]
        if(!adj.has(src)) {
            adj.set(src, [])
        }
        adj.get(src).push([dest, w])
    }
    console.log(adj)
    const pq = new MinPriorityQueue({priority: el => el[1]})
    pq.enqueue([k,0])
    while(pq.size() > 0) {
        const pop = pq.dequeue().element
        const node = pop[0]
        const w = pop[1]

        if(!dists.has(node) || dists.get(node) > w) {
            dists.set(node, w)
        }

        const neigh = adj.get(node) || []
        for(const n of neigh) {
            if(!visited.has(n[0])) {
                const newDist = w + n[1]
                pq.enqueue([n[0], newDist])
            }
        }
        visited.add(node)
    }
    if(dists.size != n) return -1
    return Math.max(...dists.values())
};