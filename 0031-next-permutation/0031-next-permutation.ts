/**
 Do not return anything, modify nums in-place instead.
 */
const swap = (nums, i, j) => {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}
function nextPermutation(nums: number[]): void {
    const len = nums.length
    if(nums.length === 1) {
        return
    }
    //check last 2 elements
    if(nums[len-1] > nums[len-2]) {
        swap(nums, len-1, len-2)
        return
    }

    let pivot = -1
    for(let i=nums.length-1; i>=1; i--) {
        if(nums[i-1] < nums[i]) {
            pivot = i
            break
        }
    }
    // console.log("pivot: ", pivot)
    if(pivot === -1) {
        nums.reverse()
        return
    }
    const elInd = pivot-1
    let replaceInd = -1
    let replaceVal = Number.MAX_SAFE_INTEGER
    for(let i=pivot; i<nums.length; i++) {
        if(nums[i] > nums[elInd] && nums[i] < replaceVal) {
            replaceVal = nums[i]
            replaceInd = i
        }
    }
    swap(nums, elInd, replaceInd)
    // console.log("nums total: ", nums)
    const leftArr = nums.slice(0,pivot)
    const rightArr = nums.slice(pivot, len)
    rightArr.sort((a,b) => a-b)
    let i=0;
    while(pivot+i < len) {
        nums[pivot+i] = rightArr[i]
        i++
    }
    // console.log("right: ", rightArr)

};