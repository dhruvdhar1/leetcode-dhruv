/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const backtrack = (i, j) => {
        if(i >= s.length && j >= p.length) {
            return true
        }
        if(j >= p.length) {
            return false
        }

        const match = i < s.length && (s[i] === p[j] || p[j] === ".")
        if(j+1 < p.length && p[j+1] === '*') {
           return backtrack(i, j+2) || (match && backtrack(i+1, j))
        }
        if(match) {
            return backtrack(i+1, j+1)
        } else {
            return false
        }
    }

    return backtrack(0, 0)
};