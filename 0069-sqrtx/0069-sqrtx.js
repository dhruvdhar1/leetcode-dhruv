/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 0 || x === 1) return x
    let l = 1, r = x

    while(l < r) {
        const mid = l + parseInt((r-l)/2)
        console.log(mid)
        if(mid * mid === x) return mid
        if(mid * mid < x) l = r+1
        else {
            r = mid-1
        }
    }
    return r-1
};