/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()
    const res = []
    for(const word of strs) {
        const strArr = []
        for(let i=0; i<=26; i++) {
            strArr.push(0)
        }

        for(let i=0; i<word.length; i++) {
            const ch = word.charCodeAt(i) - 97
            strArr[ch] += 1
        }
        const key = strArr.join(':')
        if(!map.has(key)) {
            map.set(key, [])
        }
        const arr = map.get(key)
        arr.push(word)
        map.set(key, arr)
    }
    for(const [key, value] of map) {
        // console.log(key)
        res.push(value)
    }
    return res
};