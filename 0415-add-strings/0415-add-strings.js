/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    if(num1.length > num2.length) {
        num2 = num2.padStart(num1.length, '0')
    } else if(num2.length > num1.length) {
        num1 = num1.padStart(num2.length, '0')
    }
    let carry = 0
    let arr = []
    for(let i=num1.length-1; i>=0; i--) {
        const int1 = parseInt(num1.charAt(i))
        const int2 = parseInt(num2.charAt(i))
        const sum = int1 + int2 + carry
        carry = parseInt(sum/10)
        const digit = sum%10
        arr.push(digit)
    }
    if(carry) {
        arr.push(carry)
    }
    // console.log(arr.reverse().join(''))
    // arr = arr.reverse()
    return arr.reverse().join('')
};