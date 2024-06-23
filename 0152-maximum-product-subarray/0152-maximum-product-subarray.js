/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = 1
    let min = 1
    let res = Math.max(...nums)
    for(let i=0; i<nums.length; i++) {
        const num = nums[i]
        const tempMax = max*num
        max = Math.max(num, max*num, min*num)
        console.log(max, " : ", tempMax)
        min = Math.min(num, tempMax, min*num)
        res = Math.max(res, min, max)
    }
    return res
};