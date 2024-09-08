/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = []
    for(let i=0; i<s.length; i++) {
        const ch = s.charAt(i)
        if(ch !== ']') {
            stack.push(ch)
        } else {
            let str = ''
            let num = ''
            let i=0
            while(stack[stack.length-1] !== '[') {
                str = (stack.pop() + str)
            }
            stack.pop()
            while(stack[stack.length-1] >= '0' && stack[stack.length-1] <= '9') {
                num = (stack.pop() + num)
            }
            // console.log("num: ", num, " : ", str)
            const seq = str.repeat(parseInt(num))
            stack.push(seq)
        }
    }
    let res = ''
    while(stack.length > 0) {
        // console.log("ssss: ", stack)
        res = stack.pop() + res
    }
    return res
};