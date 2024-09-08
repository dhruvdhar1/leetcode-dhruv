function findPeakElement(nums: number[]): number {
    if(nums.length === 1 || nums[0] > nums[1]) {
        return 0
    } else if(nums[nums.length-1] > nums[nums.length-2]) {
        return nums.length-1
    }
    let l = 1, r = nums.length-2
    while(l < r) {
        const m = l + Math.floor((r-l)/2)
        if (nums[m-1] < nums[m] && nums[m+1] < nums[m]){
            return m
        } else if(nums[m-1] > nums[m]) {
            r = m-1
        } else {
            l = m+1
        }
    }
    return l
};