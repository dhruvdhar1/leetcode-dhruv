/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

var accountsMerge = function(accounts) {
    const accLen = accounts.length
    const parent = []

    for(let i=0; i<accLen; i++) {
        parent.push(i)
    }

    const find = (el) => {
        if(el !== parent[el]) return find(parent[el])
        return el;
    }
    const union = (el1, el2) => {
        const p1 = find(el1)
        const p2 = find(el2)
        if(p1 !== p2) {
            parent[p2] = p1
        }
    }
    
    const emailMap = new Map()
    for(let i=0; i<accounts.length; i++) {
        for(let j=1; j<accounts[i].length; j++) {
            const email = accounts[i][j]
            if(emailMap.has(email)) {
                //perform merge..
                const existingAcc = emailMap.get(email);
                union(i, existingAcc)
            } else {
                emailMap.set(email, i)
            }
        }
    }

    const mergeMap = new Map()
    for(const [email, accInd] of emailMap) {
        const leader = find(accInd)
        if(!mergeMap.has(leader)) {
            mergeMap.set(leader, [])
        }
        mergeMap.get(leader).push(email)
    }
    
    const res = []
    for(const [accInd, emails] of mergeMap) {
        const name = accounts[accInd][0]
        res.push([name, ...emails.sort()])
    }
    return res
};