/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let open = 0, close = 0
    let l=0, r=0
    let res = ""
    while(r < s.length) {
        const ch = s[r]
        if(ch === '(') {
            open++
        } else {
            close++
        }

        if(open === close) {
            res += s.slice(l+1, r)
            l = r+1
            open = 0
            close = 0
        }
        r++
    }
    return res
};