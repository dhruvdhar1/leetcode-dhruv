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
                arr[top][i] = count++
            }
            top++
        }

        if(right >= left) {
            for(let i=top; i<=bottom; i++) {
                arr[i][right] = count++
            }
            right--
        }

        if(bottom >= top) {
            for(let i=right; i>=left; i--) {
                arr[bottom][i] = count++
            }
            bottom--
        }
        if(left <= right) {
            for(let i=bottom; i>=top; i--) {
                arr[i][left] = count++
            }
            left++
        }
    }
    return arr

};