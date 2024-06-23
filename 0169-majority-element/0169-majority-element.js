/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map()
    for(const num of nums) {
        if(!map.has(num)) {
            map.set(num, 0)
        }
        const f = map.get(num)
        map.set(num, f+1)
    }

    for(const [key, val] of map) {
        if(val > Number.parseInt(nums.length/2)) {
            return key
        }
    }
};