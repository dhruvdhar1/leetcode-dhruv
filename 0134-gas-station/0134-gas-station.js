/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const gasSum = gas.reduce((acc, curr) => {
        acc += curr
        return acc
    }, 0)
    const costSum = cost.reduce((acc, curr) => {
        acc += curr
        return acc
    }, 0)
    if(costSum > gasSum) return -1
    let startInd = gas.length
    let sum = 0
    for(let i=0; i<gas.length; i++) {
        const diff = gas[i]-cost[i]
        sum += diff
        if(sum < 0) {
            sum = 0
            startInd = gas.length
        } else {
            startInd = Math.min(startInd, i)
        }
    }
    return startInd


};