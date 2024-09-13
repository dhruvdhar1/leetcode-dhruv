/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let open = 0, close = 0
    for(const ch of s) {
        if(ch === '(') {
            open++
        } else {
            if(open > 0) {
                open--
            } else {
                close++
            }
        }
    }
    return open+close
};