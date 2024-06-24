/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const getSqOfDigits = (num) => { //19
        let sq = 0 //81
        while(num > 0) {
            const rem = num%10
            sq += (rem * rem)
            num = Number.parseInt(num/10)
        }
        // console.log("sqqqq: ", sq)
        return sq
    }

    const set = new Set()
    while(!set.has(n)) {
        set.add(n)
        n = getSqOfDigits(n)
        if(n === 1) return true
    }
    return false


};