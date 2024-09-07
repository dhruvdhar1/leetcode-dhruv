function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map()
    for(const num of nums) {
        const f = map.get(num) || 0
        map.set(num, f+1)
    }
    console.log("map: ", map)
    const pq = new MaxPriorityQueue({priority: pair => pair[1]})
    for(const [key, f] of map) {
        pq.enqueue([key, f])
    }
    const res = []
    while(k > 0) {
        const pop = pq.dequeue()
        // console.log("pop: ", pop)
        res.push(pop.element[0])
        k--
    }
    return res
};