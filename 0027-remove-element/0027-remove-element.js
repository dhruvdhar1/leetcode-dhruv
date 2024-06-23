/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let l=0, r=0
    let flag = false
    while(r < nums.length) {
        if(nums[l] === val) {
            flag = true
            while(r < nums.length-1 && nums[r] === val) {
                r++
            }
            if(nums[r] === val) break
            //swap non val at r with val at l
            const temp = nums[l]
            nums[l] = nums[r]
            nums[r] = temp
            l++
            r++
        } else {
            l++
            r = l
        }
    }
    const res = flag ? l : l+1
    console.log("L: ", res)
    return res
};