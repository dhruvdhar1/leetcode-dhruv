/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let number = 0
    let op = "+"
    let i=0
    const stack = []
    while(i<s.length) {
        const ch = s[i]
        if(ch.charCodeAt() >= 48 && ch.charCodeAt() <= 57) {
            number = number * 10 + Number(ch)
        }
        console.log("number: ", number)
        if(ch === "+" || ch === "-" || ch === "*" || ch === "/" || i === s.length-1) {
            if(op === '+') {
                stack.push(number)
            } else if(op === '-') {
                stack.push(-number)
            } else if(op === "*") {
                stack.push(stack.pop() * number)
            } else if(op === "/") {
                stack.push(parseInt(stack.pop() / number))
            }
            op = ch
            number = 0
        }
        i++
    }
    let res = 0;
    while (stack.length > 0) {
        res += stack.pop()
    }
    return res
};