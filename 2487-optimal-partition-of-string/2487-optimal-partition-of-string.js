/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let parts = 1
    let map = new Map()
    for(let i=0; i<s.length; i++) {
        const ch = s[i]
        if(map.has(ch)) {
            parts++
            map = new Map()
        }
        map.set(ch, i)
    }
    return parts
};