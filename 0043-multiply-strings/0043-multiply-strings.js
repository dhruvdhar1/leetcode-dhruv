/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let maxlen = Math.max(num1.length, num2.length)
    num1 = num1.padStart(maxlen, '0')
    num2 = num2.padStart(maxlen, '0')

    const res = []
    let carry = 0
    maxlen=0
    for(let i = num2.length-1; i>=0; i--) {
        // console.log("i: ", i)
        const arr = []
        for(k=0; k<num2.length-i-1; k++) {
            arr.push(0)
        }
        for(let j=num1.length-1; j>=0; j--) {
            // console.log("j: ", j)
            const n1 = parseInt(num1.charAt(j))
            const n2 = parseInt(num2.charAt(i))
            const prod = n1 * n2 + carry
            carry = parseInt(prod/10)
            const n = prod%10
            arr.push(n)
        }
        if(carry) {
            arr.push(carry)
        }
        carry = 0
        arr.reverse()
        const str = arr.join('')
        maxlen = Math.max(maxlen, str.length)
        res.push(str)
    }
    for(let i=0; i<res.length; i++) {
        res[i] = res[i].padStart(maxlen, '0')
    }
    console.log(res)
    const sum = calcSum(res)
    const str = String(sum)
    let leadingzInd = 0
    for(let i=0; i<str.length-1; i++) {
        if(str.charAt(i) === '0') {
            leadingzInd++
        } else {
            break
        }
    }
    return str.slice(leadingzInd, str.length)
};

function calcSum(sums) {
    const res = []
    let carry = 0
    for(let i=sums[0].length-1; i>=0; i--) {
        let sum = carry
        for(let j=sums.length-1; j>=0; j--) {
            sum += parseInt(sums[j][i])
        }
        const n = sum%10
        carry = parseInt(sum/10)
        res.push(n)
    }
    if(carry) {
        res.push(carry)
    }
    res.reverse()
    return res.join('')
}