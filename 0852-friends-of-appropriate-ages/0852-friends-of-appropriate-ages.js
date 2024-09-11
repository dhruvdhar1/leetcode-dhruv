/**
 * @param {number[]} ages
 * @return {number}
 */

function getLowerBound(arr, target) {
    let l = 0, r = arr.length-1
    while(l <= r) {
        const m = l + parseInt((r-l)/2)
        if(arr[m] <= target) {
            l = m+1
        } else {
            r = m-1
        }
    }
    return l
}
var numFriendRequests = function(ages) {
    let count = 0
    // let l = 0, r = ages.length-1
    ages.sort((a,b) => a-b)

    for(let x=0; x<ages.length; x++) {
        const l = getLowerBound(ages, (0.5*ages[x]+7))
        const u = getLowerBound(ages, ages[x])
        count += Math.max(u-l-1, 0)
    }
    return count
};