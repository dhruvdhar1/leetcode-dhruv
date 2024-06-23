/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l=0, r=s.length-1

    while(l<r) {
        const lch = s[l]
        const rch = s[r]

        console.log("Lch: ", lch, "rch: ", rch)
        if(!((lch >= 'a' && lch <= 'z') || (lch >= 'A' && lch <= 'Z') || (lch >= '0' && lch <= '9'))) {

            l++
            continue
        }
        if(!((rch >= 'a' && rch <= 'z') || (rch >= 'A' && rch <= 'Z') || (rch >= '0' && rch <= '9'))) {

            r--
            continue
        }
        if(lch.toLowerCase() !== rch.toLowerCase()) return false
        l++
        r--
    }
    return true
};