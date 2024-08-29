/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let binX = x.toString(2)
    let binY = y.toString(2)
    const numPad = Math.abs(binX.length - binY.length);
    const padding = "0".repeat(numPad)

    if(binX.length > binY.length) {
        binY = `${padding}${binY}`
    } else {
        binX = `${padding}${binX}`
    }
    let count = 0
    for(let i=0; i<binX.length; i++) {
        if(binX[i] !== binY[i]) {
            count++
        }
    }
    return count
};  