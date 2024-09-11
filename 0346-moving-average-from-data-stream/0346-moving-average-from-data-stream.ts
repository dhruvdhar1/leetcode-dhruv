class MovingAverage {
    window = null
    size = null
    currSum = null
    constructor(size: number) {
        this.window = []
        this.size = size
        this.currSum = 0
    }

    next(val: number): number {
        if(this.window.length >= this.size) {
            const pop = this.window.shift()
            this.currSum -= pop
        }
        this.currSum += val
        this.window.push(val)
        // console.log("window: ", this.window)
        return this.currSum/this.window.length
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */