/**
 * @param {string} s
 * @return {number}
 */
function checkPalindrome(s, l, r) {
    let count = 0
    while(l >= 0 && r<s.length && s[l] === s[r]) { 
        count++
        l--
        r++
    }
    return count
}
var countSubstrings = function(s) {
    let res = 0
    for(let i=0; i<s.length; i++) {
        const size1 = checkPalindrome(s, i, i)
        const size2 = checkPalindrome(s, i, i+1)
        res += (size1+size2)
    }
    return res
};