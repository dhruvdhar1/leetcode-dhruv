function simplifyPath(path: string): string {
    const arr = path.split('/')
    const stk = []
    for(const val of arr) {
        if(val === '' || val === '.') {
            continue
        } else if(val === '..') {
            if(stk.length > 0) {
                stk.pop()
            }
        } else {
            stk.push(val)
        }
    }
    // console.log(stk.join('/'))
    return `/${stk.join('/')}`
};