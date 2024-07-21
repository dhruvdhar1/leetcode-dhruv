/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let l=0, r=0, res=0
    const map = new Map()
    let maxF = 0
    while(r < s.length) {
        map.set(s[r], (map.get(s[r]) || 0) + 1)
        maxF = Math.max(maxF, map.get(s[r]))
        while(r-l+1 - maxF > k) {
            map.set(s[l], map.get(s[l]) - 1)
            l++
        }
        res = Math.max(res, r-l+1)
        r++
    }
    return res 
};