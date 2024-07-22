/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const arr = new Array(nums.length+1)
    const map = new Map()
    for(const num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    for(const [key, val] of map) {
        arr[val] = (arr[val] || new Array())
        arr[val].push(key)
    }
    // console.log("----arr: ", arr)
    const res = []
    for(let i=arr.length-1; i>=0; i--) {
        if(k == 0) break
        while(arr[i] && arr[i].length > 0 && k > 0) {
            // console.log("----: ", arr[i])
            res.push(arr[i].pop())
            k--
        }
    }
    return res
};