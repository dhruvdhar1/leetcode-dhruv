/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * class BinaryMatrix {
 *      get(row: number, col: number): number {}
 *
 *      dimensions(): number[] {}
 * }
 */

function leftMostColumnWithOne(binaryMatrix: BinaryMatrix) {
	const dim = binaryMatrix.dimensions()
    const r = dim[0]
    const c = dim[1]
    let i=r-1, j=c-1
    let minCol = c
    while(i >= 0 && j >= 0) {
        if(binaryMatrix.get(i,j) === 1) {
            minCol = j
            j--
        } else {
            i--
        }
    }
    return minCol>=c ? -1 : minCol
};