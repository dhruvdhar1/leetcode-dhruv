/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map()
    let p = 0
    while(p < nums.length) {
        const num = nums[p]
        if(map.has(num)) {
            const prevIndex = map.get(num)
            if(Math.abs(p - prevIndex) <= k) {
                return true
            }
            map.set(num, p)


        } else {
            map.set(num, p)
        }
        p++
    }
    return false
};