/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    let count = 0
    const map = new Map()
    for(const task of tasks) {
        if(!map.has(task)) {
            map.set(task, 0)
        }
        const freq = map.get(task)
        map.set(task, freq+1)
    }
    for(const [key, val] of map) {
        if(val === 1) return -1
        else {
            count += Math.ceil(val/3)
        }
    }
    return count
};