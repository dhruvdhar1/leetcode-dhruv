/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) return s
    
    let str = ""
    for(let i=0; i<numRows; i++) {
        const offset = 2 * (numRows-1)
        for(let j = i; j<s.length; j= j+offset) {
            str += s[j]
            if(i > 0 && i < numRows-1 && (j + offset - 2*i) < s.length) {
                // console.log("-- ", s[j + offset - 2*i])
                str += s[j + offset - 2*i]
            }
        }
    }
    return str
};