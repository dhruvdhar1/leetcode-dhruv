/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function(s1, s2) {
    let xy = 0, yx=0
    let numx = 0, numy = 0
    for(let i=0; i<s1.length; i++) {
        const ch1 = s1[i]
        const ch2 = s2[i]
        if(ch1 === 'x') {
            numx++
        } else {
            numy++
        }
        if(ch2 === 'x') {
            numx++
        } else {
            numy++
        }
        if(ch1 === 'x' && ch2 === 'y') xy++
        else if(ch1 === 'y' && ch2 === 'x') yx++
    }
    
    // console.log(numx, " : ", numy)
    if(numx%2 !== 0 || numy%2 !== 0) return -1
    return parseInt(xy/2) + xy%2 + parseInt(yx/2) + yx%2
};