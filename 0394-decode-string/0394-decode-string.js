/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = []
    for(let i=0; i<s.length; i++) {
        const ch = s.charAt(i)
        if(ch === ']') {
            let num = ''
            let str = ''
            while(stack[stack.length-1] != '[') {
                str = stack.pop() + str
            }
            stack.pop()
            while(stack[stack.length-1] >= '0' && stack[stack.length-1] <= '9') {
                num = stack.pop() + num
            }
            const seq = str.repeat(parseInt(num))
            console.log(seq)
            stack.push(seq)
        } else {
            stack.push(ch)
        }
    }
    let res = ''
    while(stack.length > 0) {
        res = stack.pop() + res
    }
    return res
};