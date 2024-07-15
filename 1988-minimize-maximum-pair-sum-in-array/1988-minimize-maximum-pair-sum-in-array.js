/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    let l = 0
    let r = nums.length-1
    nums.sort((a, b) => a-b)
    const sum = []
    while(l < r) {
        sum.push(nums[l] + nums[r])
        l++
        r--
    }
    return Math.max(...sum)
};