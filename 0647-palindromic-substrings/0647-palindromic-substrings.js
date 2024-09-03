/**
 * @param {string} s
 * @return {number}
 */

const isPalindrome = (s, l, r) => {
    let count = 0
    while(l>=0 && r<s.length && s[l] === s[r]) {
        count++
        l--
        r++
    }
    return count
}
var countSubstrings = function(s) {
    let count = 0
    for(let i=0; i<s.length; i++) {
        const ch = s[i]
        const count1 = isPalindrome(s, i, i)
        const count2 = isPalindrome(s, i, i+1)
        count += (count1 + count2)
    }
    return count
};