/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval)
    intervals.sort((a, b) => a[0] - b[0])
    const res = [intervals[0]]
    for(let i=1; i<intervals.length; i++) {
        const currInt = intervals[i]
        const last = res[res.length-1]
        if(currInt[0] <= last[1]) {
            const min = Math.min(currInt[0], last[0])
            const max = Math.max(currInt[1], last[1])
            res[res.length-1][0] = min
            res[res.length-1][1] = max
        } else {
            res.push(currInt)
        }
    }
    return res
};