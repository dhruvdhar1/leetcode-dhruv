/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    let res = []
    let offset = 1
    const directions = [[0,1], [1, 0], [0,-1], [-1, 0]]
    let d = 0
    let r = rStart, c = cStart
    while(res.length < rows*cols) {
        for(let k=0; k<2; k++) {
            for(let i=0; i<offset; i++) {
                if(r >= 0 && r < rows && c >= 0 && c < cols) {
                    res.push([r, c])
                }
                const direction = directions[d]
                r += direction[0]
                c += direction[1]
            }
            d = (d+1) %4
        }
        offset++
    }
    return res
};
//offset = 3
//[1, 2, 3, 4, 5, 6, 7]