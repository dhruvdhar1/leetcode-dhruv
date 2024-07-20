/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
    const arr = new Array(rowSum.length)
    for(let i=0; i<arr.length; i++) {
        arr[i] = new Array(colSum.length)
    }

    for(let i=0; i<rowSum.length; i++) {
        for(let j=0; j<colSum.length; j++) {
            const minSum = Math.min(rowSum[i], colSum[j])
            arr[i][j] = minSum
            rowSum[i] -= minSum
            colSum[j] -= minSum
        }
    }

    return arr
};