/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    //base condition if tasks.length < 3
    if(tasks.length === 1) return -1
    if(tasks.length === 2) {
        return tasks[0] === tasks[1] ? 1 : -1
    }
    tasks.sort((a, b) => a-b)
    let l=0, r=1, count=0
    while(r <= tasks.length) {
        while(tasks[l] === tasks[r]) {
            r++
        }
        const len = r-l
        if(len >= 2) {
            count += Math.ceil(len/3)
            l = r
            r = l+1
        } else {
            return -1
        }
    }
    return count
};