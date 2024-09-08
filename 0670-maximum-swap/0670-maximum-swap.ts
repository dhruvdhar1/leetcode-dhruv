function maximumSwap(num: number): number {
    const nums = String(num).split('')
    const greater = new Array(nums.length)
    greater[greater.length-1] = greater.length-1

    for(let i = nums.length-2; i>=0; i--) {
        if(nums[i] <= nums[greater[i+1]]) {
            greater[i] = greater[i+1]
        } else {
            greater[i] = i
        }
    }

    for(let i=0; i<greater.length; i++) {
        if(i != greater[i] && nums[i] != nums[greater[i]]) {
            const temp = nums[i]
            nums[i] = nums[greater[i]]
            nums[greater[i]] = temp
            break;
        }
    }
    return parseInt(nums.join(''))
};