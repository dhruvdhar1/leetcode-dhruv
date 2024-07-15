/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    const stack = []
    for(let i=0; i<s.length; i++) {
        const ch = s[i]
        // console.log("---- ", stack)
        if(ch === ')' && stack[stack.length-1] === '(') {
            stack.pop()
        } else {
            stack.push(ch)
        }
    }
    return stack.length
};