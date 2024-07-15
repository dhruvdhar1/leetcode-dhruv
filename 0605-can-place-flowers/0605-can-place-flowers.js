/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(n == 0) return true
    if(flowerbed.length === 1) {
        if(flowerbed[0] === 0) return true
        return false
    }
    for(let i=0; i<flowerbed.length; i++) {
        if(flowerbed[i] === 0) {
            if(i>0 && flowerbed[i-1] === 0 && i<flowerbed.length-1 && flowerbed[i+1] === 0) {
                flowerbed[i] = 1
                n--
            } else if(i == 0 && flowerbed[i+1] === 0) {
                flowerbed[i] = 1
                n--
            }  else if(i == flowerbed.length-1 && flowerbed[i-1] === 0) {
                flowerbed[i] = 1
                n--
            }
        }
        if(n === 0) return true
    }
    return n === 0
};