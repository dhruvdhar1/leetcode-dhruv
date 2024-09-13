/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()
    const res = []
    for(const word of strs) {
        const strArr = new Array(26).fill(0)

        for(let i=0; i<word.length; i++) {
            const ch = word.charCodeAt(i) - 97
            strArr[ch] += 1
        }
        const key = strArr.join(':')
        if(!map.has(key)) {
            map.set(key, [])
        }
        map.get(key).push(word)
    }
    for(const [key, value] of map) {
        res.push(value)
    }
    return res
};