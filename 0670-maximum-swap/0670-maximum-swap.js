/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    const numArr = String(num).split("")
    const prefix = new Array(numArr.length)
    prefix[prefix.length-1] = prefix.length-1
    for(let i=numArr.length-2; i>=0; i--) {
        if(numArr[i] > numArr[prefix[i+1]]) {
            prefix[i] = i
        } else {
            prefix[i] = prefix[i+1]
        }
    }
    for(let i=0; i<numArr.length; i++) {
        if(numArr[i] < numArr[prefix[i]]) {
            const temp = numArr[i]
            numArr[i] = numArr[prefix[i]]
            numArr[prefix[i]] = temp
            break
        }
    }
    return +numArr.join("")
};