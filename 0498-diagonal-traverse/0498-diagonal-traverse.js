/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const res = []
    const map = new Map()
    for(let i=0; i<mat.length; i++) {
        for(j=0; j<mat[i].length; j++) {
            if(!map.has(i+j)) {
                map.set(i+j, [])
            }
            map.get(i+j).push(mat[i][j])
        }
    }

    for(const [key, list] of map) {
        if(key%2 === 0) {
            list.reverse()
        }
        res.push(...list)
    }
    return res
};