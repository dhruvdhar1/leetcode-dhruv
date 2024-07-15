/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    let sum = arr.reduce((acc, curr) => {
        acc += curr
        return acc
    }, 0)
    // console.log("----sum: ", sum)
    if(sum%3 !== 0) return false

    let count = 0
    const partSize = sum/3
    let currSum = 0
    for(let i=0; i<arr.length; i++) {
        currSum += arr[i]
        if(currSum === partSize) {
            currSum = 0
            count++
        }
    }
    return count >= 3
};