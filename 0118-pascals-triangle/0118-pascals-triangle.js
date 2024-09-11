/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const res = [[1]]

    while(res.length < numRows) {
        const lastRow = res[res.length-1]
        const arr = new Array(lastRow.length+1)
        arr[0] = lastRow[0]
        arr[arr.length-1] = lastRow[lastRow.length-1]

        for(let i=1; i<lastRow.length; i++) {
            arr[i] = lastRow[i] + lastRow[i-1]
        }
        res.push(arr)
    }
    return res
};