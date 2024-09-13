/**
 * @param {string} s
 * @return {string}
 */
function palindrome(l, r, s) {
    while(l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
        l--
        r++
    }
    const ans = s.slice(l+1, r)
    // console.log("s: ", ans)
    return ans
}
var longestPalindrome = function(s) {
    let res = ""
    for(let i=0; i<s.length; i++) {
        const str1 = palindrome(i, i, s)
        const str2 = palindrome(i, i+1, s)
        if(str1.length > res.length) {
            res = str1
        }
        if(str2.length > res.length) {
            res = str2
        }
    }
    return res
};