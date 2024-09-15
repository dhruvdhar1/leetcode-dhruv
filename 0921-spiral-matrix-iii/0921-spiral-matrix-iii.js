/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    const directions = [[0,1], [1, 0], [0, -1], [-1,0]]
    let i = 0
    let r = rStart, c = cStart
    const res = []
    let steps = 1
    while(res.length < rows*cols) {
        for(j=0; j<2; j++) {
            dr = directions[i][0]
            dc = directions[i][1]
            for(let k=0; k<steps; k++) {
                if(r >= 0 && r < rows && c >= 0 && c < cols) {
                    res.push([r,c])
                }
                r += dr
                c += dc
            }
            i = (i+1)%4
        }
        steps++
    }
    return res
};