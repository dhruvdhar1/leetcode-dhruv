function findClosestElements(arr: number[], k: number, x: number): number[] {
    let l = 0, r = arr.length-k
    while(l<r) {
        const m = l + Math.floor((r-l)/2)
        if(x-arr[m] > arr[m+k]-x) {
            l = m+1
        } else {
            r = m
        }
    }
    return arr.slice(l, l+k)
};