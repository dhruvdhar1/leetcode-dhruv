/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // 1+1 = 10, 1+0=1, 0+1 = 1, 0+0=0, 1+1+1 = 11
    const maxlen = Math.max(a.length, b.length)
    a = a.padStart(maxlen, '0')
    b = b.padStart(maxlen, '0')
    
    let res = ''
    let carry = 0
    for(let i=a.length-1; i>=0; i--) {
        const n1 = parseInt(a.charAt(i))
        const n2 = parseInt(b.charAt(i))
        const sum = n1 + n2 + carry
        if(sum === 3) {
            carry = 1
            res = '1' + res
        } else if(sum === 2) {
            carry = 1
            res = '0' + res
        } else if(sum === 1) {
            carry = 0
            res = '1' + res
        } 
        else { 
            carry = 0
            res = '0' + res
        }
    }
    if(carry) {
        res = '1' + res
    }
    return res
};