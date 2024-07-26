/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowelArr = []
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    for(const ch of s) {
        if(vowelSet.has(ch)) {
            vowelArr.push(ch)
        }
    }
    if(vowelArr.length === 0) return s //no vowels

    vowelArr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    let p=0, q=0
    let res = ""
    while(p < s.length) {
        if(vowelSet.has(s[p])) {
            res += vowelArr[q]
            p++
            q++
        } else {
            res += s[p]
            p++
        }
    }
    return res
};