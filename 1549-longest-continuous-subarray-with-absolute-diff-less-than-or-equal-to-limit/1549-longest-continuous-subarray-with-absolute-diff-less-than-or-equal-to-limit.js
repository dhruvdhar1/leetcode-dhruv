/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let l=0, r=0, res=1
    const minQ = []
    const maxQ = []

    while(r < nums.length) {
        const num = nums[r]
        while(minQ.length > 0 && minQ[minQ.length-1] > num) minQ.pop()
        while(maxQ.length > 0 && maxQ[maxQ.length-1] < num) maxQ.pop()

        minQ.push(num)
        maxQ.push(num)

        while(maxQ[0] - minQ[0] > limit) {
            if(nums[l] === maxQ[0]) maxQ.shift()
            if(nums[l] === minQ[0]) minQ.shift()
            
            l++
        }
        res = Math.max(res, r-l+1)
        r++
    }
    return res
};