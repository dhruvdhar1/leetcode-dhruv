/**
 * @param {number[]} nums
 * @return {boolean}
 */

 /**
  0  1  2  3  4   
 [2, 3, 1, 1, 4] .......
     l  r 
  0  1  2  3  4   
 [3, 2, 1, 0, 4]
l  .  .       r  
    
    0   1  2 
    [2, 0, 0]
    lr 
  */
var canJump = function(nums) {
    if(nums.length === 1) return true
    let r = nums.length-1, l = nums.length - 2
    while(l >= 0) {
        if(nums[l] + l >= r) {
            r = l
        }
        l--
    }
    return r <= 0
};