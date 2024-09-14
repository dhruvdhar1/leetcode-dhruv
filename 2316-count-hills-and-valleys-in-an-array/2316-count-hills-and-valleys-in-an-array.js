/**
              l     r 
    [2  4  1  1  6  5]
                 i


    count = 3
 */
var countHillValley = function(nums) {
    let count = 0
    for(let i=1; i<nums.length-1; i++) {
        let l = i-1, r = i+1
        if(nums[i] === nums[i-1]) continue

        while(l > 0 && nums[l] == nums[i]) l--
        while(r < nums.length-1 && nums[r] == nums[i]) r++

        if(nums[l] < nums[i] && nums[i] > nums[r]) count++
        else if(nums[l] > nums[i] && nums[i] < nums[r]) count++
    }

    return count
};