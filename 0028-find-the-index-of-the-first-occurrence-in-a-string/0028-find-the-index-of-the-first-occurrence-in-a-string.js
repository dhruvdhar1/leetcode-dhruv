/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let index = -1
    let p = 0, q = 0
    const needleLen = needle.length
    for(let i=0; i<haystack.length; i++) {
        const substr = haystack.substring(i, needleLen+i)
        if(substr === needle) {
            return i
        }
    }
    return -1
};