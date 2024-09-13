/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function backtrack(nums, ind, curr, res) {
    // console.log("curr: ", curr)
    if(ind >= nums.length) {
        const temp = [...curr]
        temp.sort((a, b) => a-b)
        const str = temp.join(':')
        res.add(str)
        return
    }
    curr.push(nums[ind])
    backtrack(nums, ind+1, curr, res)
    curr.pop()
    backtrack(nums, ind+1, curr, res)
}
var subsetsWithDup = function(nums) {
    const set = new Set()
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