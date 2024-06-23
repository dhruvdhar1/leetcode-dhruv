/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const post = []
    const pre = []
    const res = []
    for(let i=0; i<nums.length; i++) {
        if(i === 0) {
            pre.push(1)
        } else {
            pre.push(nums[i-1] * pre[i-1])
        }
    }
    let j=0
    for(let i=nums.length-1; i>=0; i--) {
        if(i === nums.length-1) {
            post.push(1)
        } else {
            post.push(nums[i+1] * post[j++])
        }
    }
    j=nums.length-1
    for(i=0; i<nums.length; i++) {
        res.push(pre[i] * post[j--])
    }
    return res
};