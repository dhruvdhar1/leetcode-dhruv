/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    const map = new Map()
    const stack = []
    for(let i=0; i<s.length; i++) {
        if(s[i] === '(') {
            stack.push(i)
        } else if(s[i] === ')'){
            const j = stack.pop()
            map.set(i,j)
            map.set(j,i)
        }
    }
    let res = ""
    let i=0, increment = 1
    while(i < s.length) {
        const ch = s[i]
        if(ch === '(' || ch === ')') {
            i = map.get(i)
            increment = -increment
        } else {
            res += s[i]
        }
        i += increment
    }
    return res
};