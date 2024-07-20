/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let l=0, r=0
    let res = ""
    while(r < word.length) {
        let count = 1
        while(r < word.length && word[r] === word[r+1] && count < 9) {
            count++
            r++
        }
        res += `${count}${word[r]}`
        l=r+1
        r=l
    }
    return res
};