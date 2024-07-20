/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const map = new Map()
    const arr = []
    for(const ch of s) {
        if(!map.has(ch)) {
            map.set(ch, 0)
        }
        map.set(ch, map.get(ch) + 1)
    }

    for(const [key, val] of map) {
        arr.push([key, val])
    }
    arr.sort((a, b) => b[1]-a[1])

    const str = arr.reduce((acc, curr) => {
        const ch = curr[0]
        const f = curr[1]
        acc += ch.repeat(f)
        return acc
    }, "")
    return str
};