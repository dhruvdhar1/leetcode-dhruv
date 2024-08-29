/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    const isdigit = (ch) => ch.charCodeAt(0) >= 48 && ch.charCodeAt(0) < 58
    let p=0, q=0
    while(p<word.length && q<abbr.length) {
        let num = 0
        if(isdigit(abbr[q])) {
            while(q  < abbr.length && isdigit(abbr[q])) {
                if(num == 0 && abbr[q] === '0') {
                    return false
                }
                num = num*10 + Number(abbr[q])
                q++
            }
            if(p+num > word.length) {
                return false
            }
            p = (p+num)
        } else {
            if(abbr[q] !== word[p]) {
                return false
            }
            q++
            p++
        }
    }
    return p >= word.length && q >= abbr.length
};