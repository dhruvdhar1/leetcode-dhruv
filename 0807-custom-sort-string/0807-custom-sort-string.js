/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const pq = new MinPriorityQueue({priority: obj => obj[1]})
    for(let i=0; i<order.length; i++) {
        const ch = order.charAt(i)
        pq.enqueue([ch, i])
    }
    const smap = new Map()
    for(let i=0; i<s.length; i++) {
        const ch = s.charAt(i)
        const f = smap.get(ch) || 0
        smap.set(ch, f+1)
    }
    const res = []
    while(pq.size() > 0) {
        const pop = pq.dequeue()
        const ch = pop.element[0]
        if(smap.has(ch)) {
            const f = smap.get(ch)
            for(let i=0; i<f; i++) {
                res.push(ch)
            }
            smap.delete(ch)
        }
    }
    for(const [key, val] of smap) {
        for(let i=0; i<val; i++) {
                res.push(key)
        }
    }
    return res.join('')
};