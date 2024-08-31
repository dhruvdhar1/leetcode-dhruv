/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

var accountsMerge = function(accounts) {
    const parent = accounts.map((_, i) => i); //[0,1,2,3,4,5,6]
    const union = (n1, n2) => {
        const p1 = find(n1)
        const p2 = find(n2)
        if(p1 !== p2) {
            parent[p1] = p2
        }
    }
    const find = (n1) => {
        if(parent[n1] !== n1) {
            return find(parent[n1])
        }
        return n1
    }
    const emailMap = new Map()
    for(let i=0; i<accounts.length; i++) {
        for(let j=1; j<accounts[i].length; j++) {
            const email = accounts[i][j]
            if(!emailMap.has(email)) {
                emailMap.set(email, i)
            } else {
                //merging
                const existingAcc = emailMap.get(email)
                union(i, existingAcc)
            }
        }
    }
    const accToEmailMap = new Map()
    for(let i=0; i<accounts.length; i++) {
        const acc = i
        const parent = find(acc)
        if(!accToEmailMap.has(parent)) {
            accToEmailMap.set(parent, [])
        }
        accToEmailMap.get(parent).push(...accounts[i].slice(1))
    }
    // console.log("emailmap: ", accToEmailMap)
    const res = []

    for(const [key, emails] of accToEmailMap) {
        const name = accounts[key][0]
        const emailSet = Array.from(new Set(emails)).sort()
        res.push([name, ...emailSet])
    }

    return res;
};

//TC: O(m * nlogn)
//SC: O(n)