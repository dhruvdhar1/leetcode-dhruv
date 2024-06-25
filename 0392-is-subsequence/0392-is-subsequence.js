/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let p=0

    for(let q=0; q<t.length; q++) {
        if(s[p] === t[q]) {
            p++
        }
    }
    return p >= s.length
};