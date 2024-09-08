/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const maxLen = Math.max(num1.length, num2.length)
    num2 = num2.padStart(maxLen, '0')
    num1 = num1.padStart(maxLen, '0')
    let res = ''
    let carry = 0
    for(let i=num1.length-1; i>=0; i--) {
        const int1 = parseInt(num1.charAt(i))
        const int2 = parseInt(num2.charAt(i))
        const sum = int1 + int2 + carry
        const digit = sum%10
        res = digit + res
        carry = parseInt(sum/10)
    }
    if(carry) {
        res = carry + res
    }
    // return arr.reverse().join('')
    return res.toString()
};