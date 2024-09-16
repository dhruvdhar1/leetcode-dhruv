/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let count = 0
    let i = 1
    while(i < nums.length-1) {
        let l = i-1, r = i+1
        if(nums[i-1] === nums[i]) {
            i++
            continue
        }
        while(l > 0 && nums[l] == nums[i]) l--
        while(r < nums.length-1 && nums[r] == nums[i]) r++

        if(nums[l] < nums[i] && nums[r] < nums[i]) count++
        if(nums[l] > nums[i] && nums[r] > nums[i]) count++
        i++
    }
    return count
};