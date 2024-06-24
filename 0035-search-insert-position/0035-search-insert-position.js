/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l=0, r=nums.length-1

    while(l<r) {
        const mid = l + Number.parseInt((r-l)/2)
        console.log("mid: ", mid)
        if(nums[mid] === target) return mid
        else if(nums[mid] > target) {
            r = mid-1
        } else {
            l = mid+1
        }
    }
    if(nums[l] === target) return l
    if(l === nums.length-1) {
        if(target > nums[nums.length-1]) return l+1
        else return l
    }
    if(l === 0) {
        if(target < nums[0]) return 0
        else return 1
    }
    if(nums[l] > target) return l
    else if(nums[l] < target) return l+1

};