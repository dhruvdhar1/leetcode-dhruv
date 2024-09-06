function reverse(x: number): number {
    let rev = 0
    let MIN = Math.pow(-2, 31)
    let MAX = Math.pow(2, 31) - 1
    while(x != 0) {
        const rem = x%10
        x = Math.trunc(x/10)

        if(rev > Math.trunc(MAX/10) || (rev === Math.trunc(MAX/10) && rem >= MAX%10)) {
            return 0
        } else if(rev < Math.trunc(MIN/10) || (rev === Math.trunc(MIN/10) && rem <= MIN%10)) {
            return 0
        }

        rev = rev*10 + rem
    }
    return rev
};