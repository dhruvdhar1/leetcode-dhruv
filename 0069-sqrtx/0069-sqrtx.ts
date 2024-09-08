function mySqrt(x: number): number {
    let l=1, r=x
    if(x === 1 || x === 0) return x
    while(l<=r) {
        const m = l + Math.floor((r-l)/2)
        const sq = m*m
        if(sq === x) {
            return m
        } else if(sq > x) {
            r = m-1
        } else {
            l = m+1
        }
    }
    return l-1
};