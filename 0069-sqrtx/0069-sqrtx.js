/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 0 || x === 1) return x
    let l = 1, r = x

    while(l <= r) {
        const mid = l + Math.floor((r-l)/2)

        if(mid * mid === x) return mid
        if(mid * mid <= x) l = mid+1
        else {
            r = mid-1
        }
    }
    return l-1
};