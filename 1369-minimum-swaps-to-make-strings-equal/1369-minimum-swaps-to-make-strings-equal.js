/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function(s1, s2) {
    const map = new Map()
    const concat = s1+s2
    for(const ch of concat) {
        if(!map.has(ch)) {
            map.set(ch, 0)
        }
        const freq = map.get(ch)
        map.set(ch, freq+1)
    }
    for(const [key, val] of map) {
        if(val%2 !== 0) return -1
    }
    let xy = 0, yx=0
    for(let i=0; i<s1.length; i++) {
        const ch1 = s1[i]
        const ch2 = s2[i]
        if(ch1 === "x" && ch2 === "y") xy++
        else if(ch1 === "y" && ch2 === "x") yx++
    }
    return parseInt(xy/2) + xy%2 + parseInt(yx/2) + yx%2
};