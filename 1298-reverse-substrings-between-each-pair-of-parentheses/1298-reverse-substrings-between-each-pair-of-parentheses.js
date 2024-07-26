/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    const stack = []
    const res = []
    for(const ch of s) {
        if(ch === ')') {
            while(stack[stack.length-1] !== '(') {
                const pop = stack.pop()
                res.push(pop)
            }
            stack.pop() //pop the last opening brace
            while(res.length > 0) {
                stack.push(res.shift())
            }
        } else {
            stack.push(ch)
        }
    }
    return stack.join("")
};