/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    const stack = []
    for(const ch of s) {
        if(ch === '(') {
            stack.push(ch)
        } else {
            if(stack.length > 0 && stack[stack.length-1] === '(') {
                stack.pop()
            } else {
                stack.push(ch)
            }
        }
    }
    return stack.length
};