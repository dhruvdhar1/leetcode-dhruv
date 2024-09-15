/**
 * @param {string[]} words
 * @return {number}
 */
var numSpecialEquivGroups = function(words) {
    const set = new Set()
    for(const word of words) {
        let even = [], odd = []
        for(let i=0; i<word.length; i++) {
            if(i%2 === 0) {
                even.push(word.charAt(i))
            } else {
                odd.push(word.charAt(i))
            }
        }
        even.sort()
        odd.sort()
        set.add(`${even.join('')}${odd.join('')}`)
    }
    return set.size
};