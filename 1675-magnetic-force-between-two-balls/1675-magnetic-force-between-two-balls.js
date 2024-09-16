/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
function getBallCount(positions, m) {
    let count = 1, pivot = 0
    for(let i=1; i<positions.length; i++) {
        if(positions[i] - positions[pivot] >= m) {
            count++
            pivot = i
        }
    }
    return count
}
var maxDistance = function(position, m) {
    position.sort((a, b) => a-b)
    if(m === 2) {
        return position[position.length-1] - position[0]
    }
    let l=0, r = position[position.length-1]
    let ans = -1
    while(l <= r) {
        const mid = l + Math.floor((r-l)/2)
        const ballCount = getBallCount(position, mid)
        if(ballCount >= m) {
            l = mid + 1
            ans = mid
        } else {
            r = mid - 1
        }
    }
    return ans
};