/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let l=0, r=people.length-1
    people.sort((a, b) => b-a)
    let count = 0
    while(l <= r) {
        if((people[l] + people[r]) <= limit) {
            l++
            r--
        } else {
            l++
        }
        count++
    }
    return count
};