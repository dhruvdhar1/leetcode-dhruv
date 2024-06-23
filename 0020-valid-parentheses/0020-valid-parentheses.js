/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []

    for(let i=0; i<s.length; i++) {
        const ch = s[i]
        if(ch === ')' || ch === '}' || ch ===']') {
            const pop = stack.pop()
            if(ch === ')' && pop !== '(') {
                return false
            } else if(ch === '}' && pop !== '{') {
                return false
            } else if(ch === ']' && pop !== '[') {
                return false
            }
        } else {
            stack.push(ch)
        }
    }
    return stack.length === 0
};