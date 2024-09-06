const getStartInd = (nums: number[], target: number) => {
    let res = -1
    let l=0, r=nums.length-1

    while(l <= r) {
        const m = l + Math.trunc((r-l)/2)
        if(nums[m] === target) {
            res = m
            r = m-1
        } else if(nums[m] > target) {
            r = m-1
        } else {
            l = m+1
        }
    }
    return res
}

const getEndInd = (nums: number[], target: number) => {
    let res = -1
    let l=0, r=nums.length-1

    while(l <= r) {
        const m = l + Math.trunc((r-l)/2)
        if(nums[m] === target) {
            res = m
            l = m+1
        } else if(nums[m] > target) {
            r = m-1
        } else {
            l = m+1
        }
    }
    return res
}

function searchRange(nums: number[], target: number): number[] {
    const low = getStartInd(nums, target)
    const high = getEndInd(nums, target)
    // console.log(low, " : ", high)
    return [low, high]
};