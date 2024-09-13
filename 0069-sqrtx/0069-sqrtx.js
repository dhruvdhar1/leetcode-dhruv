/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l=1, r = x
    while(l <= r) {
        const mid = l + parseInt((r-l)/2)
        const sq = mid*mid
        if(sq === x) return mid
        else if(sq > x) {
            r = mid-1
        } else {
            l = mid+1
        }
    }
    return l-1
};