/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    const map = new Map()
    map.set(0, 0)
    for(const row of wall) {
        let sum = 0
        for(let i=0; i<row.length-1; i++) {
            sum += row[i]
            const f = map.get(sum) || 0
            map.set(sum, f+1)
        }
    }
    const maxVal= Math.max(...map.values())
    // console.log("max: ", maxVal)
    return wall.length-maxVal
};