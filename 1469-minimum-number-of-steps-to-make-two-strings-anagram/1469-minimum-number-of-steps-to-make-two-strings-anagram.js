/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const map = new Map()
    for(const ch of s) {
        map.set(ch, (map.get(ch)||0) + 1)
    }
    let count = 0
    for(const ch of t) {
        if(!map.has(ch)) {
            count++
            continue
        }
        map.set(ch, map.get(ch)-1)
        if(map.get(ch) === 0) {
            map.delete(ch)
        }
    }
    // console.log("map: ", map, " : ", map.size)
    return count === 0 ? map.size : count
};