function subarraySum(nums: number[], k: number): number {
    const map = new Map([[0,1]])
    let sum = 0
    let count = 0
    for(const num of nums) {
        sum += num
        const diff = sum-k
        if(map.has(diff)) {
            count += map.get(diff)
        } 
        if(map.has(sum)) {
            const f = map.get(sum) || 0
            map.set(sum, f+1)
        } else {
            map.set(sum, 1)
        }
    }
    return count
};