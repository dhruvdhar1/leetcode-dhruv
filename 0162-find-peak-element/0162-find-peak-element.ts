function findPeakElement(nums: number[]): number {
    let l = 0, r = nums.length-1
    while(l < r) {
        const m = l + Math.floor((r-l)/2)
        if(m === 0 && m === nums.length-1) {
            return m
        } else if(m === 0) {
            if(nums[m+1] < nums[m]) {
                return m
            } else {
                l = m+1
            }
        } else if (m === nums.length-1) {
            if(nums[m-1] < nums[m]) {
                return m
            } else {
                r = m-1
            }
        } else if (nums[m-1] < nums[m] && nums[m+1] < nums[m]){
            return m
        } else if(nums[m-1] > nums[m]) {
            r = m-1
        } else {
            l = m+1
        }
    }
    return l
};