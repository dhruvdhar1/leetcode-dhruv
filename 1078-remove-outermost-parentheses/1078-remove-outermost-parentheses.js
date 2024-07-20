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
            l = r+1
            open = 0
            close = 0
        } else {
            if(open > 1) {
                res += ch
            }
        }
        r++
    }
    return res
};