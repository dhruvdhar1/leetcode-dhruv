/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    function checkAtlantic(i, j, visited) {
        // console.log(i, " : ", j)
        const key = `${i}:${j}`
        if(i >= heights.length-1 || j >= heights[0].length-1) return true
        if(i < 0 || j < 0 || visited.has(key)) return false

        let flag = false
        visited.add(key)
        if(heights[i+1][j] <= heights[i][j]) {
            flag = flag || checkAtlantic(i+1, j, visited)
        }
        if(heights[i][j+1] <= heights[i][j]) {
            flag = flag || checkAtlantic(i, j+1, visited)
        }
        if(i-1 >= 0 && heights[i-1][j] <= heights[i][j]) {
            flag = flag || checkAtlantic(i-1, j, visited)
        }
        if(j-1 >= 0 && heights[i][j-1] <= heights[i][j]) {
            flag = flag || checkAtlantic(i, j-1, visited)
        }
        return flag
    }


    function checkPacific(i, j, visited) {
        const key = `${i}:${j}`
        if(i <= 0 || j <= 0) return true
        if(i >= heights.length || j >= heights[0].length || visited.has(key)) return false

        let flag = false
        visited.add(key)
        if(i+1 <= heights.length-1 && heights[i+1][j] <= heights[i][j]) {
            flag = flag || checkPacific(i+1, j, visited)
        }
        if(j+1 <= heights[0].length && heights[i][j+1] <= heights[i][j]) {
            flag = flag || checkPacific(i, j+1, visited)
        }
        if(heights[i-1][j] <= heights[i][j]) {
            flag = flag || checkPacific(i-1, j, visited)
        }
        if(heights[i][j-1] <= heights[i][j]) {
            flag = flag || checkPacific(i, j-1, visited)
        }
        return flag
    }
    const res = []
    
    for(let i=0; i<heights.length; i++) {
        for(let j=0; j<heights[0].length; j++) {
            let visited = new Set()
            const atlantic = checkAtlantic(i, j, visited)
            visited = new Set()
            const pacific = checkPacific(i, j, visited)
            if(atlantic && pacific) {
                res.push([i,j])
            }
        }
    }
    return res
};