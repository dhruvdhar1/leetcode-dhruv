class RandomizedSet {
    constructor() {
        this.map = new Map()
        this.arr = []
    }

    insert(val) {
        if(this.map.has(val)) return false
        this.map.set(val, this.arr.length)
        this.arr.push(val)
        return true
    }
    remove(val) {
        if(this.map.has(val)) {
            const ind = this.map.get(val)
            const lastEl = this.arr[this.arr.length-1]
            this.map.delete(val)
            if(lastEl !== val) {
                this.arr[ind] = lastEl
                this.map.set(lastEl, ind)
            }
            this.arr.pop()
            return true
        }
        return false
    }
    getRandom() {
        const rand = parseInt(Math.random() * this.arr.length)
        return this.arr[rand]
    }
}