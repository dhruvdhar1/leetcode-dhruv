/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let p = 0
    const map = new Map()
    
    for(let i=0; i<s.length; i++) {
        const ch = s[i]
        map.set(ch, i)
    }
    // console.log(map)
    const res = []
    while(p < s.length) {
        let windowSize = map.get(s[p])
        // console.log("ws: ", windowSize)
        let i=p
        while(i<windowSize) {
            windowSize = Math.max(windowSize, map.get(s[i]))
            i++
        }
        // console.log("ws: ", windowSize)
        res.push(windowSize - p + 1)
        p = windowSize + 1
    }
    return res
};