/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const arr = []
    for(let i=0; i<26; i++) {
        arr.push(0)
    }
    for(const ch of magazine) {
        const index = ch.charCodeAt(0) - 97
        arr[index] =  arr[index]+1
    }
    for(const ch of ransomNote) {
        const index = ch.charCodeAt(0) - 97
        if(arr[index] > 0) {
            arr[index]--
        } else {
            return false
        }
    }
    return true
};