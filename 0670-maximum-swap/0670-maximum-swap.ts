function maximumSwap(num: number): number {
    const map = new Map()
    const nums = String(num).split('')

    for(let i=0; i<nums.length; i++) {
        map.set(parseInt(nums[i]), i)
    }

    for(let i=0; i<nums.length; i++) {
        const num = parseInt(nums[i])
        for(let j=9; j>num; j--) {
            if(map.has(j) && map.get(j) > i) {
                const ind = map.get(j)
                const temp = nums[i]
                nums[i] = nums[ind]
                nums[ind] = temp
                return parseInt(nums.join(''))
            }
        }
    }
    return parseInt(nums.join(''))
};