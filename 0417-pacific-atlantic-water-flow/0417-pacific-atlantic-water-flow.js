/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    function dfs(i, j, prevheight, visited) {
        const key = `${i}:${j}`
        if(i < 0 || j < 0 || i >= heights.length || j >= heights[0].length
                || visited.has(key) || heights[i][j] < prevheight) return
        visited.add(key)
        dfs(i+1, j, heights[i][j], visited)
        dfs(i-1, j, heights[i][j], visited)
        dfs(i, j+1, heights[i][j], visited)
        dfs(i, j-1, heights[i][j], visited)
    }
    const pacSet = new Set()
    const atlSet = new Set()
    
    for(let r=0; r<heights[0].length; r++) {
        dfs(0, r, heights[0][r], pacSet)
        dfs(heights.length-1, r, heights[heights.length-1][r], atlSet)
    }

    for(let c=0; c<heights.length; c++) {
        dfs(c, 0, heights[c][0], pacSet)
        dfs(c, heights[0].length-1, heights[c][heights[0].length-1], atlSet)
    }

    const res = []
    for(const cor of pacSet) {
        if(atlSet.has(cor)) {
            res.push(cor.split(":"))
        }
    }
    return res
};