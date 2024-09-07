function longestConsecutive(nums: number[]): number {
    let maxCount = 0
    const map = new Map()
    for(const num of nums) {
        map.set(num, 1)
    }

    for(let i=0; i<nums.length; i++) {
        let num = nums[i]
        // console.log(map)
        if(map.has(num)) {
            let count = 0
            while(map.has(num)){
                count += map.get(num)
                map.delete(num)
                num -= 1
            }
            map.set(nums[i], count)
            maxCount = Math.max(maxCount, count)
        }
    }
    return maxCount
};