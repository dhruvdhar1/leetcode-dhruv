/**
 * @param {string} a
 * @param {string} b
 * @param {string} c
 * @return {string}
 */

const merge = (str1, str2) => {
    if(str1.includes(str2)) return str1
    for(let i=0; i<str1.length; i++) {
        if(str1[i] !== str2[0]) continue
        let m=i
        let n=0
        while(m < str1.length && n < str2.length && str1[m] === str2[n]) {
            m++
            n++
        }
        if(m >= str1.length) {
            //substring search success
            return str1 + str2.slice(n)
        }
    }
    return str1 + str2
}
var minimumString = function(a, b, c) {
    const arr = [a,b,c]
    let ans = ""
    let minCount = 10000000
    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
            for(let k=0; k<3; k++) {
                if(i !== j && j !== k && k !== i) {
                    let merged = ""
                    merged = merge(arr[i], arr[j])
                    merged = merge(merged, arr[k])
                    // console.log(arr[i], " : ", arr[j], " : ", arr[k], " : merged: ", merged)
                    if(merged.length < minCount) {
                        ans = merged
                        minCount = ans.length
                    } else if(merged.length === minCount) {
                        const sameLengthArr = [ans, merged].sort()
                        ans = sameLengthArr[0]
                    }
                }
            }
        }
    }
    
    return ans
};