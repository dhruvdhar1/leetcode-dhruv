/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    for(let i=0; i<s.length; i++) {
        const part1 = s.slice(0, i+1)
        const part2 = s.slice(i+1, s.length)
        const rotated = part2+part1
        if(goal === rotated) {
            return true
        }
    }

    return false
};