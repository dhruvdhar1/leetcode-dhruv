/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {

    let res = 0
    for(let i=0; i<s.length; i++) {
        const map = new Map()
        for(let j=i; j<s.length; j++) {    
            let min = 1000000
            let max = -1
            const f = map.get(s[j]) || 0
            map.set(s[j], f+1)
            // const vals = Object.values(map)
            for(const [key, val] of map) {
                // console.log("vvvv ", val)
                min = Math.min(min, val)
                max = Math.max(max, val)
            }
            res += max-min
        }

    }
    return res
};