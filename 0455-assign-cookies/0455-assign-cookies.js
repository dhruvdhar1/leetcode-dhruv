/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a-b)
    s.sort((a, b) => a-b)

    let p1=0, p2=0
    let count = 0
    while(p1 < g.length && p2 < s.length) {
        if(s[p2] >= g[p1]) {
            count++
            p1++
            p2++
        } else {
            p2++
        }
    }
    return count
};