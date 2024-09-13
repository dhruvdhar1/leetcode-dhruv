/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = []
    for(const ch of s) {
        if(ch === ']') {
            let str = ""
            let num = ""
            while(stack[stack.length-1] !== '[') {
                str = stack.pop() + str
            }
            stack.pop()
            while(stack[stack.length-1] >= '0' && stack[stack.length-1] <= '9') {
                // console.log(stack[stack.length-1])
                num = stack.pop() + num
            }
            console.log(str, ' : ', num)
            const seq = str.repeat(parseInt(num))
            stack.push(seq)
        } else {
            stack.push(ch)
        }
    }
    let res = ""
    while(stack.length > 0) {
        res = stack.pop() + res
    }
    return res
};