/**
 * @param {number[]} ages
 * @return {number}
 */
function isValid(age1, age2) {
    if(age2 <= 0.5*age1+7) return false
    if(age2 > age1) return false
    return true
}
var numFriendRequests = function(ages) {
    const map = new Map()
    for(const age of ages) {
        const f = map.get(age) || 0
        map.set(age, f+1)
    }
    let res = 0
    for(const [age1, f1] of map) {
        for(const [age2, f2] of map) {
            if(isValid(age1, age2)) {
                res += f1*f2
                if(age1 === age2) {
                    res -= f1
                }
            }
        }
    }
    return res
};