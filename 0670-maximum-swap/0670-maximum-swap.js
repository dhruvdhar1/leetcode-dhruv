/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    const nums = String(num).split("")
    const map = new Map();

    for(let i=0; i<nums.length; i++) {
        map.set(+nums[i], i)
    }
    for(let i=0; i<nums.length; i++) {
        for(j=9; j>nums[i]; j--) {
            if(map.has(j) && map.get(j) > i) {
                const temp = nums[i]
                nums[i] = j
                nums[map.get(j)] = temp
                return +nums.join("")
            }
        }
    }
    return num
};