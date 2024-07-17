/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function(total, cost1, cost2) {
    let numPen = 0
    let count = 0
    while(numPen * cost1 <= total) {
        const rem = total - numPen*cost1
        count += (parseInt(rem/cost2) + 1)
        numPen++
    }
    
    return count
};