function arraysIntersection(arr1: number[], arr2: number[], arr3: number[]): number[] {
    let p = 0, q = 0, r = 0
    const res = []
    while(p < arr1.length && q < arr2.length && r < arr3.length) {
        if(arr1[p] === arr2[q] && arr2[q] === arr3[r]) {
            res.push(arr1[p])
            p++
            q++
            r++
        } else {
            const max = Math.max(arr1[p], arr2[q], arr3[r])
            if(arr1[p] < max) {
                p++
            }
            if(arr2[q] < max) {
                q++
            }
            if(arr3[r] < max) {
                r++
            }
        }
    }
    return res
};