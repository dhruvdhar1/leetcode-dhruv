function sortedSquares(nums: number[]): number[] {
    let l = 0, r = nums.length-1
    const res = new Array(nums.length)
    let p = nums.length-1
    while(l <= r) {
        if(Math.abs(nums[l]) > Math.abs(nums[r])) {
            res[p--] = nums[l] * nums[l]
            l++
        } else {
            res[p--] = nums[r] * nums[r]
            r--
        }
    }
    console.log(res)
    return res
};