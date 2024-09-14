/**
 * @param {number[]} ages
 * @return {number}
 */

function upper_bound(start, end, ages, target) {
    let l = start, r = end
    while(l <= r) {
        const m = l + parseInt((r-l)/2)
        if(ages[m] <= target) {
            l = m+1
        } else {
            r = m-1
        }
    }
    return l
}
var numFriendRequests = function(ages) {
    // ages.push(16)
    let count = 0
    ages.sort((a,b) => a-b)
    for(let i=0; i<ages.length; i++) {
        // if(ages[i] === ages[i+1]) continue
        const x = upper_bound(0, ages.length-1, ages, 0.5*ages[i]+7)
        const y = upper_bound(0, ages.length-1, ages, ages[i])
        // console.log("x: ", x, " : y: ", y)
        count += Math.max(y-x-1,0)
    }
    return count
};