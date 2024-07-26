/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const map = new Map()
    const res = []
    for(const cp of cpdomains) {
        const cpdom = cp.split(" ")
        const visits = Number.parseInt(cpdom[0])
        const parts = cpdom[1].split(".")
        let dom1, dom2, dom3
        if(parts.length > 2) {
            dom1 = `${parts[0]}.${parts[1]}.${parts[2]}`
            dom2 = `${parts[1]}.${parts[2]}`
            dom3 = `${parts[2]}`
            const dom1Freq = map.get(dom1) || 0
            map.set(dom1, dom1Freq+visits)
        } else {
            dom2 = `${parts[0]}.${parts[1]}`
            dom3 = `${parts[1]}`
        }
        // console.log(dom1, " : ", dom2, " : ", dom3)
        const dom2Freq = map.get(dom2) || 0
        const dom3Freq = map.get(dom3) || 0

        map.set(dom2, dom2Freq+visits)
        map.set(dom3, dom3Freq+visits)
    }
    for(const [key, val] of map) {
        res.push(`${val} ${key}`)
    }
    return res
};