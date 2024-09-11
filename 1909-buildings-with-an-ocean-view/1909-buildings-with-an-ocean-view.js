/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    let pivot = -1
    let res = []
    for(let i=heights.length-1; i>=0; i--) {
        if(pivot === -1 || heights[i] > heights[pivot]) {
            pivot = i
            res.push(i)
        }
    }
    res.reverse()
    console.log("res: ", res)
    return res
};