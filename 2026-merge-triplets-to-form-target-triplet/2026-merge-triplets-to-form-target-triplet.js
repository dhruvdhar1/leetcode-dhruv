/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
    let a = false, b = false, c = false

    for(const triplet of triplets) {
        if(triplet[0] > target[0] || triplet[1] > target[1] || triplet[2] > target[2]) continue;
        if(triplet[0] === target[0]) a = true
        if(triplet[1] === target[1]) b = true
        if(triplet[2] === target[2]) c = true

        if(a && b && c) return true
    }
    return false
};