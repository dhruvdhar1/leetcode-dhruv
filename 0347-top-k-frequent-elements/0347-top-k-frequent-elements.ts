function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map()
    const arr = new Array(nums.length+1)
    for(const num of nums) {
        const f = map.get(num) || 0
        map.set(num, f+1)
    }
    for(const [key, val] of map) {
        arr[val] = (arr[val] || new Array())
        arr[val].push(key)
    }
    // console.log("arr: ", arr)
    const res = []
    for(let i = arr.length-1; i>=0; i--) {
        if(k === 0) break
        while(arr[i] && arr[i].length > 0 && k > 0) {
            res.push(arr[i].pop())
            k--
        }
    }

    return res
};