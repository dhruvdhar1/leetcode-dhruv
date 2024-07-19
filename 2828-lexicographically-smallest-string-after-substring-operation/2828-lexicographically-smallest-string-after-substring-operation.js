/**
 * @param {string} s
 * @return {string}
 */
var smallestString = function(s) {
    const arr = s.split("")
    let p=0
    while(s[p] === 'a') {
        p++
    }
    if(p === s.length) {
        arr[arr.length-1] = "z"
    }
    while(p < s.length && s[p] !== 'a') {
        const ch = s[p]
        const newCh = String.fromCharCode(ch.charCodeAt(0)-1)
        arr[p] = newCh
        p++
    }
    return arr.join("")
};