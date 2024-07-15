/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    const dp = new Map()
    const backtrack = (s, p, q, deleted) => {
        if(q <= p) return true
        const key = `${p}:${q}`
        if(dp.has(key)) return dp.get(key)
        let res = false
        if(s[p] === s[q]) {
            res = backtrack(s, p+1, q-1, deleted)
        } else {
            if(deleted) return false
            res = backtrack(s, p+1, q, true) || backtrack(s, p, q-1, true)
        }
        dp.set(key, res)
        return res
    }
    return backtrack(s, 0, s.length-1, false)
};