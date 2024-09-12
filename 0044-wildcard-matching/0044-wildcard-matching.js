/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

function backtrack(s, p, i, j, dp) {
    if(i > s.length && j > p.length) {
        return true
    }
    if(i > s.length || j > p.length) {
        return false
    }
    const key = `${i}:${j}`
    if(dp.has(key)) return dp.get(key)
    const ch1 = s.charAt(i)
    const ch2 = p.charAt(j)

    let res = false
    if(ch2 === '*') {
        res = backtrack(s, p, i+1, j, dp) || backtrack(s, p, i, j+1, dp) || backtrack(s, p, i+1, j+1, dp)
    } else if(ch2 === '?') {
        res = backtrack(s, p, i+1, j+1, dp)
    } else {
        if(ch1 === ch2) {
            res = backtrack(s, p, i+1, j+1, dp)
        } else {
            res = false
        }
    }
    dp.set(key, res)
    return res
}
var isMatch = function(s, p) {
    const dp = new Map()
    return backtrack(s, p, 0, 0, dp)
};