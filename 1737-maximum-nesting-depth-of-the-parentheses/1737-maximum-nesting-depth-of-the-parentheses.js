/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    const stk = []
    let depth = 0
    for(const ch of s) {
        if(ch === '(') {
            stk.push(ch)
            depth = Math.max(depth, stk.length)
        } else if(ch === ')') {
            stk.pop()
        }
    }
    return depth
};