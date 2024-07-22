/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    let maxP = -1, maxG = -1, maxM = -1
    let res = 0
    const map = new Map()

    for(let i=0; i<garbage.length; i++) {
        const garbageStr = garbage[i]
        const articles = [0,0,0] //M, P, G
        for(const ch of garbageStr) {
            if(ch === "G") {
                articles[2]++
                maxG = i
            }
            else if(ch === "P") {
                articles[1]++
                maxP = i
            }
            else {
                articles[0]++
                maxM = i
            }
        }
        map.set(i, articles)
    }
    // console.log("mmm: ", map)
    //M
    let travelTime = 0, pickupTime = 0
    for(let i=0; i<garbage.length; i++) {
        if(i > maxM) break
        if(i !== 0) {
            travelTime += travel[i-1]
        }
        const articles = map.get(i)
        const metal = articles[0]
        if(metal > 0) {
            pickupTime += metal
        }
    }
    res += (travelTime + pickupTime)

    //G
    travelTime = 0, pickupTime = 0
    for(let i=0; i<garbage.length; i++) {
        if(i > maxG) break
        if(i !== 0) {
            travelTime += travel[i-1]
        }
        const articles = map.get(i)
        const glass = articles[2]
        if(glass > 0) {
            pickupTime += glass
        }
    }
    res += (travelTime + pickupTime)

    travelTime = 0, pickupTime = 0
    for(let i=0; i<garbage.length; i++) {
        if(i > maxP) break
        if(i !== 0) {
            travelTime += travel[i-1]
        }
        const articles = map.get(i)
        const paper = articles[1]
        if(paper > 0) {
            pickupTime += paper
        }
    }
    res += (travelTime + pickupTime)

    return res
};