/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let l=0, r=0, res=0
    const map = new Map()
    while(r < s.length) {
        map.set(s[r], (map.get(s[r]) || 0) + 1)
        let f = -1
        for(const [key, val] of map) {
            f = Math.max(f, val)
        }
        if(r-l+1 - f <= k) {
            res = Math.max(res, r-l+1)
            r++
        } else {
            map.set(s[l], map.get(s[l]) - 1)
            map.set(s[r], (map.get(s[r]) || 0) - 1)
            l++
        }
    }
    return res 
};