/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const charArr = []
    for(let i=0; i<s.length; i++) {
        const ch = s[i]
        if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9')) {
            charArr.push(ch.toLowerCase())
        }
    }
    const str = charArr.join('')
    const rev = charArr.reverse().join('')
    return str === rev
};