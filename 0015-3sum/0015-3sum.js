/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = []
    nums.sort((a,b) => a-b)
    for(let i=0; i<nums.length; i++) {
        let l = i+1, r=nums.length-1
        if(i > 0 && nums[i] == nums[i-1]) continue
        while(l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if(sum === 0) {
                res.push([nums[i], nums[l], nums[r]])
                l++
                while(nums[l] === nums[l-1] && l<r) {
                    l++
                }
            } else if(sum > 0) {
                r -= 1
            } else {
                l +=1
            }
        }
    }
    return res
};