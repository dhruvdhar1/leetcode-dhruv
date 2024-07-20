/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const smap = new Map()
    const tmap = new Map()

    for(let i=0; i<s.length; i++) {
        const sch = s[i]
        const tch = t[i]

        if(smap.has(sch)) {


            // const val = smap.get(sch)
            if(!(smap.get(sch) === tch && tmap.get(tch) === sch)) return false


        } else if(tmap.has(tch)) {
            if(!(smap.get(sch) === tch && tmap.get(tch) === sch)) return false
        } else {
            smap.set(sch, tch)
            tmap.set(tch, sch)
        }
    }
    return true
};