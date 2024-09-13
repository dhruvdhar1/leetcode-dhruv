/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const start = intervals.map(intr => intr[0])
    const end = intervals.map(intr => intr[1])
    start.sort((a, b) => a-b)
    end.sort((a, b) => a-b)

    let i=0, j=0, count = 0, maxCount = 0
    while(i < start.length && j < end.length) {
        if(start[i] < end[j]) {
            count++
            i++
        } else {
            count--
            j++
        }
        maxCount = Math.max(maxCount, count)
    }
    return maxCount
};