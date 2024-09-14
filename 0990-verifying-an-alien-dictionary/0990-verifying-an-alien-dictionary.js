/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const map = new Map([['', -1]])
    for(let i=0; i<order.length; i++) {
        map.set(order.charAt(i), i)
    }

    for(let i=1; i<words.length; i++) {
        let j=0
        while(j < words[i].length && j<words[i-1].length && words[i].charAt(j) === words[i-1].charAt(j)) {
            j++
        }
        // if(words[i].charAt(j) === '' && words[i-1].charAt(j) !== '') return false
        const p1 = map.get(words[i-1].charAt(j))
        const p2 = map.get(words[i].charAt(j))
        if(p1 > p2) {
            return false
        }
    }
    return true
};