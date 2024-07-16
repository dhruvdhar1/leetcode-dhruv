/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const left = []
    const right = []

    for(let i=0; i<ratings.length;i++) {
        if(i === 0) {
            left.push(1)
        } else {
            if(ratings[i] > ratings[i-1]) {
                left.push(left[i-1]+1)
            } else {
                left.push(1)
            }
        }
    }
    for(let i=ratings.length-1; i>=0; i--) {
        if(i === ratings.length-1) {
            right.push(1)
        } else {
            if(ratings[i] > ratings[i+1]) {
                right.push(right[right.length-1] + 1)
            } else {
                right.push(1)
            }
        }
    }

    right.reverse()
    let ans = 0
    for(let i=0; i<right.length; i++) {
        ans += Math.max(left[i], right[i])
    }
    return ans
};