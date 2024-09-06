/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const smap = new Map()
    for(let i=0; i<s.length; i++) {
        const ch = s.charAt(i)
        const f = smap.get(ch) || 0
        smap.set(ch, f+1)
    }
    const res = []
    for(let i=0; i<order.length; i++) {
        const ch = order[i]
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