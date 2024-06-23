/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    const mapS = new Map()

    for(let i=0; i<s.length; i++) {
        const ch1 = s[i]
        if(!mapS.has(ch1)) {
            mapS.set(ch1, 0)
        }
        mapS.set(ch1, mapS.get(ch1)+1)
    }

    for(let i=0; i<t.length; i++) {
        const ch = t[i]
        if(mapS.has(ch)) {
            mapS.set(ch, mapS.get(ch) - 1)
            if(mapS.get(ch) === 0) {
                mapS.delete(ch)
            }
        } else {
            return false
        }
    }
    console.log(mapS.length)
    return true
};