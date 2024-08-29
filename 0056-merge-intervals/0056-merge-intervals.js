/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((i1, i2) => i1[0] - i2[0])
    const res = [intervals[0]]
    // console.log("int: ",intervals)
    for(let i=1; i<intervals.length; i++) {
        const last = res[res.length-1]
        const curr = intervals[i]
        if(last[1] >= curr[0]) {
            const newInt = [ Math.min(last[0], curr[0]), Math.max(last[1], curr[1]) ]
            res.pop()
            res.push(newInt)
        } else {
            res.push(curr)
        }
    }
    
    return res
};