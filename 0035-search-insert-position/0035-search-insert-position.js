/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l=0, r=nums.length-1

    while(l<r) {
        const mid = l + Number.parseInt((r-l)/2)
        if(nums[mid] === target) return mid
        else if(nums[mid] > target) {
            r = mid
        } else {
            l = mid+1
        }
    }
    if(nums[l] < target) return l+1
    else return l

};