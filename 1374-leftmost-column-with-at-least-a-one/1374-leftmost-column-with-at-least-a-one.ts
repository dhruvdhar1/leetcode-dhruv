/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * class BinaryMatrix {
 *      get(row: number, col: number): number {}
 *
 *      dimensions(): number[] {}
 * }
 */
function getLowerBound(rowInd, end, binaryMatrix) {
    let l = 0, r = end;
    while(l < r) {
        const mid = l + Math.floor((r-l)/2)
        if(binaryMatrix.get(rowInd, mid) === 1) {
            r = mid
        } else {
            l = mid+1
        }
    }
    console.log("l: ", l)
    return l
}
function leftMostColumnWithOne(binaryMatrix: BinaryMatrix) {
	const dim = binaryMatrix.dimensions()
    const row = dim[0]
    const col = dim[1]
    let minInd = col+1
    for(let i=0; i<row; i++) {
        const lowerBound = getLowerBound(i, col, binaryMatrix)
        minInd = Math.min(minInd, lowerBound)
    }
    // console.log(minInd, " : ", col+1)
    return minInd >= (col) ? -1 : minInd
};