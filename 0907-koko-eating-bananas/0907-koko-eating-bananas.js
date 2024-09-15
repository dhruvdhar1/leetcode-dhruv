/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function canEat(piles, k, h) {
    let hours = 0
    for(let j=0; j<piles.length; j++) {
        hours += Math.ceil(piles[j]/k)
    }
    console.log("k: ", k, " : ", hours)
    if(hours <= h) {
        return true
    }
    return false
}
var minEatingSpeed = function(piles, h) {
    const maxK = 1e9//piles[piles.length-1]
    const sum = piles.reduce((acc, curr) => acc += curr, 0)
    let l = Math.ceil(sum/h), r = maxK
    let ans = -1
    while(l <= r) {
        const mid = Math.floor(l+(r-l)/2)
        if(canEat(piles, mid, h)) {
            r = mid-1
            ans = mid
        } else {
            l = mid+1
        }
    }
    return ans
};

//TC: nlogn + Max(arr)logn