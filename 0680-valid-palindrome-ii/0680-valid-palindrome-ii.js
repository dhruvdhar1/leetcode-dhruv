/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    const backtrack = (s, p, q, deleted) => {
        // console.log(p, " : ", q, " : deleted: ", deleted)
        if(q <= p) return true
        if(s[p] === s[q]) {
            // console.log("ch: ", s[p], " : ", p+1, " : ", q-1)
            return backtrack(s, p+1, q-1, deleted)
        } else {
            if(deleted) return false
            return backtrack(s, p+1, q, true) || backtrack(s, p, q-1, true)
        }
    }
    return backtrack(s, 0, s.length-1, false)
};