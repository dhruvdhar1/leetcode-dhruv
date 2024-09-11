/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    const intervals = [...firstList, ...secondList]
    intervals.sort((a,b)  => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]) //todo check for equality
    console.log("intr: ", intervals)
    const res = []
    for(let i=1; i<intervals.length; i++) {
        const intr1 = intervals[i-1]
        const intr2 = intervals[i]
        if(intr1[1] >= intr2[0]) {
            const x = Math.max(intr1[0], intr2[0])
            const y = Math.min(intr1[1], intr2[1])
            res.push([x,y])
        }
        intervals[i][1] = Math.max(intr1[1], intr2[1])
    }
    return res
};