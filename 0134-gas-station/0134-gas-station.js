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

    const diff = []
    for(let i=0; i<gas.length; i++) {
        diff.push(gas[i] - cost[i])
    }
    
    let total = 0
    let ind = 100000
    for(let i=0; i<diff.length; i++) {
        total += diff[i];
        if(total < 0) {
            total = 0
            ind = 1000000
        } else {
            ind = Math.min(ind, i)
        }
    }
    return ind
};