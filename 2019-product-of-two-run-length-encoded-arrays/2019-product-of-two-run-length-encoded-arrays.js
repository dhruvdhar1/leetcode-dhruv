/**
 * @param {number[][]} encoded1
 * @param {number[][]} encoded2
 * @return {number[][]}
 */
var findRLEArray = function(encoded1, encoded2) {
    let p=0, q=0
    let res = []
    while (p < encoded1.length && q < encoded2.length) {
        const prod = encoded1[p][0] * encoded2[q][0]
        const freq = Math.min(encoded1[p][1], encoded2[q][1])
        if(res.length > 0 && prod === res[res.length-1][0]) {
            res[res.length-1][1] += freq
        } else {
            res.push([prod, freq])
        }
        encoded1[p][1] -= freq
        encoded2[q][1] -= freq
        if(encoded1[p][1] < encoded2[q][1]) {
            p++
        } else if (encoded1[p][1] > encoded2[q][1]) {
            q++
        } else {
            p++
            q++
        }
    }
     
    return res
};