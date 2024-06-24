/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map = new Map()
    for(let i=0; i<s.length; i++) {
        const ch1 = s[i]
        const ch2 = t[i]
        if(map.has(ch1)) {
            if(ch2 !== map.get(ch1)) return false
        } else {
            map.set(ch1, ch2)
        }
    }
    return new Set([...map.values()]).size === map.size
};