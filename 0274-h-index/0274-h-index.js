/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let hIndex = 0
    citations.sort((a, b) => b-a)
    for(let i=0; i<citations.length; i++) {
        if(citations[i] > i) {
            hIndex++
        }
    }
    return hIndex
};