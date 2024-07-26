/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const arr = new Array(10).fill(0)
    const vowels = "AEIOUaeiou"
    const vowelMapping = new Map([
        ['A',0],
        ['E',1],
        ['I',2],
        ['O',3],
        ['U',4],
        ['a',5],
        ['e',6],
        ['i',7],
        ['o',8],
        ['u',9]
    ])
    for(const ch of s) {
        if(vowelMapping.has(ch)) {
            const ind = vowelMapping.get(ch)
            arr[ind]++
        }
    }
    // console.log("arr: ", arr)
    let p=0, q=0
    let res = ""
    for(const ch of s) {
        while(arr[q] <= 0) {
            q++
        }
        if(vowelMapping.has(ch)) {
            res += vowels[q]
            arr[q]--
        } else {
            res += s[p]
        }
        p++
    }
    return res
};