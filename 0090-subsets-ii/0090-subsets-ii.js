/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function backtrack(nums, ind, curr, res) {
    if(ind >= nums.length) {
        res.push([...curr])
        return
    }
    curr.push(nums[ind])
    backtrack(nums, ind+1, curr, res)
    curr.pop()

    let k = 0
    while(nums[ind+k] === nums[ind]) {
        k++
    }
    backtrack(nums, ind+k, curr, res)
}
var subsetsWithDup = function(nums) {
    const set = []
    nums.sort((a,b) => a-b)
    backtrack(nums, 0, [], set)
    return set
};