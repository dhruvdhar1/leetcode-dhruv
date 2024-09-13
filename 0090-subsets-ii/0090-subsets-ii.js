/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function backtrack(nums, ind, curr, res) {
    // console.log("curr: ", curr)
    if(ind >= nums.length) {
        // const temp = [...curr]
        const str = curr.join(':')
        res.add(str)
        return
    }
    backtrack(nums, ind+1, [...curr, nums[ind]], res)
    backtrack(nums, ind+1, [...curr], res)
}
var subsetsWithDup = function(nums) {
    const set = new Set()
    nums.sort((a,b) => a-b)
    backtrack(nums, 0, [], set)
    const res = []
    // console.log(set)
    for(const str of set) {
        if(str === '') {
            res.push([])
        } else {
            const arr = str.split(':')
            res.push(arr)
        }
    }
    return res
};