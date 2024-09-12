/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if(!wordList.includes(endWord)) {
        return 0
    }
    wordList.push(beginWord)
    const adj = new Map()
    for(const word of wordList) {
        for(let i=0; i<word.length; i++) {
            const pattern = word.slice(0, i) + '*' + word.slice(i+1)
            if(!adj.has(pattern)) {
                adj.set(pattern, [])
            }
            adj.get(pattern).push(word)
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
            for(let i=0; i<pop.length; i++) {
                const pattern = pop.slice(0, i) + '*' + pop.slice(i+1)
                const neigh = adj.get(pattern) || []
                for(const n of neigh) {
                    if(!visited.has(n)) {
                        q.push(n)
                        visited.add(n)
                    }
                }
            }
        }
        res++
    }
    return 0
};