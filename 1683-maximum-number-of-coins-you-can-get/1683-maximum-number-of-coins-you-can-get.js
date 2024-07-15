/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    const numPiles = piles.length/3
    let b = piles.length - numPiles

    piles.sort((a, b) => b-a)
    // console.log("pppp: ", piles)
    let a=0, p=1
    let res = 0

    while(b < piles.length) {
        // console.log("---- ", piles[p])
        res += piles[p]
        a = p+1
        p = a+1
        b++
    }
    return res
};