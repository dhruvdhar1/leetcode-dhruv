/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    let max = "0"
    for(let i=0; i<number.length; i++) {
        const ch = number[i]
        if(ch === digit) {
            const newNum = number.slice(0,i) + number.slice(i+1, number.length)
            if(newNum > max) {
                max = newNum
            }
        }
    }
    return max
};