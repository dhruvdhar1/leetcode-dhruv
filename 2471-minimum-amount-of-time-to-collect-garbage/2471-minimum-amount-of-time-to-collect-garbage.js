/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    let last = [-1, -1, -1]
    let res = 0
    const map = new Map()

    for(let i=0; i<garbage.length; i++) {
        const garbageStr = garbage[i]
        for(const ch of garbageStr) {
            if(ch === "G") {
                last[2] = i
            }
            else if(ch === "P") {
                last[1] = i
            }
            else {
                last[0] = i
            }
        }
        res += garbageStr.length
    }
    for(let i=1; i<travel.length; i++) {
        travel[i] = travel[i] + travel[i-1]
    }

    for(const ind in ["M", "P", "G"]) {
        const l = last[ind]
        if(l > 0) {
            // console.log("llll: ", l, " : ", travel[l-1])
            res += travel[l-1]
        }
    }
    return res
};