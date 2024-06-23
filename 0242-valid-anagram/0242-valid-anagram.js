/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    const mapS = new Map()
    const mapT = new Map()

    for(let i=0; i<s.length; i++) {
        const ch1 = s[i]
        const ch2 = t[i]
        if(!mapS.has(ch1)) {
            mapS.set(ch1, 0)
        }
        mapS.set(ch1, mapS.get(ch1)+1)

        if(!mapT.has(ch2)) {
            mapT.set(ch2, 0)
        }
        mapT.set(ch2, mapT.get(ch2)+1)
    }

    for(const [key, val] of mapS) {
        if(val !== mapT.get(key)){
            return false
        }
    }
    return true
};