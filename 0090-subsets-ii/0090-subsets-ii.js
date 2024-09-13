/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function backtrack(nums, ind, curr, res) {
    if(ind >= nums.length) {
        res.push(curr)
        return
    }
    backtrack(nums, ind+1, [...curr, nums[ind]], res)
    let k = 0
    while(nums[ind+k] === nums[ind]) {
        k++
    }
    backtrack(nums, ind+k, [...curr], res)
}
var subsetsWithDup = function(nums) {
    const set = []
    nums.sort((a,b) => a-b)
    backtrack(nums, 0, [], set)
    const res = []
    // console.log(set)
    // for(const str of set) {
    //     if(str === '') {
    //         res.push([])
    //     } else {
    //         const arr = str.split(':')
    //         res.push(arr)
    //     }
    // }
    return set
};