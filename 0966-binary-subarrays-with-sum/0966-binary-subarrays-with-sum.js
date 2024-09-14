/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
function helper(x, nums, goal) {
    if(x < 0) return 0

    let l=0, res=0, sum=0
    for(let r=0; r<nums.length; r++) {
        sum += nums[r]
        while(sum > x) {
            sum -= nums[l]
            l++
        }
        res += (r-l+1)
    }
    return res
}
var numSubarraysWithSum = function(nums, goal) {
    return helper(goal, nums, goal) - helper(goal-1, nums, goal)
};