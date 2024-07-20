/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let str = ""
    let flag = false
    const numstr = String(num)
    for(let i=numstr.length-1; i>=0; i--) {
        const digit = numstr[i].charCodeAt(0) - 48
        if(digit%2 !== 0) {
            flag = true
        }
        if(flag) {
            str = digit + str
        }
    }
    return str
};