/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let res = ""
    const str = s.trim()
    let word = ""
    for(let i=0; i<str.length; i++) {
        const ch = str[i]
        if(ch === " ") {
            if(word.trim()) {
                res = " " + word + res
                word = ""
            }
        } else {
            word += ch
        }
    }
    res = word + res
    return res.trim()
};