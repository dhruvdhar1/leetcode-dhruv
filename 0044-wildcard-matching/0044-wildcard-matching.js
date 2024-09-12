/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// TC: O(m.n)
// SC: O(m.n)
function backtrack(s, p, i, j, dp) {
    if(i > s.length && j > p.length) {
        return true
    }
    if(i > s.length || j > p.length) {
        return false
    }
    if(dp[i][j] !== null) return dp[i][j]
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
    dp[i][j] = res
    return res
}
var isMatch = function(s, p) {
    const dp = new Array(s.length+1)
    for(let i=0; i<dp.length; i++) {
        dp[i] = new Array(p.length+1).fill(null)
    }
    return backtrack(s, p, 0, 0, dp)
};