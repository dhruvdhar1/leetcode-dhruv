/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = ""
    const even = s.length%2==0
    for(let i=0; i<s.length; i++) {
        const str2 = isPalindrome(s, i, i)
        const str1 = isPalindrome(s, i, i+1)
        const str = str1.length > str2.length ? str1 : str2
        if(str.length > res.length) {
            res = str
        }
    }
    return res
};

function isPalindrome(s, l, r) {
    let res = ""
    while(l >= 0 && r < s.length && s[l] === s[r]) {
        res = s.slice(l, r+1)
        l--
        r++
    }
    console.log("res: ", res)
    return res
}