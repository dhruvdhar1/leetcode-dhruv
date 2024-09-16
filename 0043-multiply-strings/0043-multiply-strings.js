/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
          1 
    n = "321"
    m = "654"

    res: 8 16 0 0 0 0 0 0 0
    prod: 15
    carry = 

1         1  
         "456"
         "123"
         1368
            x
 */
var multiply = function(num1, num2) {
    if(num1 === '0' || num2 === '0') return "0"
    const maxLen = Math.max(num1.length, num2.length)
    const n1 = num1.padStart(maxLen, '0').split('')
    const n2 = num2.padStart(maxLen, '0').split('')
    n1.reverse()
    n2.reverse()
    const res = new Array(n1.length * n2.length + 1).fill(0)
    for(let i=0; i<n1.length; i++) {
        for(let j=0; j<n2.length; j++) {
            const prod = parseInt(n1[i]) * parseInt(n2[j]) //18
            res[i+j] += prod
            const carry = Math.floor(res[i+j]/10)
            res[i+j] = res[i+j]%10
            res[i+j+1] += carry

        }
    }
    res.reverse()
    let i = 0
    for(i=0; i<res.length; i++) {
        if(res[i] != '0') {
            break
        }
    }
    return res.join('').slice(i)
};