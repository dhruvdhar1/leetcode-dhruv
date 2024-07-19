/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const dp = new Map()
    const backtrack = (i, j) => {
        if(i >= s.length && j >= p.length) {
            return true
        }
        if(j >= p.length) {
            return false
        }
        const key = `${i}:${j}`
        if(dp.has(key)) {
            return dp.get(key)
        }
        const match = i < s.length && (s[i] === p[j] || p[j] === ".")
        let res=null
        if(j+1 < p.length && p[j+1] === '*') {
           res = backtrack(i, j+2) || (match && backtrack(i+1, j))
        } else if(match) {
            res = backtrack(i+1, j+1)
        } else {
            res = false
        }
        dp.set(key, res)
        return res
    }

    return backtrack(0, 0)
};