/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0
    const set = new Set(nums)
    let maxCount = 1
    for(const num of nums) {
        if(!set.has(num-1)) {
            let curr = num
            while(set.has(curr+1)) {
                curr+=1
            }
            maxCount = Math.max(maxCount, curr-num+1)
        }
    }
    return maxCount
};