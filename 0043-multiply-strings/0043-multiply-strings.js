/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 === '0' || num2 === '0') return '0'
    nums1 = num1.split('').reverse()
    nums2 = num2.split('').reverse()
    const res = new Array(num1.length + num2.length).fill(0)
    for(let i=0; i<nums1.length; i++) {
        for(let j=0; j<nums2.length; j++) {
            const digit = nums1[i] * nums2[j]
            res[i+j] += digit
            res[i+j+1] += parseInt(res[i+j]/10)
            res[i+j] = res[i+j]%10
        }
    }
    res.reverse()
    const str = res.join('')
    let i=0
    for(i=0; i<str.length; i++) {
        if(str.charAt(i) !== '0') {
            break
        }
    }
    return str.slice(i, str.length)
};