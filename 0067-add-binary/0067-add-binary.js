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
        res = String(Math.floor(sum%2)) + res
        carry = Math.floor(sum/2)
    }
    if(carry) {
        res = '1' + res
    }
    return res
};