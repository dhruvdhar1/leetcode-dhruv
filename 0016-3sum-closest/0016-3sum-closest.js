/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a-b)
    let sum = 0
    let diff = Number.MAX_SAFE_INTEGER
    for(let i=0; i<nums.length; i++) {
        const num = nums[i]
        let l = i+1,  r = nums.length-1

        while(l < r) {
            const currsum = num + nums[l] + nums[r]
            if(Math.abs(currsum-target) < diff) {
                diff = Math.abs(currsum-target)
                sum = currsum
            }
            if(currsum < target) {
                l++
            } else {
                r--
            }
        }
    }
    return sum
};