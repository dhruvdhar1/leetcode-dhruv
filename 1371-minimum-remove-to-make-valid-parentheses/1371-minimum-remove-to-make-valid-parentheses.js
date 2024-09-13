/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const arr = s.split('')
    const stack = []
    for(let i=0; i<arr.length; i++) {
        const ch = arr[i]
        if(ch === '(') {
            stack.push(i)
        } else if(ch === ')') {
            if(stack.length > 0) {
                stack.pop()
            } else {
                arr[i] = ''
            }
        }
    }
    while(stack.length > 0) {
        const ind = stack.pop()
        arr[ind] = ''
    }
    return arr.join('')
};