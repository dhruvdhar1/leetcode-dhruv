/**
 * @param {number[]} ages
 * @return {number}
 */
function isValid(age1, age2) {
    if(age2 > age1) return false
    if(age2 <= (0.5*age1+7)) return false
    // if(age2 > 100 && age1 < 100) return false
    return true
}
var numFriendRequests = function(ages) {
    const map = new Map()
    for(const age of ages) {
        map.set(age, (map.get(age) || 0) + 1)
    }
    console.log(map)
    let res = 0
    for(const [age1, count1] of map) {
        for(const [age2, count2] of map) {
            if(isValid(age1, age2)) {
                res += count1 * count2
                if(age1 === age2) {
                    res -= count2
                }
            }
        }
    }
    return res
};