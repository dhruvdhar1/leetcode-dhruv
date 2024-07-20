/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let open=0
    let depth = 0
    for(const ch of s) {
        if(ch === '(') {
            open++
            depth = Math.max(depth, open)
        } else if(ch === ')') {
            open--
        }
    }
    return depth
};