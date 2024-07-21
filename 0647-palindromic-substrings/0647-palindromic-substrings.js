/**
 * @param {string} s
 * @return {number}
 */
function checkPalindrome(s, i, j) {
    while(i <= j) { 
        if(s[i] !== s[j]) {
            return false
        }
        i++
        j--
    }
    return true
}
var countSubstrings = function(s) {
    let res = 0
    for(let i=0; i<s.length; i++) {
        for(let j=i; j<s.length; j++) {
            const substr = s.slice(i, j+1)
            if(checkPalindrome(s, i, j)) {
                res++
            }
        }
    }
    return res
};