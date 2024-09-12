/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function isValid(s1, s2) {
    let count = 0
    for(let i=0; i<s1.length; i++) {
        if(s1.charAt(i) !== s2.charAt(i)) {
            count++
        }
    }
    return count < 2
}
var ladderLength = function(beginWord, endWord, wordList) {
    if(!wordList.includes(endWord)) {
        return 0
    }
    wordList.push(beginWord)
    const adj = new Map()
    for(const word1 of wordList) {
        for(const word2 of wordList) {
            if(word1 !== word2 && isValid(word1, word2)) {
                if(!adj.has(word1)) {
                    adj.set(word1, new Set())
                }
                if(!adj.has(word2)) {
                    adj.set(word2, new Set())
                }
                adj.get(word1).add(word2)
                adj.get(word2).add(word1)
            }
        }
    }
    const visited = new Set()
    visited.add(beginWord)
    const q = [beginWord]
    let res = 1
    while(q.length > 0) {
        const len = q.length
        for(let i=0; i<len; i++) {
            const pop = q.shift()
            if(pop === endWord) {
                return res
            }
            const neigh = adj.get(pop) || []
            for(const n of neigh) {
                if(!visited.has(n)) {
                    visited.add(n)
                    q.push(n)
                }
            }
        }
        res++
    }

    return 0
};