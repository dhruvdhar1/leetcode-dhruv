/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const trimmed = s.trim()
    const words = trimmed.split(' ')
    return words[words.length-1].length
};