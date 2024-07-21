/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l=0, r=height.length-1
    let res = -1
    while(r>=l) {
        const width = r-l
        const area = width * Math.min(height[l], height[r])
        res = Math.max(res, area)
        if(height[l] >= height[r]) {
            r--
        } else {
            l++
        }
    }
    return res
};