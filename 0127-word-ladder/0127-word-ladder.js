/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
    
    {
        *ot: [hot, dot, lot]
        h*t: [hit, hot, ]
        ho*: [hot , hit]
        do*: [dot, dog]
        d*t: [dot]
        d*g: [dog]
        *og: [dog, cog, log]
        l*t: [lot]
        lo*: [lot, log]
        l*g: [log]
        c*g: [cog]
        co*: [cog]
    }
    
    queue: []
    visited: [[hit, 1][hot, 2][dot, 2][lot, 2][dot, 3][dog, 3][lot, 3][log, 3][cog,4]]
 */
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
    // console.log(adj)
    const visited = new Set()
    visited.add(beginWord)
    const q = [[beginWord,1]]
    // let res = 1
    while(q.length > 0) {
        const len = q.length
        for(let i=0; i<len; i++) {
            const pop = q.shift()
            console.log(pop)
            if(pop[0] === endWord) {
                return pop[1]
            }
            for(let i=0; i<pop[0].length; i++) {
                const pattern = pop[0].slice(0, i) + '*' + pop[0].slice(i+1)
                const neigh = adj.get(pattern) || []
                // console.log(pattern, " : ", neigh)
                for(const n of neigh) {
                    // console.log("n: ", n)
                    if(!visited.has(n)) {
                        q.push([n, pop[1]+1])
                        visited.add(n)
                    }
                }
            }
        }
    }
    return 0
};