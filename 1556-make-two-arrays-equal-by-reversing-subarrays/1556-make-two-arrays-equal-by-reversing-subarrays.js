/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    const map = new Map()
    for(const t of target) {
        const f = map.get(t) || 0
        map.set(t, f+1)
    }
    for(const num of arr) {
        if(!map.has(num)) return false
        const f = map.get(num)
        map.set(num, f-1)
        if(map.get(num) === 0) {
            map.delete(num)
        }
    }
    return map.size === 0
};