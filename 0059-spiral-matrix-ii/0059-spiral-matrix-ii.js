/**
 * @param {number} n
 * @return {number[][]}

 1  2   3
 8  9   4
 7  6   5

 3
i = 1
1   2   3
8   9   4
7   6   5

top=2, bottom=1
left=1  right=1

[1, 2 3]
 8  9   4
7   6  5
 */
var generateMatrix = function(n) {
    const arr = new Array(n)
    for(let i=0; i<arr.length; i++) {
        arr[i] = new Array(n).fill(0)
    }
    let left=0, right=n-1
    let top=0, bottom=n-1
    let count = 1
    while(count <= n*n) {

        if(top <= bottom) {
            for(let i=left; i<=right; i++) {
                console.log(top, i, count)
                arr[top][i] = count++
                // console.log(count-1)
            }
            top++
        }

        if(right >= left) {
            for(let i=top; i<=bottom; i++) {
                console.log("d: ", i, right, count)
                arr[i][right] = count++
                // console.log(count-1)
            }
            right--
        }

        // if(bottom <= top) {
            for(let i=right; i>=left; i--) {
                console.log("b: ", bottom, i, count)
                arr[bottom][i] = count++
                // console.log(count-1)
            }
            bottom--
        // }
        if(left <= right) {
            for(let i=bottom; i>=top; i--) {
                console.log("le: ", i, left, count)
                arr[i][left] = count++
                // console.log(count-1)
            }
            left++
        }
    }
    console.log(arr)
    return arr

};