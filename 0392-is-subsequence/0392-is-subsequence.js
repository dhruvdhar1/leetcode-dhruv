/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    const backtrack = (str1, str2, p, q) => {
        if(p >= str1.length) return true
        if(q >= str2.length) return false

        if(str1[p] === str2[q]) {
            return backtrack(str1, str2, p+1, q+1)
        } 
        return backtrack(str1, str2, p, q+1)
    }

    return backtrack(s, t, 0, 0)
};