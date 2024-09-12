function arraysIntersection(arr1: number[], arr2: number[], arr3: number[]): number[] {
    let set = new Set(arr1)
    let res = []
    for(const num of arr2) {
        if(set.has(num)) {
            res.push(num)
        }
    }
    set = new Set(res)
    res = []
    for(const num of arr3) {
        if(set.has(num)) {
            res.push(num)
        }
    }
    return res
};