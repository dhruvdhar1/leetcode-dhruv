/**
 * @param {string} s
 * @return {string}
 */
var smallestString = function(s) {
    // const newChar = String.fromCharCode((ch.charCodeAt(0) - 1))
    const len = s.length
    let i=0
    const res = []
    while(s[i] === "a" && i < len) {
        i++
        res.push("a")
    }
    if(i === len) {
        res[res.length-1] = "z"
        return res.join("")
    }
    let j=i;
    while(j<len && s[j] !== "a") {
        const ch = s[j]
        res.push(String.fromCharCode((ch.charCodeAt(0) - 1)))
        j++
    }
    while(j<len) {
        res.push(s[j])
        j++
    }
    return res.join("")
};