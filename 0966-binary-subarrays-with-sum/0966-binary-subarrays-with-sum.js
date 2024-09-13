/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    const map = new Map([[0,1]])
    let sum = 0, count = 0
    for(const num of nums) {
        sum += num
        const diff = sum - goal
        if(map.has(diff)) {
            count += map.get(diff)
        }
        map.set(sum, (map.get(sum) || 0) + 1)
    }
    return count
};